import {ObjectFormatter} from './CommonFormatters.js';
import {cloneDeep, compact} from 'lodash';
export default class ValidateFormatter extends ObjectFormatter{
	static data() {
		return Object.assign(super.data(), {
			"schema": {
                "fields": [
                    {
						"type": "vueMultiSelect",
						"label": "Validation",
						"model": "validate",
						"required": true,
						"values": ["color", "comma_numeric", "css", "date", "email", "html_custom", "js", "no_html", "no_special_chars", "not_empty", "numeric", "preg_replace", "str_replace", "unique_slug", "url"],
						"selectOptions": {
							"multiple": true,
							"showLabels": false
						}
                    },
                    {
                        "type": "input",
                        "inputType": "text",
                        "label": "Callback",
                        "model": "validate_callback"
                    },
                    {
                        "type": "object",
                        "label": "Preg",
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
                        "visible": function(model) {
							return model && model.validate && model.validate.indexOf("preg_replace") !== -1;
						}
                    },
                    {
                        "type": "object",
                        "label": "Str",
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
                        "visible": function(model) {
							return model && model.validate && model.validate.indexOf("str_replace") !== -1;
						}
                    },
                    {
                        "type": "array",
                        "label": "Allowed HTML",
                        "model": "allowed_html",
                        "validator": "array",
                        "showRemoveButton": true,
                        "itemFieldClasses": "form-control",
                        "itemContainerClasses": "input-group pb-2",
                        "newElementButtonLabelClasses": "btn btn-outline-dark",
                        "removeElementButtonClasses": "btn btn-danger input-group-append",
                        "newElementButtonLabel": "+ Add Allowed HTMl",
                        "items": {
                            "type": "object",
                            "default": {},
                            "schema": {
                                "fields": [
                                    {
                                        "type": 'datalist',
                                        "name": "tag",
                                        "title": "Tag",
                                        "label": "Tag",
                                        "values": ["a", "br", "em", "strong"],
                                        "model": 'tag',
                                        "listName": "taglist",
                                        "required": true
                                    },
                                    {
                                        "type": 'array',
                                        "inputName": 'attributes',
                                        "label": 'Attribute',
                                        "model": 'attributes',
                                        "required": true,
                                        "showRemoveButton": true,
                                        "newElementButtonLabel": "+ Add Attribute"
                                    }
                                ]
                            }
                        },
                        "visible": function(model) {
							return model && model.validate && model.validate.indexOf("html_custom") !== -1;
						}
                    }
                ]
            }
		});
	}

	static toPHPObject(modelObject) {
        let newObject = cloneDeep(modelObject);
		if  (modelObject['allowed_html'] !== undefined) {
			newObject['allowed_html'] = modelObject['allowed_html']
				.filter(dataObj => dataObj.tag !== undefined)
				.reduce((dataObj, item) => {
					dataObj[item.tag] = compact(item.attributes);
					return dataObj;
				}, {});
		}
		return newObject;
	}
};

