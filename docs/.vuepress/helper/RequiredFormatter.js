import {ArrayFormatter} from './CommonFormatters.js';
export default class RequiredFormatter extends ArrayFormatter{
	static data() {
		return Object.assign(super.data(), {
			"type": "array",
			"newElementButtonLabelClasses": "button is-primary",
			"showRemoveButton": true,
			"required": false,
			"items": {
				"type": "object",
				"default": {},
				"schema": {
					"fields": [
						{
							"type": "input",
							"inputType": "text",
							"label": "Linked Field ID",
							"model": "id",
							"required": true
						},
						{
							"type": "select",
							"label": "Operation",
							"model": "operation",
							"values": ["=", "equals", "!=", "not", ">", "greater", "is_larger", ">=", "greater_equal", "is_larger_equal", "<", "less", "is_smaller", "<=", "less_equal", "is_smaller_equal", "contains", "doesnt_contain", "not_contain", "is_empty_or", "not_empty_and"],
							"required": true
						},
						{
							"type": "input",
							"inputType": "text",
							"label": "Value",
							"model": "value",
							"required": true
						}]
				}
			}
		});
	}
};

