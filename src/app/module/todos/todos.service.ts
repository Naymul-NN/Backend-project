import { TodosModel } from "./todos.model"
import { Ttodos } from "./todos.interface"


const createTodo = async(Todo: Ttodos)=> {
   const result = await TodosModel.create(Todo)
   return result
}


const getAlltodos = async()=>{
    const result = await TodosModel.find()
    return result
 }

 export const todosService = {
    getAlltodos,
    createTodo
 }