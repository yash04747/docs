import {ArrayFormatter} from './CommonFormatters.js';
import {filter, without, cloneDeep} from 'lodash';
import StoreWithExpiration from '../helper/StoreWithExpiration';


export default class MultiArrayFormatter extends ArrayFormatter {
    static data(schemaObject) {
        let {name: modelName, fieldType: fieldType, arrayType: arrayType, 
            valueType: valueType, categoryValues: categoryValues, itemValues: itemValues, visible: visible} = schemaObject;
        return Object.assign(super.data(), {
            "showModeElementUpButton": false,
            "showModeElementDownButton": false,
            "itemFieldClasses": "form-control",
            "itemContainerClasses": "input-group pb-2",
            "newElementButtonLabel": "+ Add Category",
            "newElementButtonLabelClasses": "",
            "itemContainerComponent": "field-array-bootstrap-accordion-item",
            "showRemoveButton": false,
            "visible": visible ? visible : true,
            "itemContainerHeader": function (model, schema, index) {
                let string = "Unnamed Category";
                if (model && model.CategoryKey) {
                    string = "Category(" + model.CategoryKey + ")";
                }
                return string;
            },
            "items": {
                "type": "custom-object",
                "default": {},
                "schema": {
                    "fields": [
                        // KEY part, only show when array type is "key"
                        {
                            "type": "datalist",
                            "label": "Category",
                            "model": "CategoryKey",
                            "values": categoryValues,
                            "visible": (arrayType === "key"),
                            "validateDebounceTime" : 1000,
                            "validator": function(model, value) {
                                if (arrayType === "key") {
                                    let cachedModel = StoreWithExpiration.get(fieldType, modelName);
                                    if (!!model && !!cachedModel && cachedModel.indexOf(model) !== -1 ) {
                                        let filteredModel =  filter(cachedModel, (c) => c == model);
                                        if (filteredModel.length > 1) return ["Duplicate Entry"];
                                    }
                                }
                                return [];
                            }
                        },
                        // VALUE part
                        {
                            "type": "array", 
                            "model": "CategoryKeyValueArray", //  item is key => value format
                            "label": "Items In Category",
                            "showModeElementUpButton": false,
                            "showModeElementDownButton": false,
                            "itemFieldClasses": "form-control",
                            "itemContainerClasses": "input-group pb-2",
                            "newElementButtonLabelClasses": "btn btn-sm btn-secondary",
                            "itemContainerComponent": "field-array-bootstrap-accordion-item",
                            "visible": (valueType !== "plain"),
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
                            "newElementButtonLabel": "+ Add Items",
                            "items": {
                                "type": "custom-object",
                                "default": {},
                                "schema": {
                                    "fields": [
                                        {
                                            "type": "datalist",
                                            "inputType": "text",
                                            "label": "Key",
                                            "model": "key",
                                            "values": itemValues,
                                            "validateDebounceTime" : 1000,
                                            "validator": function(model, value) {
                                                console.log(model);
                                                if (arrayType === "key") {
                                                    let cachedModel = StoreWithExpiration.get(fieldType, modelName);
                                                    if (!!model && !!cachedModel && cachedModel.indexOf(model) !== -1 ) {
                                                        let filteredModel =  filter(cachedModel, (c) => c == model);
                                                        if (filteredModel.length > 1) return ["Duplicate Entry"];
                                                    }
                                                }
                                                return [];
                                            }

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
                            "model": "CategoryPlainArray", // just plain array of ["#FFF", "abc", ...]
                            "label": "Items In Category",
                            "showModeElementUpButton": false,
                            "showModeElementDownButton": false,
                            "itemFieldClasses": "form-control",
                            "itemContainerClasses": "input-group pb-2",
                            "visible": (valueType === "plain")
                        }
                    ]
                }
            }
        });
    }

    static deleteUndefined(object) {
        return object
    }

    static toPHPObject(modelObject, schemaObject, typeName) {
        if (JSON.stringify(modelObject) !== JSON.stringify({})) {
            let modelObjectCopy = cloneDeep(modelObject);
            
            let {arrayType: arrayType, valueType: valueType, model: modelName} = schemaObject;
            let newObject = arrayType == "unordered" ? [] : {};
            let modelKeys = [];

            // helper method
            // convert leaf array to object. it is necessary for valueType is not "plain"
            function itemArrayToObject(itemArray) {
                if (valueType == "plain") return itemArray;
                let newObject = {};
                for (let i = 0; i < itemArray.length; i++) {
                    newObject[itemArray[i]['key']] = itemArray[i]['value'];
                }
                return newObject;
            }

            // "ordered" => index(1, 2, 3), "key" => key
            function generateCategoryKey(key, i) {
                if (arrayType == 'ordered') return (i  +1).toString();
                if (arrayType == 'key') return key;
            }

            // check if the category object is valid to be inserted
            function isValidCategoryObject(categoryObject, categoryValueKey) {
                return categoryObject && (categoryObject['CategoryKey'] || arrayType !== 'key') && categoryObject[categoryValueKey] && categoryObject[categoryValueKey].length >= 0;
            }



            // generate output object
            modelObject.forEach((categoryObject, i) => {
                let categoryKey = generateCategoryKey(categoryObject['CategoryKey'], i);
                modelKeys.push(categoryKey);
                let categoryValueKey = valueType == 'plain' ? "CategoryPlainArray" : "CategoryKeyValueArray"
                if (isValidCategoryObject(categoryObject, categoryValueKey)) {
                    if (arrayType == 'unordered')
                        newObject.push(itemArrayToObject(categoryObject[categoryValueKey]));
                    else
                        newObject[categoryKey] = itemArrayToObject(categoryObject[categoryValueKey]);
                }
        
            });

            // save the keys array to check duplicate entry
            StoreWithExpiration.set(typeName, modelName, without(modelKeys, undefined, null), 1000 * 60 * 30);

            if (JSON.stringify(newObject) !== JSON.stringify([])) {
                return newObject;
            }
        }
        return modelObject;
    }

};

