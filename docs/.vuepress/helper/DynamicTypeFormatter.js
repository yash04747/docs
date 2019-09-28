import VueFormGenerator from 'vue-form-generator';
import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, compact} from 'lodash';

export default class DynamicTypeFormatter extends ObjectFormatter {
    static data(schemaObject) {
        let {possibleProperties: possibleProperties, possibleTypes: possibleTypes} = schemaObject;
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "radios",
                        "model": "type",
                        "label": "Type",
                        "values": function() {
                            return (possibleTypes && possibleTypes.length > 0) ? possibleTypes : ["text", "basic", "object"];
                        },
                        "default": "text",
                        "attributes": {
                            "label": { "class": "btn btn-sm btn-secondary" }
                        },
                        "hideNoneSelectedText": true,
                        "selectOptions": {
                            "hideNoneSelectedText": true
                        }
                    },
                    {
                        "type": "input",
                        "inputType": "text",
                        "label": "Selector",
                        "visible": function (model) {
                            return model && model.type === "text";
                        },
                        "model": "text_value"
                    },
                    {
                        "type": "switch",
                        "model": "bool_value",
                        "visible": function(model) {
                            return model && model.type === "boolean";
                        }
                    },
                    {
                        "type": "custom-object",
                        "model": "basic_value",
                        "default": {},
                        "schema": {
                            "fields": [
                                {
                                    "type": "input",
                                    "inputType": "text",
                                    "label": "Selector",
                                    "model": "selector"
                                },
                                {
                                    "type": "array",
                                    "showRemoveButton": true,
                                    "itemContainerClasses": "field-array-group",
                                    "newElementButtonLabelClasses": "btn btn-sm btn-secondary",
                                    "label": "Values",
                                    "model": "values"
                                }]
                        },
                        "visible": function (model) {
                            return model && model.type && model.type === "basic";
                        }
                    },
                    {
                        "type": "array",
                        "label": "Selectors",
                        "model": "object_selector",
                        "validator": "array",
                        "showRemoveButton": false,
                        "itemFieldClasses": "form-control",
                        "itemContainerClasses": "input-group pb-2",
                        "itemContainerComponent": "field-array-bootstrap-accordion-item",
                        "newElementButtonLabelClasses": "btn btn-sm btn-secondary",
                        "removeElementButtonClasses": "btn btn-danger input-group-append",
                        "newElementButtonLabel": "+ Add Output Item",
                        "itemContainerHeader": function (model, schema, index) {
                            if (model && model.selector) 
                                return model.value ? model.selector + " => " + model.value : model.selector;
                            return "Undefined"
                        },
                        "items": {
                            "type": "custom-object",
                            "default": {},
                            "schema": {
                                "fields": [
                                    {
                                        "type": "datalist",
                                        "model": "selector",
                                        "label": "Selector",
                                        "values": possibleProperties,
                                        "selectOptions": {
                                            "hideNoneSelectedText": true
                                        }
                                    },
                                    {
                                        "type": "input",
                                        "inputType": "text",
                                        "label": "Value",
                                        "model": "value"
                                    }
                                ]
                            }
                        },
                        "visible": function (model) {
                            return model && model.type && model.type === "object";
                        }
                    },

                    {
                        "model": "array_value",
                        "inputName": "array_value",
                        "label": "Array Values",
                        "type": "vueMultiSelect",
                        "selectOptions": {
                            "multiple": true,
                            "showLabels": false
                        },
                        "values": possibleProperties,
                        "visible": function(model) {
                            return model && model.type === "array";
                        }
                    }
                ]
            }
        });
    }


    static toPHPObject(modelObject, schemaObject) {

        let newOutput = {};

        // example: 'color' => '.header'
        if (modelObject.type === 'text' && modelObject['text_value'] !== null && modelObject['text_value'] !== undefined) 
            return modelObject['text_value'];

        // example: 'color' => '.header, .footer'
        if (modelObject.type === 'basic' && modelObject.basic_value && modelObject.basic_value.selector)
            newOutput[modelObject.basic_value.selector] = compact(modelObject.basic_value.values).join(", ");
        
        // example: 'color' => '.header', 'background-color' => '.footer'
        if (modelObject.type === 'object' && modelObject.object_selector) 
            modelObject.object_selector.forEach((obj) => {
                let selector = obj.selector;
                if (selector && obj.value) newOutput[selector] = obj.value; 
            });

        if (modelObject.type === 'boolean')
            return modelObject['bool_value'] === true;

        if (modelObject.type === 'array')
            return modelObject['array_value'];

        return newOutput;
    }
};

