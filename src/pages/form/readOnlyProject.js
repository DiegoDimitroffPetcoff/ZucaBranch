import React, { useState, useEffect } from "react";
import { AxiosEdite } from "../../utils/axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../css/login.css";
import Image from "react-bootstrap/Image";

import { useFormik } from "formik";

const Edite = ({ description, img, title, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: title,
      description: description,
      id: id,
    },
    onSubmit: (values) => {
      const patchData = async () => {
        try {
          
          setIsLoading(true); // Inicia la carga
          console.log("empieza la carga");
          console.log(isLoading);
          let url = "https://zucaarqback.onrender.com/project/";
          AxiosEdite(url, id, values);
          // window.location.href = "/projectlist";
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false); // Finaliza la carga
        }
      };
      patchData();
    },
  });

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      name: title,
      description: description,
      id: id,
    });
  }, [title, description]);

  function back() {
    window.location.href = "/projectlist";
  }

  return (
    <div className="containerProject">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">
          {" "}
          <Form.Control
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </h1>

        <Image src={img} fluid />
        <textarea
        className="textProfileEdite"
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        {!isLoading ? (
          <div>
            <Button variant="primary" type="submit">
              Aceptar
            </Button>
            <Button variant="success" onClick={back}>
              Volver
            </Button>
          </div>
        ) : (
          "cargando"
        )}
      </form>
    </div>
  );
};

export default Edite;
