import React from 'react' 

const ProjectEdit = (props) =>{
    const id = props.match.params.id
    return(
        <div>
            <h1>Project Title EDITING {id}</h1>
        </div>
    )
}

export default ProjectEdit