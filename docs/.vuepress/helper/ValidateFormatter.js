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
                    }
                ]
            }
		});
	}

	static toPHPObject(modelObject) {
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

