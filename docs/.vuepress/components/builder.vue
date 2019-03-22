<style lang="css">
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

	.seventy {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-ms-flex-preferred-size: 69%;
		flex-basis: 69%;
		max-width: 69%;
	}
	.thirty {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-ms-flex-preferred-size: 30%;
		flex-basis: 30%;
		max-width: 30%;
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
				Customize This →
			</div>
			<div class="panel-body" v-show="showSection">
				<vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
			</div>
		</div>

		<div class="seventy">
			<div class="panel-body">
				<pre class="language-php"><code v-if="model" v-html="toPHP(schema, model)"></code></pre>
			</div>
		</div>
		<br style="clear: both;">
	</div>
</template>

<script>

	import VueFormGenerator from 'vue-form-generator';
	import "vue-form-generator/dist/vfg-core.css";  // optional core css additions

	export default {

		components: {
			"vue-form-generator": VueFormGenerator.component
		},
		props: ['field'],
		data() {

			var redux_fields = {
				"background": {
					"type": "background",
					"name": "Background",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"border": {
					"type": "border",
					"name": "Border",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"password": {
					"type": "password",
					"name": "Password",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"section": {
					"type": "section",
					"name": "Section",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"radio": {
					"type": "radio",
					"name": "Radio",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"sorter": {
					"type": "sorter",
					"name": "Sorter",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"gallery": {
					"type": "gallery",
					"name": "Gallery",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"color": {
					"type": "color",
					"name": "Color",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"divide": {
					"type": "divide",
					"name": "Divide",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"date": {
					"type": "date",
					"name": "Date",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"checkbox": {
					"type": "checkbox",
					"name": "Checkbox",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"slider": {
					"type": "slider",
					"name": "Slider",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"spinner": {
					"type": "spinner",
					"name": "Spinner",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"slides": {
					"type": "slides",
					"name": "Slides",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"info": {
					"type": "info",
					"name": "Info",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"textarea": {
					"type": "textarea",
					"name": "Textarea",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"spacing": {
					"type": "spacing",
					"name": "Spacing",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"typography": {
					"type": "typography",
					"name": "Typography",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"switch": {
					"type": "switch",
					"name": "Switch",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"text": {
					"type": "text",
					"name": "Text",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"select": {
					"type": "select",
					"name": "Select",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"dimensions": {
					"type": "dimensions",
					"name": "Dimensions",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"raw": {
					"type": "raw",
					"name": "Raw",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"editor": {
					"type": "editor",
					"name": "Editor",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"palette": {
					"type": "palette",
					"name": "Palette",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"sortable": {
					"type": "sortable",
					"name": "Sortable",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				},
				"media": {
					"type": "media",
					"name": "Media",
					"description": null,
					"icon": null,
					"fields": {
						"compiler": {
							"name": "compiler",
							"title": "CSS Compiler",
							"type": "bool",
							"description": "Should the field be sent to the compiler",
							"default": false,
							"order": 60,
							"required": false
						},
						"output": {
							"name": "output",
							"title": "CSS Output",
							"type": "bool",
							"description": "",
							"default": false,
							"order": 60,
							"required": false
						},
						"required": {
							"name": "required",
							"title": "Required",
							"type": "bool",
							"description": "Should the field be required",
							"default": false,
							"order": 60,
							"required": false
						},
						"readonly": {
							"name": "readonly",
							"title": "Readonly",
							"type": "bool",
							"description": "Should the field be readonly",
							"default": false,
							"order": 60,
							"required": false
						},
						"class": {
							"name": "class",
							"title": "Class(es)",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"desc": {
							"name": "desc",
							"title": "Description",
							"type": "text",
							"description": "",
							"default": null,
							"order": 3,
							"required": false
						},
						"subtitle": {
							"name": "subtitle",
							"title": "Subtitle",
							"type": "text",
							"description": "",
							"default": null,
							"order": 2,
							"required": false
						},
						"title": {
							"name": "title",
							"title": "Title",
							"type": "text",
							"description": "",
							"default": null,
							"order": 1,
							"required": false
						},
						"id": {
							"name": "id",
							"title": "ID",
							"type": "text",
							"description": "",
							"default": null,
							"order": 0,
							"required": false
						}
					}
				}
			};
			var field_type = this._props.field;
			var redux_field = redux_fields[field_type];
			var keys = Object.keys( redux_field['fields'] );

			var to_return = {
				model: {
					id: "FIELD_ID",
					type: field_type,
					title: "",
					subtitle: "",
					description: "",
					note: "",
				},
				schema: {
					fields: [],
					redux: redux_field
				},
				formOptions: {
					validateAfterChanged: true
				},
				showSection: false
			}

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
				} else {

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



			return to_return;
		},
		methods: {
			toggle() {
				this.showSection = !this.showSection
			},
			toPHP: function( schema, model ) {
				if ( schema && model ) {
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

						// model[propName] = "__( '"+model[propName]+"', 'YOUR_LANG_KEY' )";

					}
					var json = JSON.stringify( model, undefined, 4 );
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
			}
		},
	}
</script>