import "./project.css";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ProjectComponent({ description, img, title, id }) {
  let Log = useSelector((state) => state.loggedAction);
  function delteProject(id) {
    console.log(id);
    axios
      .delete("https://zucaarqback.onrender.com/project/" + id)
      .then((response) => {
        console.log("objeto eliminardo");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="containerProject">
      <h1 className="title">{title}</h1>
      <img className="imagenProject" src={img} alt="Project Description" />
      <p className="description">{description}</p>

      {Log ? (
        <button className="buttonDelete" onClick={() => delteProject(id)}>
          ELIMINAR PUBLICACION
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
