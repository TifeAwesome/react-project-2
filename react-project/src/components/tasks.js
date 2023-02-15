import React from 'react';

const Task = ({ task, onDelete}) => {
    return(
        <div className="task-individual">
            <div className="task1">
                <h3>{task.text}</h3>;
                <i class="fa-sharp fa-solid fa-xmark" style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}></i>
            </div>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;