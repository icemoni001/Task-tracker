import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  // Edit an existing task
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { id, ...updatedTask } : task));
    setCurrentTask(null); // Reset the current task
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Set the task to edit
  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm 
        addTask={addTask} 
        updateTask={updateTask} 
        currentTask={currentTask}
      />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editTask={editTask}
      />
    </div>
  );
};

export default App;
