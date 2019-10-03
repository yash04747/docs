<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<template>
    <div class="redux-builder">
        <div class="panel thirty">
            <div class="panel-heading" v-on:click="toggle">
                Customize →
            </div>
            <div class="panel-body" v-show="showSection">
                <small>Any changes you make in these fields will be reflected in the example declaration.</small>

                <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                <input type="button" class="btn btn-sm btn-info float-right" value="Reset" v-on:click="reset"/>
                <br style="clear: both;">
            </div>
        </div>

        <div class="seventy">
            <div class="panel-body">
                <div class="language-php extra-class">
                    <pre class="language-php extra-class"><code v-if="model" v-html="toPHP(schema, model)"></code></pre>
                </div>
            </div>
        </div>
        <br style="clear: both;">
    </div>
</template>

<script>
    import VueFormGenerator from 'vue-form-generator';
    import BootstrapVue from 'bootstrap-vue';
    import vueMultiselect from "vue-multiselect";
    import {FieldArray} from 'vfg-field-array';
    import FieldArrayBootstrapAccordionItem from './builder/fields/bootstrap-accordion-container';
    import {fieldDatalist} from './builder/fields/fieldDatalist';
    import {fieldCustomObject} from './builder/fields/fieldCustomObject';
    import {TextFormatter, BoolFormatter, SelectFormatter, MultiSelectFormatter, ArrayFormatter, ObjectFormatter, DatalistFormatter} from '../helper/CommonFormatters.js';
    import RequiredFormatter from '../helper/RequiredFormatter.js';
    import DataFormatter from '../helper/DataFormatter.js';
    import KeyValueFormatter from '../helper/KeyValueFormatter';
    import ValidateFormatter from '../helper/ValidateFormatter';
    import DynamicTypeFormatter from '../helper/DynamicTypeFormatter';
    import MultiArrayFormatter from '../helper/MultiArrayFormatter';
    import StoreWithExpiration from '../helper/StoreWithExpiration';
    import {extend, cloneDeep, sortBy, filter, find, findIndex, map, concat, isEqual} from 'lodash';

    export default {

        render() {

        },
        components: {
            "vue-form-generator": VueFormGenerator.component,
            BootstrapVue,
            vueMultiselect,
            FieldArray,
            FieldArrayBootstrapAccordionItem,
            fieldCustomObject,
            fieldDatalist
        },
        props: ['field'],
        data() {
            if (!this.$attrs.builder_json) {
                return
            }
            let redux_field = _.cloneDeep(this.$attrs.builder_json);
            let that = this;
            let field_type = redux_field.type;
            let keys = Object.keys(redux_field['fields']);

            let to_return = {
                model: {
                    id: "FIELD_ID",
                    type: field_type
                },
                schema: {
                    fields: [],
                    redux: redux_field
                },
                formOptions: {
                    validateAfterLoad: false,
                    validateAfterChanged: true
                },
                showSection: false
            };

            let order = 0;
            // Push for field_type, example, type:"typography"; field_type is not included in JSON, thus we need manual handling.
            to_return['schema']['fields'].push({
                type: "input",
                inputType: "text",
                label: 'Type',
                model: 'type',
                readonly: true,
                featured: false,
                order: 1,
                disabled: true
            });

            keys.forEach(function (key) {
                let schemaFieldObject = that.formatSchemaField(redux_field['fields'][key], key);
                to_return['schema']['fields'].push(schemaFieldObject);
                to_return['model'][key] = redux_field['fields'][key]['default'];
            });
            to_return['schema']['fields'] = sortBy(to_return['schema']['fields'], 'order');

            // get the stored version of last-session model and prepare model from it.
            let cachedModel = StoreWithExpiration.get(field_type, 'model');
            if (cachedModel !== null) to_return.model = {...to_return['model'], ...cachedModel};

            return to_return;
        },
        computed: {
            
        },
        methods: {
            toggle() {
                this.showSection = !this.showSection
            },
            fieldType: function () {
                return this.$attrs.builder_json.type
            },
            reset() {
                let redux_field = _.cloneDeep(this.$attrs.builder_json);
                let modelObj = {
                    id: "FIELD_ID",
                    type: redux_field.type
                };
                Object.keys(redux_field['fields']).forEach(function (key) {
                    modelObj[key] = redux_field['fields'][key]['default'];
                });

                // kind of dirty fix: object reset needs special attention
                ['data', 'output'].forEach(function(key) {
                    if (Object.keys(redux_field['fields']).indexOf(key) != -1 && !redux_field['fields'][key]['default'])
                        modelObj[key] = {};
                });
                this.model = cloneDeep(modelObj);

            },

            // Helper method used in data()
            formatSchemaField: function (fieldObject, key) {
                const formatters = {
                    'input': TextFormatter,
                    'text': TextFormatter,
                    'bool': BoolFormatter,
                    'switch': BoolFormatter,
                    'vueMultiselect': MultiSelectFormatter,
                    'select': SelectFormatter,
                    'datalist': DatalistFormatter,
                    'array': ArrayFormatter,
                    'object': ObjectFormatter,
                    'custom-object': ObjectFormatter,
                    'required': RequiredFormatter,
                    'data': DataFormatter,
                    'keyvalue': KeyValueFormatter,
                    'validate': ValidateFormatter,
                    'dynamic-type': DynamicTypeFormatter,
                    'multiarray': MultiArrayFormatter
                };
                const specialFieldsName = ["required", "data", "attributes", "validate"];

                fieldObject['fieldType'] = this.fieldType();

                let FormatterClass;
                if (specialFieldsName.indexOf(key) != -1)
                    FormatterClass = formatters[key];
                else
                    FormatterClass = formatters[fieldObject.type];
                if (fieldObject.formatter) FormatterClass = formatters[fieldObject.formatter];


                // main code-line to get the scheme json based on selected FormatterClass
                fieldObject = Object.assign(fieldObject, FormatterClass.data(fieldObject));

                fieldObject['default'] = FormatterClass.default(fieldObject['default']);

                fieldObject['label'] = fieldObject['title'];
                delete fieldObject['title'];
                fieldObject['hint'] = fieldObject['description'];
                fieldObject['model'] = fieldObject['name'];
                delete fieldObject['name'];

                return fieldObject;
            },

            toPHP: function (schema, modelObj) {
                if (schema && modelObj) {
                    // Store it to localstorage
                    let model = cloneDeep(modelObj);
                    StoreWithExpiration.set(model.type, 'model', model, 1000 * 60 * 30);

                    let keyvalueSchema = filter(schema.fields, {formatter: "keyvalue"});
                    keyvalueSchema.forEach((keyvalue) => {
                        console.log(keyvalue.model, model[keyvalue.model]);
                    });


                    model = this.deleteEmptyValues(schema, model);
                    this.dependencyHook(schema, model);
                    model = this.transformCustomArgs(schema, model);
                    console.log("model preview", model.preview);
                    model = this.sortModel(schema, model);
                    return this.phpify(model);
                }
            },

            deleteEmptyValues: function (schema, model) {
                for (var propName in model) {
                    // Delete empty values
                    if (model[propName] === null || model[propName] === undefined || model[propName] === '') {
                        delete model[propName];
                    }
                    // Delete if the selected value is equal to default
                    if (propName !== "type" && schema['redux']['fields'].hasOwnProperty(
                        propName) && schema['redux']['fields'][propName].hasOwnProperty(
                        'default')) {
                        if (schema['redux']['fields'][propName]['default'] === model[propName]) {
                            delete model[propName];
                        }
                    }
                }
                return model;
            },

            // check the dependency between fields
            // for example min_input_length of select is going to be used only when ajax is true
            // From above example, as a convention, dependentChild: min_input_length, dependentParent: ajax
            dependencyHook: function(schema, model) {
                let prep_model = cloneDeep(this.model);
                let that = this;

                let dependentFields = filter(schema.fields, "dependent");
                
                // visibility dependency handling, ex: min_input_length is only visible when ajax is true
                let visibleDependentFields = filter(dependentFields, {"dependencyType": "visible"});
                visibleDependentFields.forEach((dependentChild) => {
                    let childSchemaIndex = findIndex(schema.fields, {model: dependentChild.model});
                    let dependencyCondition = (prep_model[dependentChild.dependency.parent] == dependentChild.dependency.activatedOn);
                    if (dependentChild.visible !== dependencyCondition) {
                        // update dependent child schema if condition changed
                        dependentChild.visible  = dependencyCondition;
                        schema.fields.splice(childSchemaIndex, 1, dependentChild);
                        that.schema = cloneDeep(schema);
                    }
                });

                // type dependency handling, for example, multi=true -> default: object type, multi=false -> default: text
                let typeDependentFields = filter(dependentFields, {"dependencyType": "type"});
                typeDependentFields.forEach((dependentChild) => {
                    let childSchemaIndex = findIndex(schema.fields, {model: dependentChild.model});
                    let childSchema = schema.fields[childSchemaIndex];

                    // loop through the statuses, to allow it switching from one to another
                    let statuses = childSchema.dependency.status;
                    let dependentParent = childSchema.dependency.parent;
                    statuses.forEach((status) => {
                        if (prep_model[dependentParent] == status.parentValue) {
                            if (typeof prep_model[dependentChild.model] != status.typeof) that.model[dependentChild.model] = status.default;
                            if (childSchema.type != status.type) {
                                childSchema.type = status.type;
                                childSchema.formatter = status.formatter;
                                childSchema.inputType = status.inputType;
                                schema.fields.splice(childSchemaIndex, 1, childSchema);
                                that.schema = cloneDeep(schema);
                            }
                        }
                    });
                });
/*
                // property dependency handling
                let propertyDependentFields = filter(dependentFields, {"dependencyType": "property"});
                propertyDependentFields.forEach((dependentChild) => {
                    let childSchemaIndex = findIndex(schema.fields, {model: dependentChild.model});
                    let childSchema = schema.fields[childSchemaIndex];

                    let dependentParent = childSchema.dependency.parent;
                    let dependentParentValue = prep_model[dependentParent];
                    // eraseField and found "-" means we should go there to remove "-"
                    if (dependentParentValue == childSchema.dependency.eraseField) {
                        if (childSchema.selectValues.length == 0 || searchStringInArray("-", childSchema.selectValues) != -1) {
                            childSchema.selectValues = concat(childSchema.selectValuesTemplate.array, childSchema.selectValuesTemplate.unaffected);
                            schema.fields.splice(childSchemaIndex, 1, childSchema);
                            that.schema = cloneDeep(schema);
                        }
                    } else {
                        if (childSchema.selectValues.length == 0 || searchStringInArray(dependentParentValue, childSchema.selectValues) == -1) {
                            let selectValuesArray = map(childSchema.selectValuesTemplate.array, (atom) => dependentParentValue+ "-" + atom);
                            childSchema.selectValues = concat(selectValuesArray, childSchema.selectValuesTemplate.unaffected);
                            schema.fields.splice(childSchemaIndex, 1, childSchema);
                            that.schema = cloneDeep(schema);
                        }
                    }
                });


                function searchStringInArray (str, strArray) {
                    for (var j=0; j<strArray.length; j++) {
                        if (strArray[j].match(str)) return j;
                    }
                    return -1;
                }
*/
                // Very dirty watch: data takes priority over options
                // This is specially handled as it is known dependency
                let optionsSchemaIndex = findIndex(schema.fields, {model: "options"});
                if (optionsSchemaIndex != -1) {
                    let optionsSchema = cloneDeep(schema.fields[optionsSchemaIndex]);
                    if (optionsSchema.visible !== (Object.keys(prep_model).indexOf('data') === -1)) {
                        optionsSchema.visible  = (Object.keys(prep_model).indexOf('data') === -1);
                        schema.fields.splice(optionsSchemaIndex, 1, optionsSchema);
                        this.schema = cloneDeep(schema);
                    }
                }
            },

            // convert raw model object to comprehensive model object, mainly based on Formatter
            transformCustomArgs: function (schema, model) {
                let prep_model = cloneDeep(model);
                let that = this;

                delete prep_model.data;
                delete prep_model.validate;

                // special fields handling first
                if (model.required) prep_model.required = RequiredFormatter.toPHPObject(model.required);
                if (model.data) prep_model = extend(prep_model, DataFormatter.toPHPObject(model.data));
                if (model.validate) prep_model = Object.assign(prep_model, ValidateFormatter.toPHPObject(model.validate));


                // For simple key=>value props

                let keyvalueSchema = filter(schema.fields, {formatter: "keyvalue"});
                /* console.log("this.model.preview", prep_model.preview);
                if (prep_model['update'] != true) {
                    
                    this.model.preview  = {...this.model.preview, ...{"preview": [{keySelect: "font-size", valueText: "33px"}]}};
                    this.model['update'] = true;
                }
                */

                keyvalueSchema.forEach((keyvalue) => {
                    let modelKey = keyvalue.model;
                    if (model[modelKey] && prep_model[modelKey]) {
                        // Only for keyvalue formatter, to set default object value when a new key is added
                        let schemaObject = find(schema.fields, {model: modelKey});
                        let generatedModel = KeyValueFormatter.generateModel(prep_model[modelKey], modelKey, schemaObject);
                        // debugger;
                        if (isEqual(generatedModel, prep_model[modelKey]) === false) 
                            that.model[modelKey] = {...that.model.modelKey, ...generatedModel};

                        // to PHP Object as the others
                        prep_model[modelKey] = KeyValueFormatter.toPHPObject(prep_model[modelKey], modelKey, that.fieldType());
                    }
                });

                // For multi array props: 'disable' => array ("", "", "", "", "'")
                let multiSchema = filter(schema.fields, {formatter: "multiarray"});
                multiSchema.forEach((multi) => {
                    if (model[multi.model] && model[multi.model].length > 0)
                        prep_model[multi.model] = MultiArrayFormatter.toPHPObject(prep_model[multi.model], multi);
                });

                // For Dynamic-type props(main example: "output"): type in ['text', 'boolean', 'basic', 'array']
                let dynamictypeSchema = filter(schema.fields, {formatter: "dynamic-type"});
                dynamictypeSchema.forEach((dynamicType) => {
                    if (model[dynamicType.model]) {
                        prep_model[dynamicType.model] = DynamicTypeFormatter.toPHPObject(prep_model[dynamicType.model], dynamicType);
                    }
                });

                // For switch/bool fields with custom On/Off text
                let booleanSchema = filter(schema.fields, {"type": "switch"});
                booleanSchema.forEach((booleanObj) => {
                    if (prep_model[booleanObj.model] === true && booleanObj.textOn)  prep_model[booleanObj.model] = booleanObj.textOn;
                    if (prep_model[booleanObj.model] === false && booleanObj.textOff)  prep_model[booleanObj.model] = booleanObj.textOff;
                });

                // Clean up after conversion
                Object.keys(prep_model).forEach((key) => {
                    if (!prep_model[key]) delete prep_model[key];
                    if (JSON.stringify(prep_model[key]) === JSON.stringify({})) delete prep_model[key];
                    if (JSON.stringify(prep_model[key]) === JSON.stringify([])) delete prep_model[key];
                });
               

                // remove options from model when visible is false
                let noVisibleSchema = filter(schema.fields, {visible: false});
                noVisibleSchema.forEach((noVisibleObj) => {
                    delete prep_model[noVisibleObj.model];
                });

                return prep_model;
            },

            sortModel: function(schema, model) {
                let newModel = {};
                schema.fields.forEach(obj => {
                    if (model[obj.model]) newModel[obj.model] = model[obj.model]
                });
                if (model.args) newModel.args = model.args;
                return newModel
            },

            phpify: function (model) {
                var json = JSON.stringify(model, undefined, 4);
                json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');

                var to_replace = ['title', 'subtitle', 'description', 'note', 'desc', 'placeholder'];
                var arrayLength = to_replace.length;
                for (var i = 0; i < arrayLength; i++) {
                    var key = to_replace[i];
                    var r = new RegExp('"' + key + '": "(.*)"', "g"); // global match and ignore case flag
                    json = json.replace(r, '"' + key + '": __( "$1" , "redux_docs_generator" )');
                }

                var data = json.replace(
                    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
                    function (match) {
                        var cls = 'number';

                        if (/^"/.test(match)) {
                            cls = 'single-quoted-string string';
                        } else if (/true|false/.test(match)) {
                            cls = 'boolean';
                        } else if (/null/.test(match)) {
                            cls = 'null';
                        }
                        var operator = '';
                        if (match.endsWith(':')) {
                            match = match.replace(':', '');
                            operator = "=>";
                        }
                        var string = '<span class="token ' + cls + '">' + match + '</span>';

                        if (operator == '') {
                            return string
                        } else {
                            string += ' <span class="token operator">' + operator + '</span>';
                            return string
                        }
                    }
                );

                data = data.replace(
                    /{/g, '<span class="token keyword">array</span>(').replace(
                    /}/g, '<span class="">)</span>').replace(
                    /\[/g, '<span class="token keyword">array</span>(').replace(
                    /]/g, '<span class="">)</span>').replace(/"/g, "'");

                return "<?php <br />Redux<span class=\"token punctuation\">:</span><span class=\"token punctuation\">:</span><span class=\"token function\">set_field</span><span class=\"token punctuation\">(</span> <span class=\"token single-quoted-string string\">'OPT_NAME'</span>, <span class=\"token single-quoted-string string\">'SECTION_ID'</span>, " + data + " <span class=\"token punctuation\">)</span>;";
            }


        },
    }
</script>
