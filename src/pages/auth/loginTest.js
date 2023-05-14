import "../../css/login.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGEARSE, DESLOGEARSE } from "../../reducers/actions";


import Cookies from "js-cookie";


const LoginTest = () => {


  const user = Cookies.get("userLogged");
  const userParse = JSON.parse(user)
  console.log(userParse.username);





  let log = useSelector((state) => state.loggedAction);
  const dispatch = useDispatch();
  return (
    <div className="containerLogin">
      <h1>{log ? "logeado" : "no logeado"}</h1>

      <button onClick={() => dispatch(LOGEARSE())}>LOGEARSE</button>
      <button onClick={() => dispatch(DESLOGEARSE())}>DESLOGEARSE</button>
    </div>
  );
};

export default LoginTest;
