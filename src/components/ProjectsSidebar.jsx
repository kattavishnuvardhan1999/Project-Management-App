
export default function ProjectsSidebar({onStartAddProject}){
    return <aside className="your-projects">
        <h2 className="your-projects-heading">Your projects</h2>
        <div>
            <button className="project-button" onClick={onStartAddProject}>+ Add Project</button>

        </div>
    </aside>
}