<script setup>
import BaseButton from "@/components/BaseButton.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/store.js'
import { onBeforeMount, ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'

const store = useStore()


const props = defineProps({
  taskNumber: {
    type: Number,
  },
})

onBeforeMount(()=>{store.getTask(props.taskNumber).then((res)=>{
  taskData.value = res
  console.log(taskData.value.isBug)
})
})
const taskData = ref({
  title: "",
  isBug: false,
  }
)

const router = useRouter()

function goToTaskList() {
  router.push({name: "task-list"})
}

function deleteTask() {
  store.removeTask(props.taskNumber).then(()=>{
    router.push({name: "task-list"})
  })
}
function editTaskHandler() {
  store.editTask(props.taskNumber, taskData.value).then(()=>{
    router.push({name: "task-list"})
  })
}

</script>

<template>
  <div class="create-task-page">
    <base-layout>
      <template #main>
        <base-input v-model="taskData.title"
                    placeholder="Введите название задачи"/>
        <base-checkbox  v-model="taskData.isBug"
                        label="Является багом"/>
      </template>
      <template #split-footer>
        <base-button name="Вернуться"
                     secondary
                     @click="goToTaskList"/>
        <div class="right-buttons">
          <base-button icon="TrashIcon"
                       secondary
                       @click="deleteTask(taskData.number)"/>
          <base-button name="Сохранить"
                       @click="editTaskHandler()"/>
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
  .right-buttons
    display: flex
    gap: 8px
</style>
