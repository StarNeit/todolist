<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <DoneList />

    <div class="content">
      <TodoItem
        v-for="item in items"
        :id="item.id"
        :key="item"
        :completed="item.completed"
        :text="item.text"
      />
    </div>

    <CreateNew />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "@/components/TodoItem.vue";
import DoneList from "@/components/DoneList.vue";
import CreateNew from "@/components/CreateNew.vue";
import { ActionTypes } from "./stores/actions";
import "@/styles/global.scss";

export default defineComponent({
  name: "App",
  components: {
    DoneList,
    TodoItem,
    CreateNew,
  },
  computed: {
    items() {
      return this.$store.getters.notCompletedItems;
    },
  },
  mounted() {
    this.$nextTick(() => this.$store.dispatch(ActionTypes.GetTodoItems));
  },
});
</script>

<style lang="scss">
.todo-app {
  max-width: 560px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;

  h1 {
    margin-top: 30px;
    margin-bottom: 12px;
    padding: 0 16px;
  }

  .content {
    flex: 1;
    overflow: auto;
    margin: 16px 0;
    padding: 0 16px;
  }
}
</style>
