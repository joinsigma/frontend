<template>
  <div class="main">
    <div class="todo-container">
      <h1>My Todo List</h1>
      <TodoControls
        @todo-item="(val) => addItem(val)"
        @select-tab="(val) => (selectedTab = val)"
      />
      <div v-for="(item, key) in todoItems" :key="key">
        <span :class="`todo-item ${item.completed ? 'line-through' : null}`">
          <input type="checkbox" v-model="item.completed" />
          {{ item.name }}
        </span>
        <i class="fa-regular fa-trash-can" @click="removeItem(item.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import TodoControls from "@/components/TodoControls.vue";
import { useTodoStore } from "@/stores/todo.js";
import { mapState, mapActions } from "pinia";

export default {
  components: { TodoControls },
  data() {
    return {
      selectedTab: "all",
    };
  },
  methods: {
    ...mapActions(useTodoStore, ["addItem"]),
    ...mapActions(useTodoStore, ["removeItem"]),
  },
  computed: {
    ...mapState(useTodoStore, ["completed"]),
    ...mapState(useTodoStore, ["uncompleted"]),
    ...mapState(useTodoStore, ["items"]),
    todoItems() {
      switch (this.selectedTab) {
        case "all":
          return this.items;
        case "uncompleted":
          return this.uncompleted;
        case "completed":
          return this.completed;
      }
    },
  },
};
</script>

<style>
div.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

div.todo-container {
  background: #fff;
  border-radius: 15px;
  padding: 45px;
}

.todo-item {
  width: 220px;
  display: inline-block;
  margin: 4px;
}

.line-through {
  text-decoration: line-through;
  color: #888;
}

h1 {
  text-align: center;
}

i:hover {
  color: #f24848;
}
</style>
