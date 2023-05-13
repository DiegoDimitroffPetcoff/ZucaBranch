import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "../../css/login.css";
import { Navigate } from "react-router-dom";



const Form = () => (

  <div className="containerLogin">
    <h1>Subir Contenido /Proyecto</h1>
    <Formik
      initialValues={{ name: "", file: null, description: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("file", values.file);

        const response = await axios.post(
          `https://zucaarqback.onrender.com/project`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        let userData = response.data;
        let navigate = Navigate()
 navigate('/projectlist')
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
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="titleForm"
            onBlur={handleBlur}
            value={values.name}
          />

          <input
            type="text"
            name="description"
            onChange={handleChange}
            className="description"
            onBlur={handleBlur}
            value={values.description}
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
          <button className="loginButton" type="submit"  to="/projectlist"disabled={isSubmitting}>
          
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
