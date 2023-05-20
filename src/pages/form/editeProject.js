import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import "../../css/login.css";
import Nav from "../nav";

import ReadOnlyProject from "./readOnlyProject";

import queryString from "query-string";

const EditeProject = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const urlParams = queryString.parse(window.location.search);
    const id = urlParams.id;

    axios
      .get("https://zucaarqback.onrender.com/project/" + id)
      .then((response) => {
        setProject(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
