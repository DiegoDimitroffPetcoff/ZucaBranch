import React, { useState, useEffect } from "react";

import ProjectComponent from "./project/project";
import Nav from "../nav";
import { AxiosGetAll } from "../../utils/axios";

export function ProjectsList() {
  const [data, setData] = useState([
    {
      image: [{ url: "Cargando.." }],
      description: "Cargando..",
      name: "Cargando..",
    },
  ]);

  useEffect(() => {
    let url = "https://zucaarqback.onrender.com/projects";

    AxiosGetAll(url)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
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
