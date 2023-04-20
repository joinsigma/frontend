<script>
import ProductForm from './ProductForm.vue';

export default {
    components: { ProductForm },
    methods: {
        receiveEmitagain(value) {
            console.log(value)
        }
    },
    provide: {
        inputStyle: {
            color: "red",
            background: "#fff",
            padding: "10px 20px",
            width: "150px",
            border: "none"
        }
    }
}
</script>

<template>
    <ProductForm @message="receiveEmitagain"></ProductForm>
</template>