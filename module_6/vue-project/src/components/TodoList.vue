<template>
  <div class="main">
    <div class="todo-container">
      <h1>Todo List</h1>
      <TodoControls
        @todo-item="(val) => addItem(val)"
        @select-tab="(val) => (selectedTab = val)"
      />
      <div v-for="(item, key) in todoItems" :key="key">
        <span :class="`todo-item ${item.completed ? 'strikethrough' : null}`">
          <input type="checkbox" v-model="item.completed" />
          {{ item.name }}
        </span>
        <i class="fa-solid fa-trash-can" @click="removeItem(item.id)"></i>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { useTodoStore } from "@/stores/todo.js";
import { mapActions, mapState, storeToRefs } from "pinia";
import TodoControls from "@/components/TodoControls.vue";

export default {
  components: { TodoControls },
  setup() {
    const todo = useTodoStore();
  },
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
    ...mapState(useTodoStore, ["uncompleted"]),
    ...mapState(useTodoStore, ["completed"]),
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

h1 {
  text-align: center;
}

.todo-container {
  background: #fff;
  border-radius: 15px;
  padding: 50px;
}

.todo-item {
  width: 180px;
  display: inline-block;
  margin: 3px;
}

.strikethrough {
  text-decoration: line-through;
  color: #999;
}
</style>
