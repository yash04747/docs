import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, compact} from 'lodash';

export default class OutputFormatter extends ObjectFormatter {
    static data() {
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "select",
                        "model": "type",
                        "label": "Type",
                        "values": ["text", "basic", "object"]
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
                        "type": "object",
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
                            "type": "object",
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

    static toPHPObject(modelObject) {
        if (modelObject['output'] && modelObject['output'].length == 0) {
            return {}
        }

        let newOutput = {};

        if (modelObject.type === 'text') 
            return [modelObject['text_value']];

        if (modelObject.type === 'basic' && modelObject.basic_value && modelObject.basic_value.selector)
            newOutput[modelObject.basic_value.selector] = compact(modelObject.basic_value.values).join(", ");
        

        if (modelObject.type === 'object' && modelObject.object_selector) 
            newOutput = modelObject.object_selector.filter(obj => (obj.selector && obj.value))
                .reduce((obj, item) => {
                    obj[item.selector] = item.value;
                    return obj;
                });
        

        return newOutput;
    }
};

