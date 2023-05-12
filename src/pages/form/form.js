import React, { useDebugValue } from "react";
import { Formik } from "formik";
import axios from "axios";
import '../../css/login.css'

const Form = () => (
  <div className="containerLogin">
    <h1>Login</h1>
    <Formik
      initialValues={{ name: "", password: "", file: ""}}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await axios.post(`https://zucaarqback.onrender.com/project`, {
          name: values.name,
          password: values.password,
          image: values.image
        });
        let userData = response.data
         console.log(JSON.stringify(response.data))
        console.log(JSON.stringify(userData))
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
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input
            type="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
          />

<input
            type="file"
            name="file"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
