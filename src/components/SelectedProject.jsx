import Tasks from './Tasks.jsx';

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="project-container">
  <header className="project-header">
    <div className="header-content">
      <h1 className="project-title">
        {project.title}
      </h1>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
    <p className="project-date">{formattedDate}</p>
    <p className="project-description">
      {project.description}
    </p>
  </header>
  <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
</div>

  );
}