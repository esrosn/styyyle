import React from 'react';
import ProjectLink from '../ProjectLink'


const Projects = (props) => {
    
        
        return ( 
            <div className="projects flex flex-wrap">
                
                {props.projects.map((project, idx) => (
                    <ProjectLink project={project} key={idx}/>
                  
                ))}

                
                
            </div>
         );
    
}
 
export default Projects;