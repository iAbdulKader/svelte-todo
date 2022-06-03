<script>
  import { createEventDispatcher } from "svelte";
    
  export let id, text, completed;
  
  const dispatch = createEventDispatcher();
  
  function triggerUpdate() {
    dispatch("update", { id, text, completed });
  }
  
  function handleDoubleClick() {
    const yes = confirm("Are you sure you wish to delete this item?");
    
    if (yes) {
      dispatch("delete", id);
    }
  }
</script>

<style>
  .todo{
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 5px 10px 0 10px;
  }
  .todo input{
    background: transparent;
    outline: none;
    border: none;
    margin: 5px;
    flex-grow: 1;
  }
  .todo input:focus{
    background: #c9c7c7;
    border-radius: 4px;
  }
  .todo.completed input{
    color: #666666;
    text-decoration: line-through;
  }
  
  
</style>

<div class="todo" class:completed on:dblclick={handleDoubleClick}>
  <input
    type="text"
    class="input-text"
    bind:value={text}
    readonly={completed}
    on:keyup={({ key, target }) => key === 'Enter' && target.blur()}
    on:blur={() => triggerUpdate()}
  />
  <input 
    type="checkbox"
    class="completed-todo"
    bind:checked={completed}
    on:change={() => triggerUpdate()}
  />
</div>