import VueFormGenerator from 'vue-form-generator';
import BootstrapVue from 'bootstrap-vue';
import Multiselect from 'vue-multiselect';
import {FieldArray} from 'vfg-field-array';
import fieldDatalist from './components/builder/fields/fieldDatalist.vue';
import fieldCustomObject from './components/builder/fields/fieldCustomObject.vue';
import FieldArrayBootstrapAccordionItem from './components/builder/fields/bootstrap-accordion-container.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default ({
	                Vue, // the version of Vue being used in the VuePress app
	                options, // the options for the root Vue instance
	                router, // the router instance for the app
	                siteData // site metadata
                }) => {
	if (typeof process === 'undefined') { // process is undefined in a browser         
		Vue.use(BootstrapVue);
		Vue.component('VueFormGenerator', VueFormGenerator.component);
		Vue.component('Multiselect', Multiselect);
		Vue.component('FieldArray', FieldArray);
		Vue.component('fieldCustomObject', fieldCustomObject);
		Vue.component('field-array-bootstrap-accordion-item', FieldArrayBootstrapAccordionItem);
		Vue.component('fieldDatalist', fieldDatalist);
    }

    if (typeof window === 'undefined') {
        global.window = {};
    }
}
