import "./project.css";

export default function ProjectComponent({ description, img, title, id }) {
  return (
    <div className="containerProject">
      <h1 className="title">{title}</h1>
      <img className="imagenProject" src={img} alt="Project Description" />
      <p className="description">{description}</p>
    </div>
  );
}

