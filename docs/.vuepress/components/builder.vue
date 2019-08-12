<style lang="css">

	.vue-form-generator *{box-sizing:border-box}.vue-form-generator .form-control{display:block;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.vue-form-generator .form-control:not([class*=" col-"]){width:100%}.vue-form-generator span.help{margin-left:.3em;position:relative}.vue-form-generator span.help .icon{display:inline-block;width:16px;height:14px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA+UlEQVQ4ja3TS0oDQRAG4C8+lq7ceICICoLGK7iXuNBbeAMJuPVOIm7cqmDiIncIggg+cMZFaqCnZyYKWtB0df31V1VXdfNH6S2wD9CP8xT3KH8T9BiTcE7XBMOfyBcogvCFO9ziLWwFRosyV+QxthNsA9dJkEYlvazsQdi3sBv6Ol6TBLX+HWT3fcQZ3vGM5fBLk+ynAU41m1biCXvhs4OPBDuBpa6GxF0P8YAj3GA1d1qJfdoS4DOIcIm1DK9x8iaWeDF/SP3QU6zRROpjLDFLsFlibx1jJaMkSIGrWKntvItcyTBKzCcybsvc9ZmYz3kz9Ooz/b98A8yvW13B3ch6AAAAAElFTkSuQmCC");background-repeat:no-repeat;background-position:50%}.vue-form-generator span.help .helpText{background-color:#444;bottom:30px;color:#fff;display:block;left:0;opacity:0;padding:20px;pointer-events:none;position:absolute;text-align:justify;width:300px;transition:all .25s ease-out;box-shadow:2px 2px 6px rgba(0,0,0,.5);border-radius:6px}.vue-form-generator span.help .helpText a{font-weight:700;text-decoration:underline}.vue-form-generator span.help .helpText:before{bottom:-20px;content:" ";display:block;height:20px;left:0;position:absolute;width:100%}.vue-form-generator span.help:hover .helpText{opacity:1;pointer-events:auto;transform:translateY(0)}.vue-form-generator .field-wrap{display:flex}.vue-form-generator .field-wrap .buttons{white-space:nowrap;margin-left:4px}.vue-form-generator .field-wrap button,.vue-form-generator .field-wrap input[type=submit]{display:inline-block;padding:6px 12px;margin:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;color:#333;background-color:#fff;border:1px solid #ccc;border-radius:4px}.vue-form-generator .field-wrap button:not(:last-child),.vue-form-generator .field-wrap input[type=submit]:not(:last-child){margin-right:4px}.vue-form-generator .field-wrap button:hover,.vue-form-generator .field-wrap input[type=submit]:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.vue-form-generator .field-wrap button:active,.vue-form-generator .field-wrap input[type=submit]:active{color:#333;background-color:#d4d4d4;border-color:#8c8c8c;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.vue-form-generator .field-wrap button:disabled,.vue-form-generator .field-wrap input[type=submit]:disabled{opacity:.6;cursor:not-allowed}.vue-form-generator .hint{font-style:italic;font-size:.8em}.form-group:not([class*=" col-"]){width:100%}.form-group{display:inline-block;vertical-align:top;margin-bottom:1rem}.form-group label{font-weight:400}.form-group label>:first-child{display:inline-block}.form-group.featured>label{font-weight:700}.form-group.required>label:after{content:"*";font-weight:400;color:red;padding-left:.2em;font-size:1em}.form-group.disabled>label{color:#666;font-style:italic}.form-group.error input:not([type=checkbox]),.form-group.error select,.form-group.error textarea{border:1px solid red;background-color:rgba(255,0,0,.15)}.form-group.error .errors{color:red;font-size:.8em}.form-group.error .errors span{display:block;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4Xt2TMQoCQQxF3xdhu72MpZU3GU/meBFLOztPYrVWsQmEWSaMsIXgK8P8RyYkMjO2sAN+K9gTIAmDAlzoUzE7p4IFytvDCQWJKSStYB2efcAvqZFM0BcstMx5naSDYFzfLhh/4SmRM+6Agw/xIX0tKEDFufeDNRUc4XqLRz3qabVIf3BMHwl6Ktexn3nmAAAAAElFTkSuQmCC");background-repeat:no-repeat;padding-left:17px;padding-top:0;margin-top:.2em;font-weight:600}.vue-form-generator .field-checkbox input{margin-left:12px}.vue-form-generator .field-checklist .dropList,.vue-form-generator .field-checklist .listbox{height:auto;max-height:150px;overflow:auto}.vue-form-generator .field-checklist .dropList .list-row label,.vue-form-generator .field-checklist .listbox .list-row label{font-weight:400}.vue-form-generator .field-checklist .dropList .list-row input,.vue-form-generator .field-checklist .listbox .list-row input{margin-right:.3em}.vue-form-generator .field-checklist .combobox{height:auto;overflow:hidden}.vue-form-generator .field-checklist .combobox .mainRow{cursor:pointer;position:relative;padding-right:10px}.vue-form-generator .field-checklist .combobox .mainRow .arrow{position:absolute;right:-9px;top:3px;width:16px;height:16px;transform:rotate(0deg);transition:transform .5s;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGdJREFUOI3tzjsOwjAURNGDUqSgTxU5K2AVrJtswjUsgHSR0qdxAZZFPrS+3ZvRzBsqf9MUtBtazJk+oMe0VTriiZCFX8nbpENMgfARjsn74vKj5IFruhfc8d6zIF9S/Hyk5HS4spMVeFcOjszaOwMAAAAASUVORK5CYII=");background-repeat:no-repeat}.vue-form-generator .field-checklist .combobox .mainRow.expanded .arrow{transform:rotate(-180deg)}.vue-form-generator .field-checklist .combobox .dropList{transition:height .5s}.vue-form-generator .field-input .wrapper,.vue-form-generator .field-input input[type=radio]{width:100%}.vue-form-generator .field-input input[type=color]{width:60px}.vue-form-generator .field-input input[type=range]{padding:0}.vue-form-generator .field-input .helper{margin:auto .5em}.vue-form-generator .field-label span{display:block;width:100%;margin-left:12px}.vue-form-generator .field-radios .radio-list label{display:block}.vue-form-generator .field-radios .radio-list label input[type=radio]{margin-right:5px}.vue-form-generator .field-submit input{color:#fff!important;background-color:#337ab7!important;border-color:#2e6da4!important}.vue-form-generator .field-input .wrapper{width:100%}.vue-form-generator .field-input .helper{margin:auto .5em}

	fieldset {
		border: 0;
	}

	.panel {
		margin-bottom: 20px;
		background-color: #fff;
		border: 1px solid transparent;
		border-radius: 4px;
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
		box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
		border-color: #ddd;
	}

	.customize {
		display: inline-block;
		font-size: 1.1rem;
		color: #fff;
		background-color: #3eaf7c;
		padding: .8rem 1.6rem;
		border-radius: 4px;
		-webkit-transition: background-color .1s ease;
		transition: background-color .1s ease;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border-bottom: 1px solid #389d70;
		cursor:pointer;
	}

	.panel-heading {
		color: #fff;
		background-color: #009ec3;
		padding: 0.8rem 1.6rem;
		border-color: #ddd;
		cursor: pointer;
		border-bottom: 1px solid transparent;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	.panel-body {
		padding: 15px;
	}
	.panel-body small {
		display: block;
		margin-bottom: 10px;
	}

	.seventy {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-ms-flex-preferred-size: 69%;
		flex-basis: 69%;
		max-width: 69%;
	}
	.seventy pre {
		margin-top: 0 !important;
	}
	.seventy .panel-body {
		padding-top: 0;
		margin-top:0;
	}
	.thirty {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-ms-flex-preferred-size: 30%;
		flex-basis: 30%;
		max-width: 30%;
	}
	@media (max-width: 816px) {
		.thirty, .seventy {
			max-width: 100%;
			padding: 0;
		}
	}

	#generator {
		border-top: 1px solid #eaecef;
		padding: 1.2rem 0;
		margin-top: 2.5rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		-ms-flex-line-pack: stretch;
		align-content: stretch;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

</style>

<template>
	<div id="generator">
		<div class="panel thirty">
			<div class="panel-heading" v-on:click="toggle">
				Customize →
			</div>
			<div class="panel-body" v-show="showSection">
				<small>Any changes you make in these fields will be reflected in the example declaration.</small>
				<vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
			</div>
		</div>

		<div class="seventy">
			<div class="panel-body">
				<div class="language-php extra-class"><pre class="language-php extra-class"><code v-if="model" v-html="toPHP(schema, model)"></code></pre></div>
			</div>
		</div>
		<br style="clear: both;">
	</div>
</template>

<script>
	import VueFormGenerator from 'vue-form-generator';
	import { FieldArray } from 'vfg-field-array';
	import { FieldObject } from 'vfg-field-object';
	export default {

		render() {

		},
		components: {
			"vue-form-generator": VueFormGenerator.component,
			FieldArray,
			FieldObject
		},
		props: ['field'],
		data() {
			let redux_field = JSON.parse(this.$slots.default[0].text);

			// Add Required Config
			if ( redux_field.fields.required ) {
				redux_field.fields.required.newElementButtonLabelClasses= "button is-primary",
				redux_field.fields.required.showRemoveButton = true;
				redux_field.fields.required.required = false;
				redux_field.fields.required.items = {
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
				};
			}

			// Add Data Config
			if ( redux_field.fields.data ) {
				redux_field.fields.data.schema = {
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
				}; 
			}

			var field_type = redux_field['type'];
			var keys = Object.keys( redux_field['fields'] );

			var to_return = {
				model: {
					id: "FIELD_ID",
					type: field_type,
					title: "",
					subtitle: "",
					description: "",
					note: "",
					required: "",
				},
				schema: {
					fields: [],
					redux: redux_field
				},
				formOptions: {
					validateAfterChanged: true
				},
				showSection: false
			};

			keys.forEach( function( key ) {
				if ( to_return['schema']['fields'].length === 1 ) {
					to_return['schema']['fields'].push( {
						type: "input",
						inputType: "text",
						label: 'Type',
						model: 'type',
						readonly: true,
						featured: false,
						disabled: true,
						order: 0
					} )
					to_return['model']['type'] = field_type;
				}

				if ( redux_field['fields'][key]['type'] === "text" ) {
					redux_field['fields'][key]['type'] = "input";
					redux_field['fields'][key]['inputType'] = "text";
					redux_field['fields'][key]['validator'] = VueFormGenerator.validators.string;
					if ( redux_field['fields'][key]['default'] === null ) {
						redux_field['fields'][key]['default'] = "";
					}
				} else if ( redux_field['fields'][key]['type'] === "bool" ) {
					redux_field['fields'][key]['type'] = "switch";
					redux_field['fields'][key]['multi'] = true;
					redux_field['fields'][key]['textOn'] = "Enabled";
					redux_field['fields'][key]['textOff'] = "Disabled";
					if ( redux_field['fields'][key]['default'] === null ) {
						redux_field['fields'][key]['default'] = false;
					}
				} else if ( redux_field['fields'][key]['type'] === "array" ) {
					redux_field['fields'][key]['type'] = "array";
					redux_field['fields'][key]['showRemoveButton'] = true;
					redux_field['fields'][key]['newElementButtonLabelClasses'] = 'button is-primary';
					// redux_field['fields'][key]['itemContainerComponent'] = "RequiredConditionListContainer";
				}

				redux_field['fields'][key]['label'] = redux_field['fields'][key]['title'];
				delete redux_field['fields'][key]['title'];
				redux_field['fields'][key]['hint'] = redux_field['fields'][key]['description'];
				redux_field['fields'][key]['model'] = redux_field['fields'][key]['name'];
				delete redux_field['fields'][key]['name'];

				to_return['schema']['fields'].push( redux_field['fields'][key] );
				to_return['model'][key] = redux_field['fields'][key]['default'];
			} );

			to_return['model']['id'] = "FIELD_ID"

			to_return['schema']['fields'].sort( ( a, b ) => (a['order'] > b['order']) ? 1 : -1 )

			to_return['model'] = Object.assign(to_return['model'], redux_field['model'])
			console.log(to_return.schema);
			return to_return;
		},
		methods: {
			toggle() {
				this.showSection = !this.showSection
			},
			toPHP: function( schema, model ) {
				if ( schema && model ) {
					// Delete empty values
					for ( var propName in model ) {
						if ( model[propName] === null || model[propName] === undefined || model[propName] === '' ) {
							delete model[propName];
						}
						if ( propName !== "type" && schema['redux']['fields'].hasOwnProperty(
								propName ) && schema['redux']['fields'][propName].hasOwnProperty(
								'default' ) ) {
							if ( schema['redux']['fields'][propName]['default'] === model[propName] ) {
								delete model[propName];
							}
						}
					}

					function copy(mainObj) {
						let objCopy = {}; // objCopy will store a copy of the mainObj
						let key;

						for (key in mainObj) {
							objCopy[key] = mainObj[key]; // copies each property to the objCopy object
						}
						return objCopy;
					}

					let prep_model = copy(model);

					// --->	Required Transform
					if ( model.required ) {
						prep_model.required = model.required;
						let arrayLength = model.required.length;
						if ( arrayLength > 0 ) {
							let new_required = [];
							for ( let i = 0; i < arrayLength; i++ ) {
								if ( undefined !== model.required[i].value && model.required[i].value.length ) {
									let value_test = model.required[i].value.toLowerCase();
									if ( value_test === "true" ) {
										model.required[i].value = true;
									} else if ( value_test === "false" ) {
										model.required[i].value = false;
									}
								}
								if ( undefined !== model.required[i]['id'] && undefined !== model.required[i]['operation'] ) {
									if ( model.required[i]['operation'] === "is_empty_or" ) {
										new_required.push([model.required[i]['id'], model.required[i]['operation']]);
									} else if ( undefined !== model.required[i]['value'] ) {
										new_required.push([model.required[i]['id'], model.required[i]['operation'], model.required[i]['value']]);
									}
								}
							}
							prep_model.required = new_required
						}
					}
					// <--- END Required Transform

					// --->	Data Transform
					if ( model.data ) {
						prep_model.args = this.generateArgsFromDataModel(model.data);
						prep_model.data = model.data.type;
					}
					// <--- END Data Transform

					var json = JSON.stringify( prep_model, undefined, 4 );
					json = json.replace( /&/g, '&' ).replace( /</g, '<' ).replace( />/g, '>' );

					var to_replace = ['title', 'subtitle', 'description', 'note'];
					var arrayLength = to_replace.length;
					for ( var i = 0; i < arrayLength; i++ ) {
						var key = to_replace[i];
						var r = new RegExp( '"' + key + '": "(.*)"', "g" ); // global match and ignore case flag
						json = json.replace( r, '"' + key + '": esc_html__( "$1" , "redux_docs_generator" )' );
					}


					data = json.replace(
						/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
						function( match ) {
							var cls = 'number';

							if ( /^"/.test( match ) ) {
								cls = 'single-quoted-string string';
							} else if ( /true|false/.test( match ) ) {
								cls = 'boolean';
							} else if ( /null/.test( match ) ) {
								cls = 'null';
							}
							var operator = '';
							if ( match.endsWith( ':' ) ) {
								match = match.replace( ':', '' )
								operator = "=>";

							}
							var string = '<span class="token ' + cls + '">' + match + '</span>';

							if ( operator == '' ) {
								return string
							} else {
								string += ' <span class="token operator">' + operator + '</span>';
								return string
							}
						}
					);

					var data = data.replace(
						/{/g, '<span class="token keyword">array</span>(' ).replace(
						/}/g, '<span class="">)</span>' ).replace(
						/\[/g, '<span class="token keyword">array</span>(' ).replace(
						/]/g, '<span class="">)</span>' ).replace( /"/g, "'" )

					return "<?php <br />Redux<span class=\"token punctuation\">:</span><span class=\"token punctuation\">:</span><span class=\"token function\">set_field</span><span class=\"token punctuation\">(</span> <span class=\"token single-quoted-string string\">'OPT_NAME'</span>, <span class=\"token single-quoted-string string\">'SECTION_ID'</span>, " + data + " <span class=\"token punctuation\">)</span>;"
				}
			},

			generateArgsFromDataModel: function(dataObject) {
				var new_args = {};
				if ( dataObject ) {
					if (this.isArgsPlainText(dataObject))
						new_args = dataObject.dataText;
					else 
					{
						var args_array = dataObject.values;
						for (let i = 0; args_array && i < args_array.length; i++)
						{
							if ( undefined === args_array[i].id || undefined === args_array[i].type) continue;

							if (args_array[i].type === "string")
								new_args[args_array[i].id] = this.convertToRightObject(args_array[i].valueText);
							else
								new_args[args_array[i].id] = args_array[i].valueArray
						}
					}
					return new_args;
				}
			},
			isArgsPlainText: function(dataObject) {
				return (dataObject && dataObject.type && (dataObject.type.toLowerCase() === "custom" || dataObject.type.toLowerCase() === "callback") &&
						dataObject.dataText && dataObject.dataText.length > 0);
			},
			convertToRightObject: function(dataObject) {
				if ( dataObject === "true" ) {
					dataObject = true;
				} else if ( dataObject === "false" ) {
					dataObject = false;
				}
				return dataObject;
			}
		},
	}
</script>
