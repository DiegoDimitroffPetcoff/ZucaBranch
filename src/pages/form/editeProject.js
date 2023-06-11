import React, { useState, useEffect } from "react";

import { AxiosSearchById } from "../../utils/axios";
import "../../css/login.css";
import Nav from "../nav";

import ReadOnlyProject from "./readOnlyProject";

import queryString from "query-string";

const EditeProject = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const urlParams = queryString.parse(window.location.search);
    const id = urlParams.id;
    let url = "https://zucaback2.fly.dev/project/";

    AxiosSearchById(url, id)
      .then((response) => {
        setProject(response.data);
      })
      .catch((err) => {});

  }, []);

  return (
    <div>
      <Nav></Nav>

      <ReadOnlyProject
        description={project.description}
        title={project.name}
        img={project.image?.url}
        id={project._id}
      ></ReadOnlyProject>
    </div>
  );
};

export default EditeProject;
