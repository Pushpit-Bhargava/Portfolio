import React from 'react';
import {Link} from "react-router-dom";





function ProjectCard(props) {

  
  
 const {title,excerpt,imageUrl}= props

  return (
    
      
        
    <div className='card shadow h-100'>
      <img className='card-img-top'
      src={imageUrl}
      alt='free image'/>

    <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>{excerpt}</p>
        <Link to='/project/:id' className='streched-link'></Link>
    
    </div>
</div>
         


  );
}
export default ProjectCard;