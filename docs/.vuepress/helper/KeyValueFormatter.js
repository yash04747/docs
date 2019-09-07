import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep} from 'lodash';
export default class KeyValueFormatter extends ObjectFormatter {
    static data(schemaObject) {
        let {name: modelName, newElementButtonLabel: newElementButtonLabel, selectValues: selectValues, listName: listName} = schemaObject;
        let isShowingText = (selectValues && selectValues.length > 0) ? false : true;
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
                            if (model && (model.keyText || model.keySelect)) {
                                string = model.keyText ? model.keyText : model.keySelect;
                                if (model.value) {
                                    string += " => " + model.value;
                                }
                            }
                            return string;
                        },
                        "newElementButtonLabel": newElementButtonLabel, 
                        "items": {
                            "type": "custom-object",
                            "default": {},
                            "schema": {
                                "fields": [
                                    {
                                        "type": "input",
                                        "inputType": "text",
                                        "label": "Key",
                                        "model": "keyText",
                                        "visible": isShowingText
                                    },
                                    {
                                        "type": "datalist",
                                        "label": "Key",
                                        "model": "keySelect",
                                        "listName": listName ? listName : "keyslist",
                                        "values": selectValues,
                                        "visible": !isShowingText
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
                let key = modelObjectCopy[modelName][i]['keyText'] ? modelObjectCopy[modelName][i]['keyText'] : modelObjectCopy[modelName][i]['keySelect'];
                newObject[key] = modelObjectCopy[modelName][i]['value'];
            }
        }

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }
};

