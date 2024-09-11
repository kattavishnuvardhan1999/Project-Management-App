import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="tasks-container">
      <h2 className="tasks-heading">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="no-tasks-message">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.text}</span>
              <button className="task-clear-button" onClick={() => onDelete(task.id)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
