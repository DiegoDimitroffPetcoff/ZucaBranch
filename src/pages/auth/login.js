import { Formik } from "formik";
import axios from "axios";
import "../../css/login.css";
//import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { LOGEARSE } from "../../reducers/actions";
import BarLoader from "react-spinners/BarLoader";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "../nav";

import Cookies from "js-cookie";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Nav></Nav>

      <div className="containerLogin">
        <h1>Login</h1>
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            let response = await axios.post(
              `https://backendlogin.onrender.com/login/`,
              {
                username: values.name,
                password: values.password,
              }
            );

            if (response.data !== "Username Or Password incorrect") {
              console.log("USUARIO LOGEADO");
              Cookies.set("userLogged", JSON.stringify(response.data), { expires: 2 });
              dispatch(LOGEARSE());
           
              window.location.href = "./dashboard";
            } else {
              console.log("no LOGEADO");
              alert("Password o Usuario incorrecto");
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
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="formContainer">
                <Form.Label>Usuario</Form.Label>

                <input
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Label>Password</Form.Label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.password && touched.password && errors.password}

                <Button className="loginButton" type="submit">
                  Logearse
                </Button>
              </div>
              {isSubmitting ? (
                <div className="spinner">
                  <p className="isSubmitting">
                    "Cargando... Esto puede demorar unos segundos"
                  </p>
                  <BarLoader color="#36d7b7" height={2} width={90} />
                </div>
              ) : (
                ""
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
