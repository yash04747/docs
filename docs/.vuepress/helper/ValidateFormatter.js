import {ObjectFormatter} from './CommonFormatters.js';
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
                        "type": "switch",
                        "label": "Autocomplete",
                        "model": "autocomplete",
                        "valueOn": "autocomplete",
                        "valueOff": "off"
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
                        "label": "Allowed HTMl",
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
                                        "type": 'select',
                                        "label": 'Type',
                                        "model": 'type',
                                        "values": ["string", "array"],
                                        "required": true
                                    },
                                    {
                                        "type": 'input',
                                        "inputType": 'text',
                                        "label": 'Value',
                                        "model": 'valueText',
                                        "required": true,
                                        "visible": function(model) {
                                            return model && model.type && model.type === "string";
                                        }
                                    },
                                    {
                                        "type": 'array',
                                        "inputName": 'values',
                                        "label": 'Value',
                                        "model": 'valueArray',
                                        "required": true,
                                        "showRemoveButton": true,
                                        "newElementButtonLabel": "+ Add Value",
                                        "visible": function(model) {
                                            return model && model.type && model.type === "array";
                                        }
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
        console.log(JSON.stringify(modelObject));
		/* let newObject = {
			'autocomplete': modelObject.autocomplete,
			'type': modelObject.type
		};
		if  (modelObject['data-json'] !== undefined) {
			newObject['data-json'] = modelObject['data-json']
				.filter(dataObj => (dataObj.key !== undefined && dataObj.value !== undefined))
				.reduce((dataObj, item) => {
					dataObj[item.key] = item.value;
					return dataObj;
				}, {});
		}
		if (modelObject.readonly !== "" && modelObject.readonly !== undefined) newObject.readonly = modelObject.readonly; */
		return modelObject;
	}
};

