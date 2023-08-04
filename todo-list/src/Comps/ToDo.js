import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteToDo}) => {

    return(
        <div className="ToDo">
            <p onClick={() => toggleComplete(task.id)}className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>       
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)}></FontAwesomeIcon>
            </div>
        </div>
    )  
}