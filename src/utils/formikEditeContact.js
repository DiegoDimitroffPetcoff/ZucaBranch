import React from "react";
import { Formik } from "formik";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/contact.css";
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaMapMarker,
} from "react-icons/fa";
const FormikEditeContact = ({
  email,
  adress,
  facebook,
  instagram,
  cellphone,
  id,
}) => {


  return (
    <Formik
      initialValues={{
        email: email,
        adress: adress,
        facebook: facebook,
        instagram: instagram,
        cellphone: cellphone,
        id:id,
      }}
      onSubmit={async (values, { setSubmitting }) => {

        let edition = {
          email: values.email,
          adress: values.adress,
          facebook: values.facebook,
          instagram: values.instagram,
          cellphone: values.cellphone,
        };

        let url = "https://zucaarqback.onrender.com/contact";


        await axios
          .patch(url + id, edition)

          .then((response) => {
            window.location.href = "/contact";
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
        <h1> <FaEnvelope /> Email</h1>
          <Form.Control
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
<h1> <FaMapMarker /> Direccion </h1>
          <Form.Control
            type="text"
            name="adress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.adress}
          />
<h1> <FaFacebook /> Facebook</h1>
          <Form.Control
            type="text"
            name="facebook"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.facebook}
          />
<h1> <FaInstagram />Instagram</h1>
          <Form.Control
            type="text"
            name="instagram"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.instagram}
          />
<h1> <FaPhone />Telefono</h1>
          <Form.Control
            type="text"
            name="cellphone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cellphone}
          />

          <div className="cardProfile">
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
                  onClick={() => (window.location.href = "/contact")}
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

export default FormikEditeContact;
