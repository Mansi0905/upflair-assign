import React from 'react';

const TaskItem = ({ task, deleteTask, updateTask }) => {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>{task.title}</span>
            <div>
                <button onClick={() => updateTask(task.id)} style={{ marginRight: '5px' }}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
