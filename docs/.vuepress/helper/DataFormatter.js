import { ObjectFormatter } from './CommonFormatters';

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
						"values": ["custom", "categories", "menus", "pages", "terms", "taxonomies", "posts", "post_types", "tags", "image_sizes", "menu_locations", "elusive_icons", "roles", "sidebars", "capabilities", "callback", "users"],
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
						"newElementButtonLabel": "+ Add Arg Item",
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
									"newElementButtonLabel": "+ Add Value Array Item",
									"visible": function(model) {
										return model && model.type && model.type === "array";
									}
								}
								]
							}
						},
						"visible": function(model) {
							return model && model.type && model.type !== "custom" && model.type !== "callback";
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
					}
				]
			} 
		};
	}
	static default(defaultObj) {
		return defaultObj;
	}

};

