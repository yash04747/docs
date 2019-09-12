import VueFormGenerator from 'vue-form-generator';
import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, compact} from 'lodash';

export default class OutputFormatter extends ObjectFormatter {
    static selectedSelectors = [];
    static data(fieldType, possibleProperties) {
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "select",
                        "model": "type",
                        "label": "Type",
                        "values": OutputFormatter.possibleOutputValues(fieldType),
                        "hideNoneSelectedText": true,
                        "visible": function (model) {
                            return OutputFormatter.possibleOutputValues(fieldType).length > 1;
                        },
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
                        "newElementButtonLabelClasses": "btn btn-outline-dark",
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
                                        "validator": OutputFormatter.duplicateValidator,
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
                    }
                ]
            }
        });
    }

    static duplicateValidator(model, value) {
        if (model!==null && OutputFormatter.selectedSelectors.indexOf(model) !== -1) {
            return ["Duplicate Entry"];
        } else {
            OutputFormatter.selectedSelectors.push(model);
            return [];
        }
    }

    static possibleOutputValues() {
        let possibleValues = ["text", "basic", "object"];
        if (arguments[0] !== undefined) {
            possibleValues = [];
            possibleValues.push(arguments[0]);

        }
        return possibleValues;
    }

    static toPHPObject(modelObject) {
        if (modelObject['output'] && modelObject['output'].length == 0) {
            return {}
        }

        let newOutput = {};

        if (modelObject.type === 'text' && modelObject['text_value'] !== null && modelObject['text_value'] !== undefined) 
            return [modelObject['text_value']];

        if (modelObject.type === 'basic' && modelObject.basic_value && modelObject.basic_value.selector)
            newOutput[modelObject.basic_value.selector] = compact(modelObject.basic_value.values).join(", ");
        
        if (modelObject.type === 'object' && modelObject.object_selector) 
            modelObject.object_selector.forEach((obj) => {
                let selector = obj.selector;//selectorSelect ? obj.selectorSelect : obj.selectorText;
                if (selector && obj.value) newOutput[selector] = obj.value; 
            });

        return newOutput;
    }
};

