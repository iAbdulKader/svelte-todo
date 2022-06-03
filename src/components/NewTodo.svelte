<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let value = "";
  
  function handleKeyUp({key}) {
      if(key !== "Enter" || value === "") return
      
      dispatch("newtodo", value)
      value = ""
  }
  
  function submitTodo(){
    if(value === "") return
    
    dispatch("newtodo", value)
    value = ""
  }
  
</script>

<style>
  .todo-box{
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .wrapper{
    width: calc(100% - 20px);
    background: #555;
    flex-grow: 1;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  
  input{
    flex-grow: 1;
    border: none;
    outline: none;
    margin: 10px;
    color: #fff;
    background: transparent;
  }
  input::placeholder{
    color: #fff;
  }
  button{
    margin: 10px 20px 10px 0;
    background: #555;
    padding: 0;
    border: none;
    padding:none;
    color: #fff;
    user-select: none;
    cursor: pointer;
  }
</style>

<div class="todo-box">
  <div class="wrapper">
    <input 
      type="text"
      bind:value
      on:keyup={handleKeyUp}
      placeholder="+ Add A Todo"
    />
    <button 
      class="submit" 
      on:click={submitTodo}
    >Add</button>
  </div>
</div>