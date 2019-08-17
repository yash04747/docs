import { ObjectFormatter } from './CommonFormatters';
import { compact } from 'lodash';
export default class DataFormatter extends ObjectFormatter{
	static data() {
		return {
			"schema":  {
				"fields": [
					{
						"type": "select",
						"label": "Data Type",
						"model": "type",
						"inputName": "type",
						"required": true,
						"validator": "string",
						"values": ["array", "custom", "categories", "menus", "pages", "terms", "taxonomies", "posts", "post_types", "tags", "image_sizes", "menu_locations", "elusive_icons", "roles", "sidebars", "capabilities", "callback", "users"],
					},
					{
						"type": "array",
						"label": "Values",
						"model": "values",
						"inputName": "values",
						"validator": "array",
						"showRemoveButton": true,
						"itemFieldClasses": "form-control",
						"itemContainerClasses": "input-group pb-2",
						"newElementButtonLabelClasses": "btn btn-outline-dark",
						"removeElementButtonClasses": "btn btn-danger input-group-append",
						"newElementButtonLabel": "+ Add Argument",
						"items": {
							"type": "object",
							"default": {},
							"schema": {
								"fields": [
									{
										"type": 'input',
										"inputType": 'text',
										"label": 'ID',
										"model": 'id',
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
							return model && model.type && model.type !== "custom" && model.type !== "callback" && model.type !== "array";
						},
						"required": function(model) {
							return model && (model.type === "custom" || model.type === "callback");
						}
					},
					{
						"type": "input",
						"inputType": "text",
						"label": "Text Value",
						"model": "dataText",
						"inputName": "dataText",
						"visible": function(model) {
							return model && (model.type === "custom" || model.type === "callback");
						}
					},
					{
						"type": "array",
						"model": "array",
						"showRemoveButton": true,
						"newElementButtonLabel": "+ Add Value",
						"visible": function(model) {
							return model && model.type && model.type === "array";
						},
						"items": {
							"type": "object",
							"default": {},
							"schema": {
								"fields": [
									{
										"type": 'input',
										"inputType": 'text',
										"label": 'Value',
										"model": 'value',
										"required": true,
									},
									]
							}
						}
					}



				]
			}
		};
	}
	static default(defaultObj) {
		return defaultObj;
	}

	static toPHPObject(modelObject) {
		let newObject = {};
		let modelObjectCopy = {};
		let key;
		for (key in modelObject) {
			modelObjectCopy[key] = modelObject[key]; // copies each property to the objCopy object
		}

		if (this.isArgsPlainText(modelObject))
			newObject = modelObject.dataText;
		else  {
			var args_array = modelObject.values;
			for (let i = 0; args_array && i < args_array.length; i++)
			{
				if ( undefined === args_array[i].id || undefined === args_array[i].type || (undefined === args_array[i].valueText && undefined === args_array[i].valueArray)) continue;
				if (args_array[i].type === "string")
					newObject[args_array[i].id] = this.convertToRightObject(args_array[i].valueText);
				else
					newObject[args_array[i].id] = compact(args_array[i].valueArray);
			}
		}

		if ( newObject['data'] === "custom" ) {
			newObject['data'] = newObject['args'];
			delete newObject['args'];
		}

		// No empty array please
		if ( JSON.stringify( newObject ) !== JSON.stringify( {} ) ) {
			return newObject;
		}

	}
	static isArgsPlainText(modelObject) {
		return (modelObject && modelObject.type && (modelObject.type.toLowerCase() === "custom" || modelObject.type.toLowerCase() === "callback") &&
			modelObject.dataText && modelObject.dataText.length > 0);
	}
	static convertToRightObject(modelObject) {
		if ( modelObject === "true" ) {
			modelObject = true;
		} else if ( modelObject === "false" ) {
			modelObject = false;
		}
		return modelObject;
	}
};

