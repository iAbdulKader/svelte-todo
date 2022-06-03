<script>
  import { onMount } from "svelte";
  import TodoApi from "../TodoApi";
  import { todos } from "../store";
  
  import { v4 as uuidv4 } from "uuid";
  
  import Todo from "./Todo.svelte";
  import NewTodo from "./NewTodo.svelte";
  
  function handleNewTodo({detail: text}){
    $todos = [
      {
        id: uuidv4(),
        text,
        completed: false,
      },
      ...$todos,
    ];
    
    TodoApi.save($todos);
  }
  
  function handleUpdate({detail}){
    
    const index = $todos.findIndex(todo => todo.id === detail.id);
    $todos[index] = detail;
    TodoApi.save($todos)
    console.log("updated")
  }
  
  function handleDelete({detail: id}){
    $todos = $todos.filter(todo => todo.id !== id);
    
    todoApi.save($todos)
    
  }

  onMount(async () => {
    $todos = await TodoApi.getTodos()
    
  })
</script>

<style>
   .todos{
      margin-top: 5px;
      width: calc(100%);
      max-width: 500px;
      background: #cdd8da;
      
    }
    .todo-status{
      font-size: 22px;
      font-weight: 600;
      text-align: center;
      padding: 25px 0;
    }
</style>

<div class="todos">
  <NewTodo on:newtodo={handleNewTodo} />
  
  {#each $todos as todo (todo.id)}
    <Todo {...todo} on:update={handleUpdate} on:delete={handleDelete} />
    {:else}
    <p class="todo-status">No Todo Exists</p>
  {/each}
</div>