import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, currentTask }) => {
  const [text, setText] = useState('');
  const [dateTime, setDateTime] = useState('');

  // Update the form when editing a task
  useEffect(() => {
    if (currentTask) {
      setText(currentTask.text);
      setDateTime(currentTask.dateTime);
    } else {
      setText('');
      setDateTime('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const taskData = {
      text,
      dateTime: dateTime || new Date().toLocaleString(), // Set the current date and time if not editing
    };

    if (currentTask) {
      updateTask(currentTask.id, taskData);
    } else {
      addTask(taskData);
    }

    setText(''); // Clear input field
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add or edit task"
        required 
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
