<template>
  <form class="create-new" @submit.prevent="createTask">
    <input v-model="text" type="text" placeholder="A new To Do item..." />
    <button type="submit" :disabled="!text">Add Item</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItem } from "@/stores/state";
import { MutationType } from "@/stores/mutations";

export default defineComponent({
  data() {
    return {
      text: "",
    };
  },
  methods: {
    createTask() {
      if (this.text !== "") {
        const item: TodoItem = {
          id: Date.now(),
          text: this.text,
          completed: false,
        };

        this.$store.commit(MutationType.CreateItem, item);
        this.text = "";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.create-new {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;

  input {
    flex: 1;
  }
}
</style>
