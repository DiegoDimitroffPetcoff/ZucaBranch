import React from "react";

const ReadOnlyProject = ({ project }) => {
  return (
    <div className="containerProject">
      <h1 className="title">{project.name}</h1>
      <img
        className="imagenProject"
        src={project.description}
        alt="Project Description"
      />
      <p className="description">{project.description}</p>

      <div>
        <button className="buttonDelete">ELIMINAR PUBLICACION</button>
        <button className="buttonEdite">EDITAR PUBLICACION</button>
      </div>
    </div>
  );
};

export default ReadOnlyProject;
