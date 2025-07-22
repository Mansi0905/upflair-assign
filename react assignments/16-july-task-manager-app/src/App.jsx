

import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', priority: 'Low' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    if (isEditing) {
      setTasks(tasks.map(task => task.id === editId ? { ...task, ...form } : task));
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title: form.title,
        description: form.description,
        priority: form.priority,
        status: 'Pending',
      };
      setTasks([...tasks, newTask]);
    }
    setForm({ title: '', description: '', priority: 'Low' });
  };

  const handleEdit = (id) => {
    const task = tasks.find(t => t.id === id);
    setForm({ title: task.title, description: task.description, priority: task.priority });
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const changeStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'In Progress' : task.status === 'In Progress' ? 'Completed' : 'Pending' } : task
    ));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h2>Task Manager App</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <input name="title" placeholder="Task Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
      </form>

      <h3 style={{ marginTop: '1rem' }}>Tasks</h3>
      {tasks.length === 0 && <p>No tasks yet.</p>}
      {tasks.map(task => (
        <div key={task.id} style={{ border: '1px solid #ccc', padding: '0.5rem', marginTop: '0.5rem' }}>
          <h4>{task.title} [{task.status}]</h4>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <button onClick={() => changeStatus(task.id)}>Change Status</button>
        </div>
      ))}
    </div>
  );
};

export default App;
