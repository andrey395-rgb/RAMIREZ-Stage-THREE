import React from 'react';

function ProjectCard({idlabel, src, link,alt, p}) {
  return (
    <a href={link} target="_blank">
          <img id= 'imageholder' className="hover" idlabel = {idlabel} src={src} alt={`${alt} logo`} />
          <h3 className='idlabel'>{idlabel}</h3>
          <h4 className='labeltext'>{alt}</h4>
          <p>{p}</p>
        </a>

      
  )
}

export default ProjectCard;