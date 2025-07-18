import React, { useState } from "react";

let initialState = ["to buy fruits"];
// [{task:'', isComplete:true,dueDate, priority}]
function Todo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(initialState);
function addTask(){
    setTasks([...tasks,text])
    setText('')
}
function deleteTask(index) {
    setTasks(tasks.filter((v,i)=>i!=index))
}
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)}
      value={text} />
      <button onClick={addTask}>Add</button> <br />
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}
          {" "} <button onClick={()=>deleteTask(index)}>delete</button></li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;