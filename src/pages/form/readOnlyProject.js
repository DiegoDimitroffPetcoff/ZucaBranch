import "../../pages/projects/project/project.css";




export default function ReadOnlyProject({ description, img, title, id }) {

  return (
    <div className="containerProject">
      <h1 className="title">{title}</h1>
      <img className="imagenProject" src={img} alt="Project Description" />
      <p className="description">{description}</p>


    </div>
  );
}
//TODO TENGO QUE CREAR UN ONLY READ COMO ESTE PERO EN DONDE YA NO APAREZCAN LOS BOTONES.. Y EL TEXTO SEA EDITABLE