<script setup>
import { useRouter } from 'vue-router'
import {useStore} from '@/stores/store';
import BaseInput from "@/components/BaseInput.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import { ref} from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLayout from "@/components/BaseLayout.vue";

const store = useStore()

const router = useRouter()

const taskData = ref({
  title: "",
  isBug: false,
})

function addTask() {
  store.createTask(taskData.value).then(() => {
    taskData.value = {
      title: "",
      isBug: false,
    }
  })
}

function goToTaskList() {
  router.push({name: "task-list"})
}

</script>

<template>
  <div class="create-task-page">
    <base-layout>
      <template #main>
        <base-input v-model="taskData.title"
                    input-name="Название задачи"
                    placeholder="Введите название задачи"
                    signature="Будет отображаться на главной странице"/>
        <base-checkbox  v-model="taskData.isBug"
                        label="Является багом"/>
      </template>
      <template #split-footer>
        <base-button name="Вернуться"
                     secondary
                     @click="goToTaskList"/>
        <base-button name="Создать"
                     @keyup.enter="addTask()"
                     @click="addTask()"/>
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
</style>
