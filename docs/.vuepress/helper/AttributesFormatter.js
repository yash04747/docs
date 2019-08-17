import {ObjectFormatter} from './CommonFormatters.js';

export default class AttributesFormatter extends ObjectFormatter {
    static data() {
        return Object.assign(super.data(), {
            "schema": {
                "fields": [
                    {
                        "type": "array",
                        "model": "attributes",
                        "showRemoveButton": true,
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

    static deleteUndefined(object) {
        return object
    }

    static toPHPObject(modelObject) {
        let modelObjectCopy = {};
        let key;
        for (key in modelObject) {
            modelObjectCopy[key] = modelObject[key]; // copies each property to the objCopy object
        }
        let newObject = {};

        if (modelObject['attributes']) {
            if (modelObject['attributes'] && modelObject['attributes'].autocomplete) {
                newObject['autocomplete'] = "off";
                delete modelObjectCopy['attributes'].autocomplete;
            }
            if (modelObject['attributes'] && modelObject['attributes'].readonly) {
                newObject['readonly'] = modelObject['attributes'].readonly;
                delete modelObjectCopy['attributes'].readonly;
            }
            for (let i = 0; modelObjectCopy['attributes'] && i < modelObjectCopy['attributes'].length; i++) {
                newObject[modelObjectCopy['attributes'][i]['key']] = modelObjectCopy['attributes'][i]['value'];
            }
        }

        if (JSON.stringify(newObject) !== JSON.stringify({})) {
            return newObject;
        }
    }
};

