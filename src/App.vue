<template>
  <main>
   
    <!-- Header -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>Pinia Tasks</h1>

    </header>

    <!-- new task add form -->
    <div class="new-task-form">
      <TaskForm/>
    </div>

<!-- Filter  -->
    <nav class="filter">
      <button @click="filter ='all'">All</button>
      <button @click="filter = 'favs'">Favs</button>
    </nav>


    <!-- loading -->
    <div class="loading" v-if="taskStore.loading"> Loading is On...</div>

    <!-- Task List -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} left to do</p>
        <div v-for="task in taskStore.tasks">
       <TaskDetails :task = "task"/>
        </div>
      </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} left to do</p>
        <div v-for="task in taskStore.favs">
       <TaskDetails :task = "task"/>
        </div>
      </div>
  </main>
</template>

<script>

import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import {useTaskStore} from './sotres/TaskStore';
import TaskForm from './components/TaskForm.vue';

  export default {
    setup() {
        const taskStore = useTaskStore();

        // fetch api
        taskStore.getTasks()

        const filter =ref("all")
        return { taskStore,filter };
    },
    components: { TaskDetails, TaskForm }
}
</script>

