import React from "react";
import { Formik } from "formik";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/profile.css";
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
const FormikEditeProfile = ({ description, title, img, id }) => {
  return (
    <Formik
      initialValues={{ title: title, description: description, id: id }}
      onSubmit={async (values, { setSubmitting }) => {
        let edition = { description: values.description, title: values.title };

        await axios
          .patch("https://zucaarqback.onrender.com/profile/" + id, edition)

          .then((response) => {
            window.location.href = "/profile";
          })

          .catch((error) => {
            console.log(error);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Control
            className="titleProfile"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <div className="cardProfile">
{/*     <Image className="imagenProfile" src={img} fluid />*/}
            <textarea
              className="textProfileEdite"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />

            {isSubmitting ? (
              <div className="spinner">
                <p>"Cargando Proyecto... Esto puede demorar unos segundos"</p>
                <BarLoader color="#36d7b7" height={2} width={90} />
              </div>
            ) : (
              <div className="ContainerButton">
                <Button variant="success" type="submit">
                  Aceptar
                </Button>
                <Button
                  variant="dark"
                  onClick={() => (window.location.href = "/profile")}
                >
                  Volver
                </Button>{" "}
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikEditeProfile;
