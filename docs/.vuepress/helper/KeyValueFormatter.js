import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, map, find} from 'lodash';
export default class KeyValueFormatter extends ObjectFormatter {
    static data(schemaObject) {
        let {name: modelName, newElementButtonLabel: newElementButtonLabel, selectValues: selectValues, 
            listName: listName, booleanFields: booleanFields, selectFields: selectFields, defaultObj: defaultObj} = schemaObject;
        let isShowingText = (selectValues && selectValues.length > 0) ? false : true;

        // helper method to detect field type. if key is in known list, "boolean" or "select"
        function detectFieldType(model) {
            let key = model.keyText || model.keySelect;

            if (key) {
                if (booleanFields  && booleanFields.indexOf(key) >= 0) return "boolean";

                if (selectFields && selectFields.length > 0) { 
                    let selectKeys = map(selectFields, 'key');
                    if (selectKeys && selectKeys.indexOf(key) >= 0) return "select";
                }
            }
            return "text";
        }
        // Let's keep things easy to find. SORT!
        if ( selectValues )
            selectValues.sort();

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
                                    // KEY part, show "datalist" if we have "selectValues", plain "text" otherwise
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
                                        "listName": listName ? listName : "keyslist_" + modelName,
                                        "values": selectValues,
                                        "visible": !isShowingText
                                    },
                                    // Value part: supports "text", "boolean", "select", "object" is yet to come
                                    {
                                        "type": "input",
                                        "inputType": "text",
                                        "label": "Value",
                                        "model": "valueText",
                                        "visible": function(model) {
                                            return detectFieldType(model) === "text";
                                        }
                                    },
                                    {
                                        "type": "switch",
                                        "label": "Value",
                                        "model": "valueSwitch",
                                        "visible": function(model) {
                                            return detectFieldType(model) === "boolean";
                                        },
                                        "default": function(model) {
                                            let key = model.keyText || model.keySelect;
                                            return defaultObj.hasOwnProperty(key) ? defaultObj[key] : null;
                                        }
                                    },
                                    {
                                        "type": "datalist",
                                        "label": "Value",
                                        "model": "valueSelect",
                                        "listName": function(model) {
                                            let key = model.keyText || model.keySelect;
                                            return listName ? listName : "valueslist_" + modelName + key;
                                        },
                                        "values": function(model) {
                                            let key = model.keyText || model.keySelect;
                                            if (detectFieldType(model) === "select") 
                                            {
                                                let obj = find(selectFields, {key: key});
                                                return obj.values;
                                            }
                                            return [];
                                        },
                                        "visible": function(model) {
                                            return detectFieldType(model) === "select";
                                        }
                                    }
                                ]
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
                let valueKey = modelObjectCopy[modelName][i]['valueSelect'] ? 'valueSelect' : modelObjectCopy[modelName][i]['valueSwitch'] ? 'valueSwitch' : 'valueText';
                newObject[key] = modelObjectCopy[modelName][i][valueKey];
            }
        }

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }
};

