import noProjectImg from "../assets/no-projects.png"

export default function NoProjectSelected({onStartAddProject}){
    return <div className="noprojectselected-main">
        <img className="noprojectsimg" src={noProjectImg} alt="An Empty Project" />
        <h2 className="noproject-h2">No Project Selected</h2>
        <p style={{color:'#9ca3af',marginBottom:'1rem'}}>Select a project or get started with a new one</p>
        <p style={{marginTop:'2rem'}}>
            <button className="project-button" onClick={onStartAddProject}>Create New Project</button>
        </p>
    </div>
}