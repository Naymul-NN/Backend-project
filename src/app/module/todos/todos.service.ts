import { TodosModel } from "./todos.model"
import { Ttodos } from "./todos.interface"


const createTodo = async(Todo: Ttodos)=> {
   const result = await TodosModel.create(Todo)
   return result
}


const getAlltodos = async(priority?: string)=>{
   let filter = {};
  if (priority) {
    filter = { priority: priority };
  }
  const result = await TodosModel.find(filter);
  return result;
 }

 export const todosService = {
    getAlltodos,
    createTodo
 }