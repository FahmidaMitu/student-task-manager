function TaskStats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const remainingTasks = totalTasks - completedTasks; // Remaining tasks counter (Bonus)

  return (
    <div className="task-stats">
      <p>Total Tasks: <strong>{totalTasks}</strong></p>
      <p>Completed: <strong>{completedTasks}</strong></p>
      <p>Remaining: <strong>{remainingTasks}</strong></p>
    </div>
  );
}

export default TaskStats;