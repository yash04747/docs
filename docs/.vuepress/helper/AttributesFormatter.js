import {ObjectFormatter} from './CommonFormatters.js';
export default class AttributesFormatter extends ObjectFormatter{
	static data() {
		return Object.assign(super.data(), {
			"schema": {
                "fields": [
                    {
                        "type": "select",
                        "label": "Type",
                        "model": "type",
                        "values": ["password", "number"]
                    },
                    {
                        "type": "switch",
                        "label": "Readonly",
                        "model": "readonly",
                        "valueOn": "readonly",
                        "valueOff": ""
                    },
                    {
                        "type": "switch",
                        "label": "Autocomplete",
                        "model": "autocomplete",
                        "valueOn": "autocomplete",
                        "valueOff": "off"
                    },
                    {
                        "type": "array",
                        "label": "Data Json",
                        "model": "data-json",
                        "items": {
                            "type": "object",
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

	static toPHPObject(modelObject) {
		let newObject = {
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
		if (modelObject.readonly !== "" && modelObject.readonly !== undefined) newObject.readonly = modelObject.readonly;
		return newObject;
	}
};

