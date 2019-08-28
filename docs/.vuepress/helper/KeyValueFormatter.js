import {ObjectFormatter} from './CommonFormatters.js';

export default class KeyValueFormatter extends ObjectFormatter {
    static data() {
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "array",
                        "model": "attributes",
                        "showModeElementUpButton": false,
                        "showModeElementDownButton": false,
                        "itemFieldClasses": "form-control",
                        "itemContainerClasses": "input-group pb-2",
                        "newElementButtonLabelClasses": "",
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
                        "newElementButtonLabel": "+ Add Attribute",
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
                    }
                ]
            }
        });
    }

    static deleteUndefined(object) {
        return object
    }

    static toPHPObject(modelObject) {
        let modelObjectCopy = {};
        let key;
        for (key in modelObject) {
            modelObjectCopy[key] = modelObject[key]; // copies each property to the objCopy object
        }
        let newObject = {};

        if (modelObject['attributes']) {
            for (let i = 0; modelObjectCopy['attributes'] && i < modelObjectCopy['attributes'].length; i++) {
                newObject[modelObjectCopy['attributes'][i]['key']] = modelObjectCopy['attributes'][i]['value'];
            }
        }

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }
};

