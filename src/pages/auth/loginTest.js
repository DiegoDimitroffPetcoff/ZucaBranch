import "../../css/login.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, LOGEARSE, decrement } from "../../reducers/actions";

const LoginTest = () => {
  let counter = useSelector((state) => state.counter);
  let log = useSelector((state) => state.loggedAction);
  const dispatch = useDispatch()
  return (
    <div className="containerLogin">
      <h1>{counter}</h1>
      <h1>{log ? "logeado" : "no logeado"}</h1>



      <button onClick={()=> dispatch(increment())}>+</button>

      <button onClick={()=> dispatch(decrement())}>-</button>



      <button onClick={()=> dispatch(LOGEARSE())}>LOGEARSE</button>
    </div>
  );
};

export default LoginTest;
