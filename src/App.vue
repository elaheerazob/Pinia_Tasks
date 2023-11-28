<template>
  <main>
    <!-- Header -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>Pinia Tasks</h1>
      <!-- <h2>{{taskStore.name}}</h2> -->

      <!-- Task List -->
      <div class="task-list">
        <div v-for="task in taskStore.tasks">
        <p>{{ task.title }}</p>
        </div>
      </div>
    </header>
  </main>
</template>

<script>
import {useTaskStore} from './sotres/TaskStore';

  export default {
    setup () {
      const taskStore = useTaskStore()

    return { taskStore }
    }
    
  }
</script>

