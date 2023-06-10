import "./project.css";
import { AxiosDelete, AxiosDeleteImage } from "../../../utils/axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";

export default function ProjectComponent({ description, img, title, id }) {
  let Log = useSelector((state) => state.loggedAction);
  const [checked, setChecked] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  function handleCheckboxChange(imageUrl) {
    //CON ESTO AGREGO selectedImagens con las public ID
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter((image) => image !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
    setChecked(selectedImages.length >= 0);
  }

  function showConfirmationDeleteImagen(data, id) {
    const response = window.confirm(
      "Estas seguro de que querer eliminar las imagenes seleccionadas?"
    );
    if (response) {
      deleteImage(data, id);
    }
  }

  async function deleteImage(selectedImages, id) {
    try {
      let url = "https://zucaarqback.onrender.com/image/"; 

     
      await AxiosDeleteImage(url, id, selectedImages)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function showConfirmationDelete(id) {
    const response = window.confirm(
      "Estas seguro de que querer eliminar el Proyecto?"
    );
    if (response) {
      deleteProject(id);

    }
  }

  function deleteProject(id) {
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

      {Array.isArray(img) &&
        (img.length !== 1 ? (
          <Carousel>
            {img.map((image, index) => (
              <Carousel.Item interval={9000} key={index}>
                <img
                  className="imagenProject"
                  src={image.url}
                  alt={index}
                  onClick={() => window.open(image.url, "_blank")}
                />
{     Log ?           <input
                  className="checkbox"
                  name={image}
                  type="checkbox"
                  checked={selectedImages.includes(image)}
                  onChange={() => {
                    handleCheckboxChange(image);
                  }}
                />: null}
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          img.map((image, index) => (
            <div>
              <img
                className="imagenProject"
                src={image.url}
                alt={index}
                key={index}
                onClick={() => window.open(image.url, "_blank")}
              />
             {Log ? <input
                type="checkbox"
                name={image}
                checked={selectedImages.includes(image)}
                onChange={() => {
                  handleCheckboxChange(image);
                }}
              />: null}
            </div>
          ))
        ))}

      <p className="descriptionProject">{description}</p>

      {Log && checked && selectedImages.length !== 0 ? (
        <Button
          bsStyle="info"
          onClick={() => showConfirmationDeleteImagen(selectedImages, id)}
        >
          ELIMINAR IMAGENES SELECCIONADAS
        </Button>
      ) : (
        ""
      )}

      {Log ? (
        <div>
          <Button variant="danger" onClick={() => showConfirmationDelete(id)}>
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
