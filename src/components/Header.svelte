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
     width: 100%;
     max-width: 500px;
     height: 50px;
     background: #cdd8da;
     padding: 0;
     border-bottom: 1px solid #999;
     margin: 0 auto;
   }
   header span:first-child{
     margin-left: 10px;
   }
   header span:last-child{
     margin-right: 10px;
   }
</style>

<header>
  <span>Svelte Todo</span>
  <span>{completedTodos}/{totalTodos}</span>
</header>
