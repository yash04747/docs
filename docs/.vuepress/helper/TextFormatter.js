import VueFormGenerator from 'vue-form-generator';
export default class TextFormatter{
	static data() {
		return {
			"type": "input",
			"inputType": "text",
			"newElementButtonLabelClasses": VueFormGenerator.validators.string
		};
	}
};

