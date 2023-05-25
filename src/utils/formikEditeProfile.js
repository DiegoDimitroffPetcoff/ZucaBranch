import React from "react";
import { Formik } from "formik";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/profile.css";

const FormikEditeProfile = ({ description, title, img }) => {
  return (
    <Formik
      initialValues={{ title: title, description: description }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            <Image className="imagenProfile" src={img} fluid />
            <textarea
              className="textProfileEdite"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <div className="ContainerButton">
            <Button variant="success" type="submit" disabled={isSubmitting}>
              Aceptar
            </Button>
            <Button
              variant="dark"
              onClick={() => (window.location.href = "/profile")}
            >
              Volver
            </Button>{" "}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikEditeProfile;
