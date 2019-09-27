import {ArrayFormatter} from './CommonFormatters.js';
import {cloneDeep} from 'lodash';
export default class MultiArrayFormatter extends ArrayFormatter {
    static data(schemaObject) {
        let {name: modelName, arrayType: arrayType, valueType: valueType, categoryValues: categoryValues, itemValues: itemValues, visible: visible} = schemaObject;
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
                            "visible": (arrayType === "key")
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
                            "newElementButtonLabelClasses": "",
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
                                            "values": itemValues
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

    static toPHPObject(modelObject, schemaObject) {
        if (JSON.stringify(modelObject) !== JSON.stringify({})) {
            let modelObjectCopy = cloneDeep(modelObject);
            
            let {arrayType: arrayType, valueType: valueType} = schemaObject;
            let newObject = arrayType == "unordered" ? [] : {};

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
                let categoryValueKey = valueType == 'plain' ? "CategoryPlainArray" : "CategoryKeyValueArray"
                if (isValidCategoryObject(categoryObject, categoryValueKey)) {
                    if (arrayType == 'unordered')
                        newObject.push(itemArrayToObject(categoryObject[categoryValueKey]));
                    else
                        newObject[categoryKey] = itemArrayToObject(categoryObject[categoryValueKey]);
                }
        
            })
            if (JSON.stringify(newObject) !== JSON.stringify([])) {
                return newObject;
            }
        }
        return modelObject;
    }

};

