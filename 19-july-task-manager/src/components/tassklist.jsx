import React from 'react';
import TaskItem from './taskitem';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    deleteTask={deleteTask} 
                    updateTask={updateTask} 
                />
            ))}
        </ul>
    );
};

export default TaskList;
