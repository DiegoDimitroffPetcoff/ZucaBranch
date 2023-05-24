import React from "react";
import { Formik } from "formik";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormikEditeProfile = ({ description, title, img }) => (
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
          <Form.Control
            className="textProfile"
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />

          <Button variant="success" type="submit" disabled={isSubmitting}>
            Aceptar
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);

export default FormikEditeProfile;
