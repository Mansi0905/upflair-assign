import React, { useEffect, useState } from 'react';
import api from './api/api';
import TaskForm from './components/taskform';
import TaskList from './components/tassklist';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await api.get('/tasks');
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (title) => {
        const res = await api.post('/tasks', { title });
        setTasks([...tasks, res.data]);
    };

    const deleteTask = async (id) => {
        await api.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
    };

    const updateTask = async (id) => {
        const updatedTitle = prompt('Enter new title:');
        if (!updatedTitle) return;
        const res = await api.put(`/tasks/${id}`, { title: updatedTitle });
        setTasks(tasks.map(task => (task.id === id ? res.data : task)));
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
    );
};

export default App;
