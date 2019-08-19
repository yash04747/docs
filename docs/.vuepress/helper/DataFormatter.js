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
						"label": "Arguments",
						"model": "values",
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
		let newObject = this.generateNewObject(modelObject);

		if ( JSON.stringify( newObject ) !== JSON.stringify( {} ) ) {
			if ( modelObject.type === "custom" ||  modelObject.type === "array")
				return {data: newObject};
			else {
				return {data: modelObject.type, args: newObject};
			}
		}
	}

	static generateNewObject(modelObject) {
		let newObject = {};
		if (this.isArgsPlainText(modelObject))
			newObject = modelObject.dataText;
		else if (modelObject && modelObject.type && modelObject.type === "array")
			newObject = compact(modelObject.array);
		else {
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

		return newObject;
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

