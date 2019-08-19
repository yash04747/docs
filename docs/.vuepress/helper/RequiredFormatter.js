import {ArrayFormatter} from './CommonFormatters.js';
import { pick, identity } from 'lodash';
export default class RequiredFormatter extends ArrayFormatter{
	static data() {
		return Object.assign(super.data(), {
			"type": "array",
			"showModeElementUpButton": false,
            "showModeElementDownButton": false,
            "itemFieldClasses": "form-control",
            "itemContainerClasses": "input-group pb-2",
            "newElementButtonLabelClasses": "btn btn-outline-dark",
            "itemContainerComponent": "field-array-bootstrap-accordion-item",
            // "itemContainerComponent": "WidgetListColumnEditorContainer",
  			"showRemoveButton": false,
			"required": false,
			"id": "s99999",
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
							"required": true,
							"visible": function(model) {
								return model && model.operation !== "is_empty_or";
							}
						}]
				}
			}
		});
	}

	static toPHPObject(modelObject) {
		// No empty array please
		let newObject = [];

		let arrayLength = modelObject.length;
		if ( arrayLength > 0 ) {
			for ( let i = 0; i < arrayLength; i++ ) {
				if ( undefined !== modelObject[i].value && modelObject[i].value.length ) {
					modelObject[i].value = this.convertToRightObject(modelObject[i].value);
				}
				if ( undefined !== modelObject[i]['id'] && undefined !== modelObject[i]['operation'] ) {
					if ( modelObject[i]['operation'] === "is_empty_or" ) {
						newObject.push([modelObject[i]['id'], modelObject[i]['operation']]);
					} else if ( undefined !== modelObject[i]['value'] ) {
						newObject.push([modelObject[i]['id'], modelObject[i]['operation'], modelObject[i]['value']]);
					}
				}
			}

		}
		// No empty array please
		if ( JSON.stringify( newObject ) !== JSON.stringify( {} ) ) {
			return newObject;
		}

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

