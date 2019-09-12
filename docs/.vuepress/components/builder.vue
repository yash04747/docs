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
    import OutputFormatter from '../helper/OutputFormatter';
    import OptionsFormatter from '../helper/OptionsFormatter';
    import StoreWithExpiration from '../helper/StoreWithExpiration';
    import {extend, cloneDeep, sortBy} from 'lodash';

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
            let cachedModel = StoreWithExpiration.get(field_type, 'model');
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

            keys.forEach(function (key) {
                if (to_return['schema']['fields'].length === 1) {
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
                    if (redux_field['fields'][key]['order'])
                        to_return['schema']['fields']['order'] = redux_field['fields'][key]['order'];
                    else {
                        to_return['schema']['fields']['order'] = order;
                        order++;
                    }

                    to_return['model']['type'] = field_type;
                }

                let schemaFieldObject = that.formatSchemaField(redux_field['fields'][key], key);
                to_return['schema']['fields'].push(schemaFieldObject);

                to_return['model'][key] = redux_field['fields'][key]['default'];
            });

            if (cachedModel !== null) to_return.model = cachedModel;
            to_return['schema']['fields'] = sortBy(to_return['schema']['fields'], 'order');
            if (this.$attrs.builder_json.model){
                let newObj = {...this.$attrs.builder_json.model, ...to_return['model']};
                to_return['model'] = {...this.$attrs.builder_json.model, ...to_return['model']};
            }

            return to_return;
        },
        methods: {
            toggle() {
                this.showSection = !this.showSection
            },

            reset() {
                this.model = {
                    id: "FIELD_ID",
                    type: this.$attrs.builder_json.type
                };

                if (this.$attrs.builder_json.model)
                    this.model = {...this.$attrs.builder_json.model, ...this.model};
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
                    'output': OutputFormatter,
                    'options': OptionsFormatter
                }
                const specialFieldsName = ["required", "data", "attributes", "validate", "output", "options"];

                let FormatterClass;
                if (specialFieldsName.indexOf(key) != -1)
                    FormatterClass = formatters[key];
                else
                    FormatterClass = formatters[fieldObject.type];
                if (fieldObject.formatter) FormatterClass = formatters[fieldObject.formatter];


                if (key == "output")
                    fieldObject = Object.assign(fieldObject, FormatterClass.data(fieldObject['field-type'], fieldObject['properties']));
                else if (FormatterClass === KeyValueFormatter)
                    fieldObject = Object.assign(fieldObject, FormatterClass.data(fieldObject));
                else
                    fieldObject = Object.assign(fieldObject, FormatterClass.data());


                fieldObject['default'] = FormatterClass.default(fieldObject['default']);

                fieldObject['label'] = fieldObject['title'];
                delete fieldObject['title'];
                fieldObject['hint'] = fieldObject['description'];
                fieldObject['model'] = fieldObject['name'];
                delete fieldObject['name'];

                return fieldObject;
            },

            toPHP: function (schema, model) {
                if (schema && model) {
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
                        if (schema['redux']['fields'][propName]['default'] === model[propName] && schema['redux']['fields'][propName]['default'] !== true) {
                            delete model[propName];
                        }
                    }
                }
                return model;
            },

            transformCustomArgs: function (schema, model) {
                let prep_model = cloneDeep(model);

                delete prep_model.data;
                delete prep_model.validate;
                if (model.required) prep_model.required = RequiredFormatter.toPHPObject(model.required);
                if (model.options) prep_model.options = OptionsFormatter.toPHPObject(prep_model.options);
                
                if (model.data) prep_model = extend(prep_model, DataFormatter.toPHPObject(model.data));
                if (model.validate) prep_model = Object.assign(prep_model, ValidateFormatter.toPHPObject(model.validate));

                if (model.output) {
                    prep_model.output = OutputFormatter.toPHPObject(model.output);
                    if (JSON.stringify(prep_model.output) === JSON.stringify({})) delete prep_model.output;
                }

                // For simple key value, props, we will deal with it at the last stage and override what the default has done.
                let keyvalueSchema = _.filter(schema.fields, {formatter: "keyvalue"});
                keyvalueSchema.forEach((keyvalue) => {
                    if (model[keyvalue.model]) 
                        prep_model[keyvalue.model] = KeyValueFormatter.toPHPObject(prep_model[keyvalue.model], keyvalue.model);
                });

                return prep_model;
            },

            sortModel: function(schema, model) {
                let newModel = {};
                schema.fields.forEach(obj => {
                    if (model[obj.model]) newModel[obj.model] = model[obj.model]
                })
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
