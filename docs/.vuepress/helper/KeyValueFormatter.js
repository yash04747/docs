import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep} from 'lodash';
export default class KeyValueFormatter extends ObjectFormatter {
    static data(modelName) {
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "array",
                        "model": modelName,
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

    static toPHPObject(modelObject, modelName) {
        let modelObjectCopy = cloneDeep(modelObject);
        let newObject = {};

        if (modelObject[modelName]) {
            for (let i = 0; modelObjectCopy[modelName] && i < modelObjectCopy[modelName].length; i++) {
                newObject[modelObjectCopy[modelName][i]['key']] = modelObjectCopy[modelName][i]['value'];
            }
        }

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }
};

