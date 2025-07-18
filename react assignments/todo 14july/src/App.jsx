import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

function StaticTodoList() {
  const todos = [
    { id: 1, title: "Finish report", description: "Monthly financial report", category: "Work", completed: true },
    { id: 2, title: "Team meeting", description: "Sync with dev team", category: "Work", completed: false },
    { id: 3, title: "Buy groceries", description: "Milk, eggs, and bread", category: "Personal", completed: false },
    { id: 4, title: "Gym", description: "Leg day workout", category: "Personal", completed: true },
    { id: 5, title: "Read book", description: "Finish 'Atomic Habits'", category: "Hobby", completed: false },
    { id: 6, title: "Painting session", description: "Try new watercolor technique", category: "Hobby", completed: true },
  ];

  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div>
      <h1> To-Do List</h1>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {todos.filter(todo => todo.category === category).map(todo => (
            <div key={todo.id}>
              <span>{todo.completed ? "✅" : "❌"} </span>
              {todo.title}
              <div style={{   }}>{todo.description}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default StaticTodoList;

