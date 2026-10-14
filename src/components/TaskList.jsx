
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDeleteTask, hasError }) {
  if (hasError) {
    return <div className="fallback-ui">⚠️ Oops! Unable to load the task list at the moment.</div>;
  }

  if (!tasks || tasks.length === 0) {
    return <p className="no-tasks">No tasks available.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;