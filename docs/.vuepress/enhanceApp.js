import VueFormGenerator from 'vue-form-generator';
import {FieldArray} from 'vfg-field-array';
import { FieldObject } from 'vfg-field-object';
import fieldDatalist from './components/fields/fieldDatalist';
export default ({
	                Vue, // the version of Vue being used in the VuePress app
	                options, // the options for the root Vue instance
	                router, // the router instance for the app
	                siteData // site metadata
                }) => {
	if (typeof process === 'undefined') { // process is undefined in a browser         
		Vue.component('VueFormGenerator', VueFormGenerator.component);
		Vue.component('FieldObject', FieldObject);
		Vue.component('FieldArray', FieldArray);
		Vue.component('fieldDatalist', fieldDatalist);
    }
}
