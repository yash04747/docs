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
    import {FieldObject} from 'vfg-field-object';
    import FieldArrayBootstrapAccordionItem from './builder/fields/bootstrap-accordion-container';
    import {fieldDatalist} from './builder/fields/fieldDatalist';
    import {TextFormatter, BoolFormatter, ArrayFormatter, ObjectFormatter} from '../helper/CommonFormatters.js';
    import RequiredFormatter from '../helper/RequiredFormatter.js';
    import DataFormatter from '../helper/DataFormatter.js';
    import KeyValueFormatter from '../helper/KeyValueFormatter';
    import ValidateFormatter from '../helper/ValidateFormatter';
    import StoreWithExpiration from '../helper/StoreWithExpiration';
    import {cloneDeep} from 'lodash';

    export default {

        render() {

        },
        components: {
            "vue-form-generator": VueFormGenerator.component,
            BootstrapVue,
            vueMultiselect,
            FieldArray,
            FieldObject,
            FieldArrayBootstrapAccordionItem,
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
                        disabled: true,

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
            to_return['schema']['fields'].sort((a, b) => {
                (a['order'] > b['order']) ? 1 : -1
            });
            if (this.$attrs.builder_json.model)
                to_return['model'] = Object.assign(to_return['model'], this.$attrs.builder_json.model);
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

                // let keys = Object.keys(redux_field['fields']);
                if (this.$attrs.builder_json.model)
                    this.model = Object.assign(this.model, this.$attrs.builder_json.model);
            },

            // Helper method used in data()
            formatSchemaField: function (fieldObject, key) {
                const formatters = {
                    'input': TextFormatter,
                    'text': TextFormatter,
                    'bool': BoolFormatter,
                    'switch': BoolFormatter,
                    'array': ArrayFormatter,
                    'object': ObjectFormatter,
                    'required': RequiredFormatter,
                    'data': DataFormatter,
                    'attributes': KeyValueFormatter,
                    'validate': ValidateFormatter
                }
                const specialFieldsName = ["required", "data", "attributes", "validate"];

                let FormatterClass;
                if (specialFieldsName.indexOf(key) != -1)
                    FormatterClass = formatters[key];
                else
                    FormatterClass = formatters[fieldObject.type];

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
                    model = this.transformCustomArgs(model);
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

            transformCustomArgs: function (model) {
                function copy(mainObj) {
                    let objCopy = {}; // objCopy will store a copy of the mainObj
                    let key;

                    for (key in mainObj) {
                        objCopy[key] = mainObj[key]; // copies each property to the objCopy object
                    }
                    return objCopy;
                }

                let prep_model = copy(model);
                delete prep_model.data;
                delete prep_model.validate;

                if (model.required) prep_model.required = RequiredFormatter.toPHPObject(model.required);
                if (model.attributes) prep_model.attributes = KeyValueFormatter.toPHPObject(prep_model.attributes);
                if (model.data) prep_model = Object.assign(prep_model, DataFormatter.toPHPObject(model.data));
                if (model.validate) prep_model = Object.assign(prep_model, ValidateFormatter.toPHPObject(model.validate));
                return prep_model;
            },

            phpify: function (model) {
                var json = JSON.stringify(model, undefined, 4);
                json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');

                var to_replace = ['title', 'subtitle', 'description', 'note', 'desc'];
                var arrayLength = to_replace.length;
                for (var i = 0; i < arrayLength; i++) {
                    var key = to_replace[i];
                    var r = new RegExp('"' + key + '": "(.*)"', "g"); // global match and ignore case flag
                    json = json.replace(r, '"' + key + '": esc_html__( "$1" , "redux_docs_generator" )');
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
                            match = match.replace(':', '')
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
