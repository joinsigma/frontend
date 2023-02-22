import { defineStore } from "pinia";

export const useCatsStore = defineStore({
  id: "cats",
  state: () => ({
    cats: [
      {
        id: 1,
        name: "Bobo",
        age: 5,
      },
      {
        id: 1,
        name: "Buttercup",
        age: 8,
      },
    ],
  }),
  getters: {
    youngerCats: (state) => {
      return state.cats.filter((obj) => obj.age <= 5);
    },
    olderCats: (state) => {
      return state.cats.filter((obj) => obj.age > 5);
    },
  },
  actions: {
    createCat(name, age) {
      this.cats.push({
        id: Math.floor(Math.random() * 100),
        name: name,
        age: age,
      });
    },
  },
});
