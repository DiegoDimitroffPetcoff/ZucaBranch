import { Formik } from "formik";
import axios from "axios";
import "../../css/login.css";
//import { useHistory } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { LOGEARSE } from "../../reducers/actions";

import Cookies from "js-cookie";

const Login = () => {
  let Log = useSelector((state) => state.loggedAction);
  const dispatch = useDispatch();
//let user = Cookies.get("userLogged");
//let userParse = JSON.parse(user)
//let name = userParse.username
//console.log(name);

//const history = useHistory()
  return (
    <div className="containerLogin">
      <h1>Login</h1>
      <Formik
        initialValues={{ name: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          let response = await axios.post(`https://backendlogin.onrender.com/login/`, {
            username: values.name,
            password: values.password,
          });

          if (response.data !== "Username Or Password incorrect") {
            console.log("USUARIO LOGEADO");
            Cookies.set("userLogged", JSON.stringify(response.data));
            
            dispatch(LOGEARSE());
            //history.push("/");
          } else {
            console.log("no LOGEADO");
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
            <button
              className="loginButton"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>

    </div>
  );
};

export default Login;
