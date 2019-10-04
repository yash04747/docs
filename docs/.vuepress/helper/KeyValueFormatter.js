import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, map, find, without, filter} from 'lodash';
import StoreWithExpiration from '../helper/StoreWithExpiration';
export default class KeyValueFormatter extends ObjectFormatter {
    static data(schemaObject) {
        let {fieldType: fieldType, name: modelName, newElementButtonLabel: newElementButtonLabel, selectValues: selectValues, 
            listName: listName, booleanFields: booleanFields, selectFields: selectFields, arrayFields: arrayFields,
            defaultObj: defaultObj} = schemaObject;
        let isShowingText = (selectValues && selectValues.length > 0) ? false : true;

        // helper method to detect field type. if key is in known list, "boolean" or "select", "array"
        function detectFieldType(model) {
            let key = model.keyText || model.keySelect;

            if (key) {
                if (booleanFields  && booleanFields.indexOf(key) >= 0) return "boolean";

                if (selectFields && selectFields.length > 0) { 
                    let selectKeys = map(selectFields, 'key');
                    if (selectKeys && selectKeys.indexOf(key) >= 0) return "select";
                }

                if (arrayFields  && arrayFields.indexOf(key) >= 0) return "array";
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
                        "newElementButtonLabelClasses": "btn btn-sm btn-secondary",
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
                                        "visible": isShowingText,
                                        "fieldClasses": "error",
                                        "validateDebounceTime" : 1000,
                                        "validator": function(model, value) {
                                            let cachedModel = StoreWithExpiration.get(fieldType, modelName);
                                            if (!!model && !!cachedModel && cachedModel.indexOf(model) !== -1 ) {
                                                let filteredModel =  filter(cachedModel, (c) => c == model);
                                                if (filteredModel.length > 1) return ["Duplicate Entry"];
                                            }
                                            return [];
                                        }
                                    },
                                    {
                                        "type": "datalist",
                                        "label": "Key",
                                        "model": "keySelect",
                                        "listName": listName ? listName : "keyslist_" + modelName,
                                        "values": selectValues,
                                        "visible": !isShowingText,
                                        "fieldClasses": "error",
                                        "featured": true,
                                        "validateDebounceTime" : 1000,
                                        "validator": function(model, value) {
                                            let cachedModel = StoreWithExpiration.get(fieldType, modelName);
                                            if (!!model && !!cachedModel && cachedModel.indexOf(model) !== -1 ) {
                                                let filteredModel =  filter(cachedModel, (c) => c == model);
                                                if (filteredModel.length > 1) return ["Duplicate Entry"];
                                            }
                                            return [];
                                        }
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
                                    },
                                    {
                                        "type": "array",
                                        "label": "Value",
                                        "model": "valueArray",
                                        "itemContainerClasses": "input-group pb-2 collapse-container",
                                        "visible": function(model) {
                                            return detectFieldType(model) == "array";
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

    static toPHPObject(modelObject, modelName, typeName) {
        let modelObjectCopy = cloneDeep(modelObject);
        let newObject = {}, modelKeys = [];

        if (modelObject[modelName]) {
            for (let i = 0; modelObjectCopy[modelName] && i < modelObjectCopy[modelName].length; i++) {
                let key = modelObjectCopy[modelName][i]['keyText'] ? modelObjectCopy[modelName][i]['keyText'] : modelObjectCopy[modelName][i]['keySelect'];
                let valueKey = find(['valueText', 'valueSelect', 'valueSwitch', 'valueArray'], (key) => !!modelObjectCopy[modelName][i][key] );
                modelKeys.push(key);
                if (valueKey) {
                    newObject[key] = modelObjectCopy[modelName][i][valueKey];
                }
            }
        }
        // save the keys array to check duplicate entry
        StoreWithExpiration.set(typeName, modelName, without(modelKeys, undefined, null), 1000 * 60 * 30);

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }

    // generate model with default value 
    static generateModel(modelObject, modelName, schemaObject) {
        let modelObjectCopy = cloneDeep(modelObject);
        let {booleanFields: booleanFields, selectFields: selectFields, arrayFields: arrayFields, default: defaultObj} = schemaObject;
        
        if (modelObject[modelName] && defaultObj) {
            for (let i = 0; modelObjectCopy[modelName] && i < modelObjectCopy[modelName].length; i++) {
                let key = modelObjectCopy[modelName][i]['keyText'] ? modelObjectCopy[modelName][i]['keyText'] : modelObjectCopy[modelName][i]['keySelect'];
                let valueKey = find(['valueText', 'valueSelect', 'valueSwitch', 'valueArray'], (key) => !!modelObjectCopy[modelName][i][key] );
                let valueFieldName = "valueText";
                if (!valueKey) { // default value is only valid to think only when there is no user input
                    // based on field type, select the value type to look for
                    if (booleanFields && booleanFields.indexOf(key) !== -1) valueFieldName = "valueSwitch";
                    if (selectFields && selectFields.indexOf(key) !== -1) valueFieldName = "valueSelect";
                    if (arrayFields && arrayFields.indexOf(key) !== -1) valueFieldName = "valueArray";
                    // replace that empty value record with default value set one.
                    let newObject = cloneDeep(modelObjectCopy[modelName][i]) || {};
                    newObject[valueFieldName] = defaultObj[key];
                    modelObjectCopy[modelName].splice(i, 1, newObject);
                }
            }
        }
        return modelObjectCopy;
    }
};

