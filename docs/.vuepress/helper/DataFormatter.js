import {ObjectFormatter} from './CommonFormatters';
import {compact} from 'lodash';

export default class DataFormatter extends ObjectFormatter {
    static data() {
        return {
            "schema": {
                "fields": [
                    {
                        "model": "type",
                        "inputName": "type",
                        "required": true,
                        "validator": "string",

                        "type": "vueMultiSelect",
                        "selectOptions": {
                            "multiple": false,
                            "showLabels": false
                        },
                        "values": ["categories", "menus", "pages", "terms", "taxonomies", "posts", "post_types", "tags", "image_sizes", "menu_locations", "elusive_icons", "roles", "sidebars", "capabilities", "users", "array", "multi_dimensional", "callback", "custom"],
                    },
                    {
                        "type": "array",
                        "label": "Data Arguments",
                        "model": "values",
                        "validator": "array",
                        "showModeElementUpButton": false,
                        "showModeElementDownButton": false,
                        "itemFieldClasses": "form-control",
                        "itemContainerClasses": "input-group pb-2 collapse-container",
                        "newElementButtonLabelClasses": "",
                        "itemContainerComponent": "field-array-bootstrap-accordion-item",
                        "newElementButtonLabel": "+ Add Data Argument",
                        "itemContainerHeader": function (model, schema, index) {
                            let string = "Undefined";
                            if (model && model.id) {
                                string = model.id;
                                if (model.type) {
                                    if (model.type == "string") {
                                        if (model.valueText)
                                            string += " => " + model.valueText;
                                    } else {
                                        if (model.valueArray.length)
                                            string += " => array(" + model.valueArray.length + ")";
                                    }
                                }
                            }
                            return string;
                        },
                        "items": {
                            "type": "custom-object",
                            "default": {},
                            "schema": {
                                "fields": [
                                    {
                                        "type": 'input',
                                        "inputType": 'text',
                                        "label": 'ID',
                                        "model": 'id',
                                        "required": true
                                    },
                                    {
                                        "type": 'select',
                                        "label": 'Type',
                                        "model": 'type',
                                        "values": ["string", "array"],
                                        "required": true
                                    },
                                    {
                                        "type": 'input',
                                        "inputType": 'text',
                                        "label": 'Value',
                                        "model": 'valueText',
                                        "required": true,
                                        "visible": function (model) {
                                            return model && model.type && model.type === "string";
                                        }
                                    },



                                    {
                                        "type": 'array',
                                        "inputName": 'values',
                                        "label": 'Value',
										"itemContainerClasses": "field-array-group",
                                        "model": 'valueArray',
                                        "required": true,
                                        "showRemoveButton": true,
                                        "newElementButtonLabel": "+ Add Value",
                                        "visible": function (model) {
                                            return model && model.type && model.type === "array";
                                        }
                                    }
                                ]
                            }
                        },
                        "visible": function (model) {
                            let invalid = [
                                'custom',
                                'callback',
                                'array',
                                'multi_dimensional'
                            ];
                            return model && model.type && !invalid.includes(model.type);
                        },
                        "required": function (model) {
                            return model && (model.type === "custom" || model.type === "callback");
                        }
                    },
                    {
                        "type": "input",
                        "inputType": "text",
                        "label": "Text Value",
                        "model": "dataText",
                        "inputName": "dataText",
                        "visible": function (model) {
                            let valid = [
                                'model',
                                'custom'
                            ];
                            return model && model.type && valid.includes(model.type);
                        }
                    },
                    {
                        "type": "array",
                        "model": "array",
                        "showRemoveButton": true,
                        "newElementButtonLabel": "+ Add Array Value",
                        "visible": function (model) {
                            return model && model.type === "array";
                        }
                    },
                    {
                        "type": "array",
                        "model": "multi_dimensional",
                        "showModeElementUpButton": false,
                        "showModeElementDownButton": false,
                        "itemFieldClasses": "form-control",
                        "itemContainerClasses": "input-group pb-2",
                        "newElementButtonLabelClasses": "",
                        "visible": function (model) {
                            return model && model.type && model.type === "multi_dimensional";
                        },
                        "itemContainerComponent": "field-array-bootstrap-accordion-item",
                        "itemContainerHeader": function (model, schema, index) {
                            let string = "Undefined";
                            if (model && model.key) {
                                string = model.key;
                                if (model.value) {
                                    string += " => " + model.value;
                                }
                            }
                            return string;
                        },
                        // "itemContainerClasses": "input-group attributes",
                        "newElementButtonLabel": "+ Add Array Element",
                        "items": {
                            "type": "custom-object",
                            "default": {},
                            "schema": {
                                "fields": [
                                    {
                                        "type": "input",
                                        "inputType": "text",
                                        "label": "Key",
                                        "model": "key"
                                    },
                                    {
                                        "type": "input",
                                        "inputType": "text",
                                        "label": "Value",
                                        "model": "value"
                                    }]
                            }
                        }
                    },

                ]
            }
        };
    }

    static default(defaultObj) {
        return defaultObj;
    }

    static toPHPObject(modelObject) {
        let newObject = this.generateNewObject(modelObject);

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            if (modelObject.type === "custom" || modelObject.type === "array" || modelObject.type === "multi_dimensional")
                return {data: newObject};
            else {
                return {data: modelObject.type, args: newObject};
            }
        }
    }

    static generateNewObject(modelObject) {
        let newObject = {};
        if (this.isArgsPlainText(modelObject))
            newObject = modelObject.dataText;
        else if (modelObject && modelObject.type && modelObject.type === "array")
            newObject = compact(modelObject.array);
        else if (modelObject && modelObject.type && modelObject.type === "multi_dimensional") {
            for (let i = 0; modelObject.multi_dimensional && i < modelObject.multi_dimensional.length; i++) {
                newObject[modelObject.multi_dimensional[i]['key']] = modelObject.multi_dimensional[i]['value'];
            }
        }

        else {
            var args_array = modelObject.values;
            for (let i = 0; args_array && i < args_array.length; i++) {
                if (undefined === args_array[i].id || undefined === args_array[i].type || (undefined === args_array[i].valueText && undefined === args_array[i].valueArray)) continue;
                if (args_array[i].type === "string")
                    newObject[args_array[i].id] = this.convertToRightObject(args_array[i].valueText);
                else
                    newObject[args_array[i].id] = compact(args_array[i].valueArray);
            }
        }

        return newObject;
    }

    static isArgsPlainText(modelObject) {
        return (modelObject && modelObject.type && (modelObject.type.toLowerCase() === "custom" || modelObject.type.toLowerCase() === "callback") &&
            modelObject.dataText && modelObject.dataText.length > 0);
    }

    static convertToRightObject(modelObject) {
        if (modelObject === "true") {
            modelObject = true;
        } else if (modelObject === "false") {
            modelObject = false;
        }
        return modelObject;
    }
};

