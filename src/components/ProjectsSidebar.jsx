export default function ProjectsSidebar({onStartAddProject,projects,onSelectProject,selectedProjectId}){
    return <aside className="your-projects">
        <h2 className="your-projects-heading">Your projects</h2>
        <div>
            <button className="project-button" onClick={onStartAddProject}>+ Add Project</button>
            
        </div>
        <ul style={{listStyleType:'none',paddingLeft:'0px',marginTop:'2rem'}}>
            {projects.map((project)=> {
                return <li key={project.id}>
                <button className="project-new-list"
                 onClick={() =>{ onSelectProject(project.id)}}
                >
                    {project.title}
                </button>
            </li>
            }
                )}
        </ul>
    </aside>
}