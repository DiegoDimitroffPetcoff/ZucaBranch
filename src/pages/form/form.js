import React from "react";
import { Formik, Form } from "formik";
import { AxiosPost } from "../../utils/axios";
import "../../css/login.css";
import Nav from "../nav";
import BarLoader from "react-spinners/BarLoader";
import Button from "react-bootstrap/Button";

const FormLogin = () => (
  <div>
    <Nav></Nav>
    <div className="containerForm">
      <h1>Subir Contenido /Proyecto</h1>
      <Formik
        initialValues={{ name: "", file: null, description: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true); //
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("description", values.description);

          //    formData.append("file", values.file);

          values.file.forEach((file, index) => {
            formData.append(`file${index}`, file);
          });

          let url = "https://zucaarqback.onrender.com/project/";


          try {
            await AxiosPost(url, formData);
            setSubmitting(false);
            window.location.href = "/projectlist";
          } catch (error) {
            console.log("HA SUCEDIDO UN ERROR:" + error);
            setSubmitting(false);
          }
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
              <textarea
                type="text"
                name="name"
                onChange={handleChange}
                className="titleForm"
                onBlur={handleBlur}
                value={values.name}
                placeholder="Titulo Del Projecto"
              />

              <textarea
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
                  const files = Array.from(event.currentTarget.files);

                  // setFieldValue("file", event.currentTarget.files[0]);
                  setFieldValue("file", files);
                }}
                onBlur={handleBlur}
                multiple
              />
              {errors.file && touched.file && errors.file}
              {isSubmitting ? (
                <div className="spinner">
                
                  <BarLoader color="#36d7b7" height={2} width={90} />
                  <h1>CARGANDO... paciencia mi FLLLLaca</h1>
                </div>
              ) : (
                <Button className="loginButton" type="submit">
                  Subir Projecto
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>{" "}
  </div>
);

export default FormLogin;
