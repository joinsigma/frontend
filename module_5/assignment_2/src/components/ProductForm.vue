<script>
import ProductInput from './ProductInput.vue';

export default {
    components: { ProductInput },
    methods: {
        receiveEmit(value) {
            this.emitAgain(value)
        },
        emitAgain(value) {
            this.$emit("message", value)
        }
    }
}
</script>

<template>
    <ProductInput></ProductInput>
</template>