<script>
	import CourseGoal from './CourseGoal.svelte'
	export let courseGoal = 'Know Svelte professionally'
</script>
	  
<div>
	  <h1>Please tell me your course goals:</h1>
	  
	  <input type="text" bind:value={courseGoal} />
	  
	  <CourseGoal goal={courseGoal} />
</div>