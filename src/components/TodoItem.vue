<template>
  <div class="todo-item" @click="toggleCompletion()">
    <div class="checkbox">
      <input type="checkbox" :checked="completed" />
      <span class="checkmark" />
    </div>
    <div>
      <p class="title" :class="completed && 'completed'">
        {{ text }}
      </p>
      <p class="small">
        {{ formatDate(id) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import { MutationType } from "@/stores/mutations";

export default defineComponent({
  props: {
    completed: { type: Boolean, required: true },
    id: { type: Number, required: true },
    text: { type: String, required: true },
  },
  methods: {
    toggleCompletion() {
      this.$store.commit(MutationType.CompleteItem, {
        id: this.$props.id,
        completed: !this.$props.completed,
      });
    },
    formatDate(dateString: string) {
      return moment(dateString).format("dddd, MM, YYYY");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_color.scss";
.todo-item {
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;

  .checkbox {
    margin-right: 8px;
  }

  .title {
    color: $grey-500;
    &.completed {
      color: $grey-400;
      text-decoration: line-through;
    }
  }
}
</style>
