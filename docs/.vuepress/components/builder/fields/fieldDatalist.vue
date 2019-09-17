<template>
	<div>
		<input type="text" :name="schema.inputName" :id="getFieldID(schema)" :class="schema.fieldClasses" :list="listName" v-model="value">
		<datalist :id="listName">
			<template v-for="(item, index) in items">
				<option :value="getItemValue(item)" :key="index"> {{ getItemName(item) }}</option>
			</template>
		</datalist>
	</div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import { isObject } from "lodash";
export default {
	name: 'fieldDataList',
	mixins: [VueFormGenerator.abstractField],
	computed: {
		fieldId() {
			return this.getFieldID(this.schema);
		},
		items() {
			let values = this.schema.values;
			if (typeof values == "function") {
				return values.apply(this, [this.model, this.schema]);
			} else return values;
		},
		listName() {
			return 'listname_' + Math.random().toString(36).substr(2, 9);
		}
	},
	methods: {
		getItemValue(item) {
			if (isObject(item)) {
				if (typeof this.schema["selectOptions"] !== "undefined" && typeof this.schema["selectOptions"]["value"] !== "undefined") {
					return item[this.schema.selectOptions.value];
				} else {
					// Use 'id' instead of 'value' cause of backward compatibility
					if (typeof item["id"] !== "undefined") {
						return item.id;
					} else {
						throw "`id` is not defined. If you want to use another key name, add a `value` property under `selectOptions` in the schema.";
					}
				}
			} else {
				return item;
			}
		},
		getItemName(item) {
			if (isObject(item)) {
				if (typeof this.schema["selectOptions"] !== "undefined" && typeof this.schema["selectOptions"]["name"] !== "undefined") {
					return item[this.schema.selectOptions.name];
				} else {
					if (typeof item["name"] !== "undefined") {
						return item.name;
					} else {
						throw "`name` is not defined. If you want to use another key name, add a `name` property under `selectOptions` in the schema.";
					}
				}
			} else {
				return item;
			}
		}
	}
};
</script>


<style lang="sass">
</style>