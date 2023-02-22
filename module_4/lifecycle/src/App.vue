<template>
  <Container v-if="showContainer" />
  <button @click="showContainer = false">Hide Me</button>
</template>

<script>
import Container from "@/Container.vue";

export default {
  components: { Container },
  data() {
    return {
      showContainer: true,
    };
  },
  ///// STAGE 1
  beforeCreate() {
    console.log("beforeCreated()");
  },
  created() {
    console.log("created()");
  },
  ///// STAGE 2
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  ///// STAGE 3
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  ///// STAGE 4
  beforeUnmount() {
    console.log("beforeunMount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
};
</script>
