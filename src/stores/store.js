import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const taskCounter = computed(() => taskList.value.length)
  const bugCounter = computed(() => {
      return  taskList.value.filter((task) =>
        task.isBug === true
      ).length
    })

  const idCounter = ref(0)
  const taskList = ref([])

  const filteredTasks = ref(computed(() => {
    return [...taskList.value.filter((task) => task.isBug), ...taskList.value.filter((task) => !task.isBug)]
  }))

  async function createTask(taskData) {
    idCounter.value++
    taskList.value.push(taskData)
    taskData.number = idCounter.value
  }

  async function removeTask(taskNumber) {
    const taskIndex = await findTask(taskNumber)
    taskList.value.splice(taskIndex, 1)
  }

  async function findTask(taskNumber) {
    const taskObject = taskList.value.find((task) => task.number === taskNumber)
    return taskList.value.indexOf(taskObject)
  }

  async function getTask(taskNumber) {
    const taskIndex = await findTask(taskNumber)
    return taskList.value[taskIndex]
  }

  async function editTask(taskNumber, taskData) {
    const taskIndex = await findTask(taskNumber)
    taskList.value[taskIndex] = taskData
  }

  return { taskCounter, bugCounter, filteredTasks , createTask, removeTask, editTask, getTask }
})
