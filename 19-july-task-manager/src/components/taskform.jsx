import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input 
                type="text" 
                placeholder="Add a new task..." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                style={{ padding: '8px', width: '70%' }}
            />
            <button type="submit" style={{ padding: '8px' }}>Add</button>
        </form>
    );
};

export default TaskForm;
