<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/store.js'
import BaseButton from "@/components/BaseButton.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import TaskRow from "@/components/TaskRow.vue";

const store = useStore()

const router = useRouter()
function goToCreateTask() {
  router.push({name: "create-task"})
}
function goToEditTask(number) {
  router.push({name: "view-task", params: {taskNumber: number}})
}

</script>

<template>
  <div class="create-task-page">
    <base-layout>
      <template #main>
        <div class="task-list">
          <task-row v-for="task in store.filteredTasks"
                    v-bind="task"
                    :key="task.number"
                    @removeClick="store.removeTask(task.number)"
                    @editClick="goToEditTask(task.number)" />
        </div>
      </template>
      <template #footer>
        <div class="counter-block">
          <span class="counter-block--counter">
            Задач: {{store.taskCounter}} / Багов: {{store.bugCounter}}
          </span>
          <base-button name="Добавить задачу"
                       view-box="0 0 16 16"
                       icon="PlusIcon"
                       @click="goToCreateTask" />
        </div>
      </template>
    </base-layout>
  </div>
</template>

<style scoped lang="sass">
.create-task-page
  display: flex
  flex-direction: column
  gap: 20px
  padding: 0 50px
  .task-list
    max-height: 300px
    display: flex
    flex-direction: column
    flex: inherit
    overflow-y: auto
  .counter-block
    display: flex
    flex-direction: column
    align-items: center
    gap: 16px
</style>
