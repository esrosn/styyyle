import React from 'react'

const ProjectLink = (props) => {
    
    console.log(props.project)
    return ( 
        <div className="pa4 project-link w-100 w-50-l">
            <a href="/">
                <div  className="project-link--image">
                    <div 
                    style={{ background: props.project.color}}
                    className="project-link--image-cover">
                    </div>
                    <img width="800" height="600" className="img"/>
                    
                </div>
                <div className="project-link--title">
                    <h3>{props.project.title}</h3>
                    <h4>{props.project.category.type}</h4>
                </div>
            </a>
        </div>
     );
}
 
export default ProjectLink;