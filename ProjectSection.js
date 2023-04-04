import React from 'react'
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import {RxArrowRight} from "react-icons/rx";
import { Consumer } from "../Context";


function ProjectSection() {
   
 return(   
<Consumer>
    {(value) => {
        
        const { projects } = value;
       
         return (
   
            <div className='container text-center my-5'>
                <h1 className='font-weight-light'>
                    My <span className='text-info'>projects </span></h1>
                <div className='lead'>I built products just like this website</div>
                <div className='row my-5 pt-3'>
                  
                  { projects.map((project) =>(
                        <div key={project.id} className='col-12 col-md-4 my-2'>
                            <ProjectCard project={project} />
                        </div>
                        
                  ) )} 
                     
                    </div>
                    <div className='my-5'>
                        <Link to='/project/:{id}' className='text-dark text-right'>
                            <h5>see my projects 
                            <RxArrowRight/>
                            </h5>
                        </Link>
                    </div>
                </div>
             
                    
            
                
        
        
                
    );

    }}
</Consumer>
 );    
 }

export default ProjectSection; 
