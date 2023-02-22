<template>
  <input type="text" v-model="message" /><br />
  <button @click="emitData" :style="inputStyle">Emit Data</button>
</template>

<script>
export default {
  data() {
    return {
      message: "hello",
    };
  },
  methods: {
    emitData() {
      let message = this.message;
      this.$emit("message", message);
    },
  },
  inject: ["inputStyle"],
};
</script>
