import "./project.css";
import { AxiosDelete } from "../../../utils/axios";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";

export default function ProjectComponent({ description, img, title, id }) {
  let Log = useSelector((state) => state.loggedAction);

  function delteProject(id) {
try {
  console.log(id);
  let url = "https://zucaarqback.onrender.com/project/";
  AxiosDelete(url, id);

} catch (error) {
  console.log(error);
}
  }

  function editeProject(id) {
    window.location.href = "/editeproject?id=" + id;
  }

  return (
    <div className="containerProject">
      <h1 className="title">{title}</h1>
      <img className="imagenProject" src={img} alt="Project Description" />
      <p className="description">{description}</p>

      {Log ? (
        <div>
          <Button variant="danger" onClick={() => delteProject(id)}>
            ELIMINAR PUBLICACION
          </Button>{" "}
          <Button variant="success" onClick={() => editeProject(id)}>
            EDITAR PUBLICACION
          </Button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
//TODO TENGO QUE CREAR UN ONLY READ COMO ESTE PERO EN DONDE YA NO APAREZCAN LOS BOTONES.. Y EL TEXTO SEA EDITABLE
