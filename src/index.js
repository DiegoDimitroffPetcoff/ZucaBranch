import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//REDUX & REDUX PERSIST
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./reducers/reduxPersist/reduxPersist";
import { persistor } from "./reducers/reduxPersist/reduxPersist";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </PersistGate>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
