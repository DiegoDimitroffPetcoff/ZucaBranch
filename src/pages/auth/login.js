
import { Formik } from "formik";
import axios from "axios";
import "../../css/login.css";

const Login = () => (
  <div className="containerLogin">
    <h1>Login</h1>
    <Formik
      initialValues={{ name: "", password: "" }}
      onSubmit={async (values, { setSubmitting }) => {
   await axios.post(`http://localhost:3000/login/`, {
          username: values.name,
          password: values.password,
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
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && errors.password}
          <button className="loginButton" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;
