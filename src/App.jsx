import{ useState } from 'react';
import Card from './components/Card';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React Components & Props', completed: true },
    { id: 2, title: 'Build Student Task Manager Assignment', completed: false },
  ]);
  
  const [filter, setFilter] = useState('All');
  const [hasError] = useState(false);

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Task Manager</h1>
        <p>React Assignment</p>
      </header>

      <main>
        <Card className="main-card">
          <TaskForm onAddTask={handleAddTask} />

          <div className="filter-buttons">
            {['All', 'Completed', 'Pending'].map((tab) => (
              <button
                key={tab}
                className={`btn-filter ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <TaskStats tasks={tasks} />

          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
            hasError={hasError}
          />
        </Card>
      </main>
    </div>
  );
}

export default App;