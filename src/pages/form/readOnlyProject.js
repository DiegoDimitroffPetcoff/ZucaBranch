import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../css/login.css";
import Image from "react-bootstrap/Image";

import { useFormik } from "formik";

const Edite = ({ description, img, title, id }) => {
  const [project, setProject] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: title,
      description: description,
      id: id,
    },
    onSubmit: (values) => {
      const patchData = async () => {
        try {
          const response = await axios.patch(
            "https://zucaarqback.onrender.com/project/" + id,
            values
          );
          window.location.href = "/projectlist";
        } catch (error) {
          console.log(error);
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
        {/*  <img className="imagenProjectEdite" src={img} alt="Project Description" />*/}
        <Image src={img} fluid />
        <Form.Control
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <Button variant="primary" type="submit">
          Editar
        </Button>
        <Button variant="success" onClick={back}>
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default Edite;
