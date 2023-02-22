<template>
  <div class="container">
    <div class="controls">
      <select name="" id="" v-model="left.option" @change="changeCurrency">
        <option :value="key" v-for="(rate, key) in rates" :key="key">
          {{ key }}
        </option>
      </select>
      <input type="text" v-model="left.value" />
    </div>

    <div class="controls">
      <select name="" id="" v-model="right.option">
        <option :value="key" v-for="(rate, key) in rates" :key="key">
          {{ key }}
        </option>
      </select>
      <input type="text" v-model="convertedValue" />
    </div>
    <div>
      <button @click="convertValue">convertValue</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rates: {},
      left: {
        value: "",
        option: "USD",
      },
      right: {
        value: "",
        option: "",
      },
      convertedValue: null,
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://api.exchangerate.host/latest?base=USD")
        .then((res) => (this.rates = res.data.rates));
    },
    changeCurrency() {
      axios
        .get(`https://api.exchangerate.host/latest?base=${this.left.option}`)
        .then((res) => (this.rates = res.data.rates));
    },
    convertValue() {
      this.convertedValue =
        Number(this.left.value) * Number(this.rates[this.right.option]);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.controls {
  margin: 0 15px;
}

select {
  display: block;
}
</style>
