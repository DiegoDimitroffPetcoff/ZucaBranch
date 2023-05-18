import React, { useState, useEffect } from "react";
//import { Outlet, Link } from "react-router-dom";
import ProjectComponent from "./project/project";
import Nav from "../nav";
import axios from "axios"

export function ProjectsList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://zucaarqback.onrender.com/projects')
      .then(response => {
        setData(response.data);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);


 

  return (
    <div>
    <Nav></Nav>
    <div className="projectOrden">
      {data.map((project) => {

        return (
        
          <ProjectComponent
            description={project.description}
            title={project.name}
            img={project.image.url}
            id={project._id}
          />
        );
      })}
      </div>
    </div>
  );
}

export default ProjectsList;
