import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, compact} from 'lodash';

export default class ValidateFormatter extends ObjectFormatter {
    static data(schemaObject) {

        let {acceptedTypes: acceptedTypes} = schemaObject;
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "vueMultiSelect",
                        "model": "validate",
                        "values": acceptedTypes ? acceptedTypes : ["color", "comma_numeric", "css", "date", "email", "html_custom", "js", "no_html", "no_special_chars", "not_empty", "numeric", "preg_replace", "str_replace", "unique_slug", "url", "custom"],
                        "selectOptions": {
                            "multiple": true,
                            "showLabels": false
                        }
                    },
                    {
                        "type": "input",
                        "inputType": "text",
                        "label": "Custom Validation Callback",
                        "visible": function (model) {
                            return model && model.validate == "custom";
                        },
                        "model": "validate_callback"
                    },
                    {
                        "type": "custom-object",
                        "label": "preg_replace",
                        "model": "preg",
                        "default": {},
                        "schema": {
                            "fields": [
                                {
                                    "type": "input",
                                    "inputType": "text",
                                    "label": "Pattern",
                                    "model": "pattern"
                                },
                                {
                                    "type": "input",
                                    "inputType": "text",
                                    "label": "Replacement",
                                    "model": "replacement"
                                }]
                        },
                        "visible": function (model) {
                            return model && model.validate && model.validate.includes("preg_replace");
                        }
                    },
                    {
                        "type": "custom-object",
                        "label": "str_replace",
                        "model": "str",
                        "default": {},
                        "schema": {
                            "fields": [
                                {
                                    "type": "input",
                                    "inputType": "text",
                                    "label": "Search",
                                    "model": "search"
                                },
                                {
                                    "type": "input",
                                    "inputType": "text",
                                    "label": "Replacement",
                                    "model": "replacement"
                                }]
                        },
                        "visible": function (model) {
                            return model && model.validate && model.validate.includes("str_replace");
                        }
                    },
                    {
                        "type": "array",
                        "label": "Allowed HTML",
                        "model": "allowed_html",
                        "validator": "array",
                        "showRemoveButton": false,
                        "itemFieldClasses": "form-control",
                        "itemContainerClasses": "input-group pb-2",
                        "itemContainerComponent": "field-array-bootstrap-accordion-item",
                        "newElementButtonLabelClasses": "btn btn-outline-dark",
                        "removeElementButtonClasses": "btn btn-danger input-group-append",
                        "newElementButtonLabel": "+ Add Allowed HTML",
                        
                        "itemContainerHeader": function (model, schema, index) {
                            return (model && model.tag) ? model.tag : "Undefined";
                        },
                        "items": {
                            "type": "custom-object",
                            "default": {},
                            "schema": {
                                "fields": [
                                    {
                                        "type": "datalist",
                                        "name": "tag",
                                        "title": "Tag",
                                        "label": "Tag",
                                        "values": ["a", "br", "em", "strong"],
                                        "model": "tag",
                                        "listName": "taglist",
                                        "required": true
                                    },
                                    {
                                        "type": 'array',
                                        "inputName": 'attributes',
                                        "label": 'Attribute',
                                        "itemContainerClasses": "field-array-group",
                                        "model": 'attributes',
                                        "required": true,
                                        "showRemoveButton": true,
                                        "newElementButtonLabel": "+ Add Attribute"
                                    }
                                ]
                            }
                        },
                        "visible": function (model) {
                            return model && model.validate && model.validate.includes("html_custom");
                        }
                    }
                ]
            }
        });
    }

    static toPHPObject(modelObject) {
        if (modelObject['validate'] && modelObject['validate'].length == 0) {
            return {}
        }
        let newObject = cloneDeep(modelObject);
        if (modelObject['allowed_html'] !== undefined) {
            newObject['allowed_html'] = modelObject['allowed_html']
                .filter(obj => obj.tag !== undefined)
                .reduce((obj, item) => {
                    obj[item.tag] = compact(item.attributes);
                    let newAttributes = {};
                    for (var i = 0; i < obj[item.tag].length; i++) {
                        newAttributes[obj[item.tag][i]] = [];
                    }
                    obj[item.tag] = newAttributes;
                    return obj;
                }, {});
        }
        if (modelObject['validate'] && modelObject['validate'].includes("custom")) {
            delete newObject['validate'];
            modelObject['validate'] = "custom";
        }

        let mapping = {
            'str_replace': 'str',
            'preg_replace': 'preg_match',
            'html_custom': 'allowed_html',
            'custom': 'validate_callback'
        };

        if (modelObject['validate'] && modelObject['validate'].length == 0) {
            Object.keys(mapping).forEach(function (key, index) {
                if (!modelObject['validate'].includes(key)) {
                    if (newObject[mapping[key]])
                        delete newObject[newObject[mapping[key]]];
                    if (modelObject[mapping[key]])
                        delete modelObject[newObject[mapping[key]]];
                }
            });
        }


        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }
};

