<template>
  <div class="todo-list" :class="isExpanded && 'expanded'">
    <div class="list-header" @click="toggleExpanding()">
      <span class="shape" />
      <p>{{ items.length }} Done</p>
    </div>

    <Transition name="fade">
      <div v-if="isExpanded" class="list-content">
        <TodoItem
          v-for="item in items"
          :id="item.id"
          :key="item"
          :completed="item.completed"
          :text="item.text"
        />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  components: {
    TodoItem,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    items() {
      return this.$store.getters.completedItems;
    },
  },
  methods: {
    toggleExpanding() {
      this.isExpanded = !this.isExpanded;
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/_color.scss";
.todo-list {
  border-top: 1px solid $grey-100;
  border-bottom: 1px solid $grey-100;
  margin: 0 16px;

  .list-header {
    cursor: pointer;
    padding: 16px;
    display: flex;
    align-items: center;

    .shape {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 10px solid $grey-200;
      transform: rotate(-90deg);
      transition: 0.3s;
    }

    p {
      margin-left: 13px;
      color: #ccc;
    }
  }

  &.expanded {
    .shape {
      transform: rotate(0deg);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @media screen and (max-width: 576px) {
    margin: 0;

    .list-header {
      padding: 16px 23px;
    }

    .list-content {
      padding: 0 16px;
    }
  }
}
</style>
