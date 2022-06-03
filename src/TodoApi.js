export default class TodoApi {
  static async getTodos(){
    return JSON.parse(localStorage.getItem("todos") || "[]")
  }
  
  static async save(todos){
    console.log(todos)
    await localStorage.setItem("todos", JSON.stringify(todos))
  }
}