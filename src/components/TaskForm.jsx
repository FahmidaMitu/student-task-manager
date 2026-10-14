import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) {
      setError('Task title cannot be empty.'); // Form Validation
      return;
    }
    setError('');
    onAddTask(taskText.trim());
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            if (error) setError('');
          }}
        />
        <button type="submit" className="btn-add">Add Task</button>
      </div>
      {error && <p className="error-text">{error}</p>}
    </form>
  );
}

export default TaskForm;