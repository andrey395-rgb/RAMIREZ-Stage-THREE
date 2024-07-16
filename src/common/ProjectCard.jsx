import React from "react";

function ProjectCard({ id, avatar, first_name, last_name , email}) {
  return (
    <a href={""} target="_blank">
      <img id="imageholder" className="hover" src={avatar} />
      <h3 className="idlabel">#{id}</h3>
      <h4 className="labeltext">
      {first_name},{last_name}
      </h4>
      <h3 className="emailadd">{email}</h3>

    </a>
  );
}
// alt={`${alt} logo`
export default ProjectCard;