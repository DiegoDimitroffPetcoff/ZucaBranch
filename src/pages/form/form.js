import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import "../../css/login.css";
import Nav from "../nav";

const FormLogin = () => (
  <div>
    <Nav></Nav>
    <div className="containerLogin">
      <h1>Subir Contenido /Proyecto</h1>
      <Formik
        initialValues={{ name: "", file: null, description: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("description", values.description);
          formData.append("file", values.file);

          await axios.post(
            `https://zucaarqback.onrender.com/project`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          window.location.href = "../projectlist";
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
          setFieldValue,
        }) => (
          <Form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="formContainer">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="titleForm"
                onBlur={handleBlur}
                value={values.name}
                placeholder="Titulo Del Projecto"
              />

              <input
                type="text"
                name="description"
                onChange={handleChange}
                className="description"
                onBlur={handleBlur}
                value={values.description}
                placeholder="Descripcion del proyecto"
              />

              <input
                type="file"
                name="file"
                className="fileButton"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
              />
              {errors.file && touched.file && errors.file}

              <button
                className="loginButton"
                type="submit"
                to="/projectlist"
                disabled={isSubmitting}
              >
                Subir Projecto
              </button>
              {isSubmitting ? (
                <p className="isSubmitting project">
                  "Cargando Proyecto... Esto puede demorar unos segundos"
                </p>
              ) : (
                ""
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>{" "}
  </div>
);

export default FormLogin;
