import VueFormGenerator from 'vue-form-generator';
export class BoolFormatter{
	static data() {
		return {
			"type": "switch",
			"multi": true,
			"textOn": "Enabled",
			"textOff": "Disabled"
		};
	}
	static default(defaultObj) {
		return defaultObj === null ? false : defaultObj;
	}
};

export class TextFormatter{
	static data() {
		return {
			"type": "input",
			"inputType": "text",
			"newElementButtonLabelClasses": VueFormGenerator.validators.string
		};
	}
	static default(defaultObj) {
		return defaultObj === null ? "" : defaultObj;
	}
};

export class SelectFormatter{
	static data() {
		return {
			"type": "select"
		};
	}
	static default(defaultObj) {
		return defaultObj === null ? "" : defaultObj;
	}
};

export class ArrayFormatter{
	static data() {
		return {
			"type": "array",
			"showRemoveButton": true,
			"newElementButtonLabelClasses": 'button is-primary'
		};
	}
	static default(defaultObj) {
		return defaultObj;
	}
};


export class ObjectFormatter{
	static data() {
		return {
			"type": "object"
		};
	}
	static default(defaultObj) {
		return defaultObj;
	}
};

