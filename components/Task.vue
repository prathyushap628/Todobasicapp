<template>
	<div :class="`task ${task.done ? 'is-complete' : ''}`">
		<div class="content">{{ task.name }}</div>
		<div class="buttons">
			<button @click="toggleDone(task)">{{ task.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeTask" class="delete">Delete</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TodoItem } from "~~/types";
   const props = defineProps(['task']);
	// props: ['task'],
	const tasks = useState("tasks", () => [] as TodoItem[]);

	
 const removeTask = (index: any) => {
 tasks.value.splice(index, 1);
 }

   function toggleDone(task: { done: boolean; }) {
    task.done = !task.done;
   }

</script>

<style>

</style>