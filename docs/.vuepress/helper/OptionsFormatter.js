import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep} from 'lodash';
export default class OptionsFormatter extends ObjectFormatter {
    static data() {
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "array",
                        "model": "enabled",
                        "label": "Enabled",
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
                        "newElementButtonLabel": "+ Add Enabled Options",
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
                    {
                        "type": "array",
                        "model": "disabled",
                        "label": "Disabled",
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
                        "newElementButtonLabel": "+ Add Disabled Options",
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
        let modelObjectCopy = cloneDeep(modelObject);
        let newObject = {};

        ['enabled', 'disabled'].forEach((key) => {
            if (modelObject[key]) {
                newObject[key] = {};
                for (let i = 0; modelObjectCopy[key] && i < modelObjectCopy[key].length; i++) {
                    newObject[key][modelObjectCopy[key][i]['key']] = modelObjectCopy[key][i]['value'];
                }
            }    
        })
        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
        return modelObject;
    }
};

