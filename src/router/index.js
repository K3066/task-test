import { createRouter, createWebHistory } from 'vue-router'
import TaskList from "@/views/TaskList.vue";
import CreateTaskPage from "@/views/CreateTaskPage.vue";
import ViewTaskPage from '@/views/ViewTaskPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task-list',
      component: TaskList,
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: CreateTaskPage,
    },
    {
      path: '/view-task/-/:taskNumber',
      name: 'view-task',
      component: ViewTaskPage,
      props: (route) => ({taskNumber: Number(route.params.taskNumber)}),
    },
    {
      path: "/:pathMatch(.*)*", redirect: {name: "task-list"}
    }

  ],
})

export default router
