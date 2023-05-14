import "../../css/login.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGEARSE } from "../../reducers/actions";

const LoginTest = () => {
  let log = useSelector((state) => state.loggedAction);
  const dispatch = useDispatch();
  return (
    <div className="containerLogin">
      <h1>{log ? "logeado" : "no logeado"}</h1>

      <button onClick={() => dispatch(LOGEARSE())}>LOGEARSE</button>
    </div>
  );
};

export default LoginTest;
