<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let value = "";
  
  function handleKeyUp({key}) {
  if(key !== "Enter" || value === "") return
  
  dispatch("newtodo", value)
  value = ""
  }
</script>

<style>
</style>

<input 
  type="text"
  bind:value
  on:keyup={handleKeyUp}
  placeholder="+ Add A Todo"
/>