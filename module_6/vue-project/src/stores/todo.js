import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "counter",
  state: () => ({
    items: [
      { id: 1, name: "Eat dinner", category: "food", completed: false },
      { id: 2, name: "Eat dinner", category: "food", completed: false },
      { id: 3, name: "Eat dinner", category: "food", completed: true },
    ],
  }),
  getters: {
    completed() {
      return this.items.filter((obj) => obj.completed);
    },
    uncompleted() {
      return this.items.filter((obj) => !obj.completed);
    },
  },
  actions: {
    addItem(item) {
      if (item) {
        let obj = { id: this.items.length, name: item, completed: false };
        this.items.push(obj);
      }
    },
    removeItem(index) {
      console.log(index);
      this.items = this.items.filter((obj) => {
        return obj.id !== index;
      });
    },
  },
});
