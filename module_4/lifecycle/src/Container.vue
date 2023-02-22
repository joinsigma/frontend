<template>
  <h1>Container</h1>
</template>

<script>
export default {
  name: "Container",
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
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
};
</script>
