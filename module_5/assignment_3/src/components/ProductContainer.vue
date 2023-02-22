<template>
  <ProductForm @message="receiveEmitAgain" />
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
export default {
  components: { ProductForm },
  methods: {
    receiveEmitAgain(value) {
      console.log(value);
    },
  },
  provide: {
    inputStyle: {
      color: "red",
      background: "#fff",
      padding: "10px 20px",
      width: "150px",
      border: "none",
    },
  },
};
</script>
