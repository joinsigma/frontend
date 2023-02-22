<template>
  <div class="container mx-auto">
    <p class="text-7xl font-bold text-center my-8">Pokédex</p>

    <div class="grid grid-cols-3 gap-10">
      <div v-for="(item, key) in pokemons" :key="key" class="card">
        <div>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`"
            class="display-image"
            :style="`border: 8px solid ${getColorFromType(
              item.types[0].type.name
            )}`"
            alt=""
          />
          <p class="text-2xl font-bold text-center my-8 capitalize">
            {{ item.name }}
          </p>
        </div>

        <p class="text-md font-bold text-left capitalize">
          ID: <span class="font-normal">#{{ item.id }}</span>
        </p>
        <p class="text-md font-bold text-left capitalize">
          Height: <span class="font-normal">#{{ item.height }}</span>
        </p>
        <p class="text-md font-bold text-left capitalize">
          Weight: <span class="font-normal">#{{ item.weight }}</span>
        </p>

        <p class="text-md font-bold text-left capitalize">Abilties</p>
        <span
          v-for="(ability, key) in item.abilities"
          :key="key"
          class="ability inline-block mt-2"
          :style="`background: ${getColorFromType(item.types[0].type.name)}`"
        >
          {{ ability.ability.name }}
        </span>
      </div>
    </div>
  </div>
  <button @click="fetchData">fetch Data</button>
</template>

<script>
import axios from "axios";
import { colors } from "@/helpers/colors.js";

export default {
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      data.results.map(async (obj) => {
        let { data } = await axios.get(obj.url);
        this.pokemons.push(data);
      });
    },
    getColorFromType(color) {
      return colors[color];
    },
  },
};
</script>

<style>
body {
  background: #eee;
}

.card {
  border-radius: 25px;
  padding: 20px;
  display: inline-block;
  margin: 20px 5px;.t
  height: 500px;
  background: #fff;
  box-shadow: 1px 2px 15px 4px #dadada;
}

img.display-image {
  width: 200px;
  background: #fff;
  border-radius: 50%;
  padding: 15px;
  display: block;
  margin: 0 auto;
}

h1 {
  text-transform: capitalize;
  font-family: Arial;
  text-align: center;
  font-size: 25px !important;
}
.ability {
  background: white;
  margin: 4px 6px;
  padding: 5px 8px;
  border-radius: 30px;
}
</style>
