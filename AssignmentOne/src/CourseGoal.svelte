<script>
  export let goal

  $: highlight = goal.includes('!')
</script>
  
<div 
  class:normalOutput={!highlight} 
  class:redOutput={highlight}>
  <h1 >{goal}</h1>
</div>
  
<style>
  .redOutput {
    color: red;
  }
  
  .normalOutput {
    color: black
  }
</style>