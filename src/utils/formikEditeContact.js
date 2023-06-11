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
  emailText,
  adressText,
  facebookText,
  instagramText,
  cellphoneText,
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
        id: id,
        emailText: emailText,
        adressText: adressText,
        facebookText: facebookText,
        instagramText: instagramText,
        cellphoneText: cellphoneText,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        let edition = {
          email: values.email,
          adress: values.adress,
          facebook: values.facebook,
          instagram: values.instagram,
          cellphone: values.cellphone,
          emailText: values.emailText,
          adressText: values.adressText,
          facebookText: values.facebookText,
          instagramText: values.instagramText,
          cellphoneText: values.cellphoneText,
        };
        console.log(edition);

        let url = "https://zucaback2.fly.dev/contact/";
  

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
          <h1>
            {" "}
            <FaPhone />
            Telefono (Visual en la Web)
          </h1>
          <Form.Control
            type="number"
            name="cellphone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cellphone}
          />
          <h4>
            {" "}
            <FaPhone />
            Telefono al que se enviara el mensaje
          </h4>
          <Form.Control
            type="number"
            name="cellphoneText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cellphoneText}
          />
          <h1>
            {" "}
            <FaEnvelope /> Email (Visual en la Web)
          </h1>
          <Form.Control
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <h4>
            {" "}
            <FaEnvelope /> Email Al que Se enviara el mensaje:
          </h4>
          <Form.Control
            type="text"
            name="emailText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emailText}
          />

          <h1>
            {" "}
            <FaFacebook /> Facebook (Visual en la Web)
          </h1>
          <Form.Control
            type="text"
            name="facebook"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.facebook}
          />

          <h4>
            {" "}
            <FaFacebook /> Incorporar direccion de Facebook a la que el usuario
            sera redireccionado
          </h4>
          <Form.Control
            type="text"
            name="facebookText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.facebookText}
          />

          <h1>
            {" "}
            <FaInstagram />
            Instagram (Visual en la Web)
          </h1>
          <Form.Control
            type="text"
            name="instagram"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.instagram}
          />
          <h4>
            {" "}
            <FaInstagram />
            Incorporar direccion de Instagram a la que el usuario sera
            redireccionado
          </h4>
          <Form.Control
            type="text"
            name="instagramText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.instagramText}
          />

          <h1>
            {" "}
            <FaMapMarker /> Direccion (Visual en la Web){" "}
          </h1>
          <Form.Control
            type="text"
            name="adress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.adress}
          />

          {/*
<h4>
            {" "}
            <FaMapMarker /> DireccionTTTT{" "}
          </h4>
          <Form.Control
            type="text"
            name="adressText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.adressText}
          />*/}

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
