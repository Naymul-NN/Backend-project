import { Schema, model } from "mongoose";
import { Ttodos } from "./todos.interface";

const todosSchema = new Schema({
    status: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateTime: {type: String, required: true},
    priority: {type: String, required: true},
    
});

export const TodosModel = model<Ttodos>('todo', todosSchema);