import "./project.css";
import { AxiosDelete } from "../../../utils/axios";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";

export default function ProjectComponent({ description, img, title, id }) {
  let Log = useSelector((state) => state.loggedAction);

  function delteProject(id) {
    try {
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
      <Carousel>
        {Array.isArray(img) &&
          img.map((image, index) => (
            <Carousel.Item interval={9000} key={index}>
              <img
                className="imagenProject"
                src={image.url}
                alt={index}
                onClick={() => window.open(image.url, "_blank")}
              />
            </Carousel.Item>
          ))}
      </Carousel>

      <p className="descriptionProject">{description}</p>

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
