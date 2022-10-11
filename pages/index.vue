<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Add a new task" 
        @keypress.enter="addTask" />
      <button @click="addTask">Add</button>
     </div>

    <div class="tasks">
      <Task
      v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :props ="task"/>
      
    </div>

  </main>
</template>

<script setup lang="ts">
import { TodoItem } from "~~/types";
const tasks = useState("tasks", () => [] as TodoItem[]); 
  
const newTask = ref("");

const addTask = () => {
  tasks.value.push({
    name: newTask.value,
    completed: false,
  });
  newTask.value = "";
};
  

</script>
