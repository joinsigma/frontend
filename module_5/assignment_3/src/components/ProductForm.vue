<template>
  <ProductInput @message="receiveEmit" />
</template>

<script>
import ProductInput from "@/components/ProductInput.vue";

export default {
  components: { ProductInput },
  methods: {
    receiveEmit(value) {
      this.emitAgain(value);
    },
    emitAgain(value) {
      this.$emit("message", value);
    },
  },
};
</script>
