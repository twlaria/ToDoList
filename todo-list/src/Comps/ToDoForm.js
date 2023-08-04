import React, {useState} from "react";

export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit=e=> {
        e.preventDefault();
        
        setValue("")
        addTodo(value)
    }
    return(
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="ToDo-Input" value={value} placeholder="Bugün ne yapacaksınız?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="ToDo-Button">Add Task</button>
        </form>
    )  
}