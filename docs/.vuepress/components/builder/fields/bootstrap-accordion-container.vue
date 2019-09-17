<template>
    <div>
        <div class="heading">
            <b-btn v-b-toggle="'collapse' + getFieldID(schema)" variant="info">{{ headerText }}</b-btn>
            <input type="button" class="btn btn-danger btn-sm float-right" @click="$emit('removeItem')" :value="removeElementButtonLabel" />
        </div>

        <b-collapse visible :id="'collapse' + getFieldID(schema)" >
            <b-card>
                <slot></slot>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
export default {
    name: "FieldArrayBootstrapAccordionItem",
    mixins: [VueFormGenerator.abstractField],
    props: [
        "model",
        "index",
        "schema",
        "id",
        "parentId",
        "removeElementButtonLabel",
        "itemContainerHeader"
    ],
    data() {
        return {
            hasError: false
        };
    },
    computed: {
        headerText() {
            if (typeof this.itemContainerHeader === "function") {
                return this.itemContainerHeader(this.model, this.schema, this.index);
            } else if (typeof this.itemContainerHeader !== "undefined") {
                return typeof this.itemContainerHeader;
            }
            return "Undefined";
        }
    },
    methods: {
        validate(calledParent) {
            if (this.$children.length < 1) {
                console.warn(
                    "The accordion item of the array field seam to be empty. Could not validate"
                );
                return false;
            }
            // return this.$children[0].validate(calledParent);
        },
        validated(isValid, errors) {
            this.hasError = !isValid;
        }
    },
    mounted() {
        if (
            !this.$slots.default ||
            typeof this.$slots.default[0] !== "object" ||
            typeof this.$slots.default[0].componentInstance !== "object" ||
            typeof this.$slots.default[0].componentInstance.$on !== "function"
        ) {
            return;
        }
        this.$slots.default[0].componentInstance.$on("validated", this.validated);
    }
};
</script>

<style scoped>
</style>