import React from 'react' 
import ProjectSum from './ProjectSum'

const ProjectList = () => {
    return(
        <div className="project_list_container">
           <ProjectSum />
           <ProjectSum />
           <ProjectSum />
        </div>
    )
}

export default ProjectList