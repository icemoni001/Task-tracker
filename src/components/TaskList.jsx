import React from 'react';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div className="task-text">
            {task.text}
            <div className="task-date-time">
              <small>{task.dateTime}</small>
            </div>
          </div>
          <div className="task-buttons">
            <button className="edit" onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Del</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
