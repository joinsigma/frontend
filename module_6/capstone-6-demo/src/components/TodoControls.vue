<template>
  <div>
    <input type="text" v-model="inputText" />
    <button class="add" @click="$emit('todoItem', inputText)">add me</button>
  </div>
  <div>
    <button
      :class="`tab ${currentTab == 'completed' ? 'selected' : null}`"
      @click="selectTab('completed')"
    >
      Completed
    </button>
    <button
      :class="`tab ${currentTab == 'uncompleted' ? 'selected' : null}`"
      @click="selectTab('uncompleted')"
    >
      Uncompleted
    </button>
    <button
      :class="`tab ${currentTab == 'all' ? 'selected' : null}`"
      @click="selectTab('all')"
    >
      All
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      currentTab: "all",
    };
  },
  emits: ["todoItem", "selectTab"],
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
      this.$emit("selectTab", tab);
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 15px;
  outline: none;
  padding: 0 15px;
  margin-right: 8px;
}

button.add {
  background: #222;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
}

button.add:hover {
  background: #487cff;
}
button.tab {
  background: none;
  outline: none;
  border: none;
  width: 90px;
  margin: 10px 0;
}

button.tab:hover {
  cursor: pointer;
  color: #487cff;
}

button.tab.selected {
  color: #0048ff;
}
</style>
