<script>
  import { todos } from "../store"
  
  $:totalTodos = $todos.length;
  $:completedTodos = $todos.filter(todo => todo.completed).length;
</script>

<style>
   header{
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: calc(100% - 20px);
     max-width: 500px;
     height: 50px;
     background: #cdd8da;
     padding: 0 10px;
   }

</style>

<header>
  <span>Svelte Todo</span>
  <span>{completedTodos}/{totalTodos}</span>
</header>
