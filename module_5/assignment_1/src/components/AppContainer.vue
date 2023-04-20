<script>
import ProductForm from './ProductForm.vue';

export default {
    components: { ProductForm },
    methods: {
        receiveEmitagain(value) {
            console.log(value)
        }
    }
}
</script>

<template>
    <ProductForm @message="receiveEmitagain"></ProductForm>
</template>