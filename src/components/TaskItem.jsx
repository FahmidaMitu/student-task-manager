

function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  // যদি task ডেটা না থাকে, তবে ক্র্যাশ হওয়া থেকে বাঁচাবে
  if (!task) return null;

  const handleDelete = () => {
    const confirmed = window.confirm(`Are you sure you want to delete "${task.title}"?`);
    if (confirmed) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed || false}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </label>
      <button onClick={handleDelete} className="btn-delete">Delete</button>
    </div>
  );
}

export default TaskItem;