<template>
  <div>
    <input type="text" v-model="inputText" />
    <i
      class="fa-solid fa-circle-plus"
      @click="$emit('todoItem', inputText)"
    ></i>
  </div>
  <div>
    <button
      @click="selectTab('completed')"
      :class="currentTab == 'completed' ? 'selected' : null"
    >
      Completed
    </button>
    <button
      @click="selectTab('uncompleted')"
      :class="currentTab == 'uncompleted' ? 'selected' : null"
    >
      Completed
    </button>
    <button
      @click="selectTab('all')"
      :class="currentTab == 'all' ? 'selected' : null"
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
      currentTab: "",
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
i {
  margin-left: 5px;
  font-size: 25px;
  margin-top: 5px;
}

input {
  height: 30px;
  width: 70%;
  border-radius: 15px;
  outline: none;
  border: 2px solid grey;
  padding: 0 15px;
}

button {
  background: #222;
  color: white;
  font-family: "Changa";
  outline: none;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
  background: #487cff;
}

button.selected {
  background: #8faeff;
  color: black;
}
</style>
