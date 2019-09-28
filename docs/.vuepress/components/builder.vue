<style src="./builder/style.css"></style>
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
    import {extend, cloneDeep, sortBy, filter, findIndex} from 'lodash';

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
                    validateAfterLoad: true,
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
        methods: {
            toggle() {
                this.showSection = !this.showSection
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
                }
                const specialFieldsName = ["required", "data", "attributes", "validate"];

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
                    let model = cloneDeep(modelObj);
                    StoreWithExpiration.set(model.type, 'model', model, 1000 * 60 * 30);
                    model = this.deleteEmptyValues(schema, model);
                    model = this.transformCustomArgs(schema, model);
                    model = this.sortModel(schema, model);
                    return this.phpify(model);
                }
            },

            deleteEmptyValues: function (schema, model) {
                // Delete empty values
                for (var propName in model) {
                    if (model[propName] === null || model[propName] === undefined || model[propName] === '') {
                        delete model[propName];
                    }
                    if (propName !== "type" && schema['redux']['fields'].hasOwnProperty(
                        propName) && schema['redux']['fields'][propName].hasOwnProperty(
                        'default')) {
                        if (schema['redux']['fields'][propName]['default'] === model[propName]) { // && schema['redux']['fields'][propName]['default'] !== true) {
                            delete model[propName];
                        }
                    }
                }
                return model;
            },

            // convert raw model object to comprehensive model object, mainly based on Formatter
            transformCustomArgs: function (schema, model) {
                let prep_model = cloneDeep(model);

                delete prep_model.data;
                delete prep_model.validate;

                // special fields handling first
                if (model.required) prep_model.required = RequiredFormatter.toPHPObject(model.required);
                if (model.data) prep_model = extend(prep_model, DataFormatter.toPHPObject(model.data));
                if (model.validate) prep_model = Object.assign(prep_model, ValidateFormatter.toPHPObject(model.validate));


                // For simple key=>value props, we will deal with it at the last stage and override what the default has done.
                let keyvalueSchema = filter(schema.fields, {formatter: "keyvalue"});
                keyvalueSchema.forEach((keyvalue) => {
                    if (model[keyvalue.model])
                        prep_model[keyvalue.model] = KeyValueFormatter.toPHPObject(prep_model[keyvalue.model], keyvalue.model);
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


                // Very dirty watch: data takes priority over options
                let optionsSchemaIndex = findIndex(schema.fields, {model: "options"});
                if (optionsSchemaIndex != -1) {
                    let optionsSchema = cloneDeep(schema.fields[optionsSchemaIndex]);
                    if (optionsSchema.visible !== (Object.keys(prep_model).indexOf('data') === -1)) {
                        optionsSchema.visible  = (Object.keys(prep_model).indexOf('data') === -1);
                        schema.fields.splice(optionsSchemaIndex, 1, optionsSchema);
                        this.schema = cloneDeep(schema);
                    }
                }

                let shouldDeleteOptions = findIndex(schema.fields, {model: "options", visible: false}) != -1;
                if (shouldDeleteOptions) {
                    delete prep_model['options'];
                }



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
