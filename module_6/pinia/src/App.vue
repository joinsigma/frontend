<script setup>
import { useCatsStore } from "@/stores/cats";
import { storeToRefs } from "pinia";
import { ref } from "vue";

let inputName = ref("");
let inputAge = ref("");

function onSubmit() {
  store.createCat(inputName, inputAge);
}

const store = useCatsStore();
const { cats, youngerCats, olderCats } = storeToRefs(store);
</script>

<template>
  <div style="display: flex; justify-content: space-around">
    <div>
      <h1>Young Cats</h1>
      <div v-for="(cat, key) in youngerCats" :key="key">
        <p>Name - {{ cat.name }}</p>
        <p>Age - {{ cat.age }}</p>
        <button @click="cat.age++">Make Me Older</button>
        <br /><br />
      </div>
    </div>
    <div>
      <h1>Seniors</h1>
      <div v-for="(cat, key) in olderCats" :key="key">
        <p>Name - {{ cat.name }}</p>
        <p>Age - {{ cat.age }}</p>
        <button @click="cat.age--">Make Me Younger</button>
        <br /><br />
      </div>
    </div>
  </div>
  <p>Name</p>
  <input type="text" v-model="inputName" />
  <p>Age</p>
  <input type="number" v-model="inputAge" />
  <br />
  <button @click="onSubmit">Create Cat!!</button>
</template>
