import React, {useState} from "react";
import { ToDoForm } from "./ToDoForm";
import {v4 as uuidv4} from "uuid"
import { ToDo } from "./ToDo";
uuidv4();

export const ToDoWrapper = () => {
    const [Todos, setTodos] = useState([])
    const addTodo = Todo => {
        setTodos([...Todos, {id: uuidv4(), task: Todo, completed: false, isEditting: false}])
        console.log(Todos)
    } 

    const toggleComplete = id => {
        setTodos(Todos.map(Todo => Todo.id === id ? {
            ...Todo,completed: !Todo.completed} : Todo))
    }

    const deleteToDo = id => {
        setTodos(Todos.filter(Todo => Todo.id !== id))
    }

    return(
        <div className="ToDoWrapper">
            <h1>Yapılacaklar Listesi</h1>
            <ToDoForm addTodo={addTodo} />
            {Todos.map((Todo, index)=>(
                <ToDo task = {Todo} key={index}
                toggleComplete={toggleComplete} deleteToDo={deleteToDo}/>
            ))}       
        </div>
    )  
}