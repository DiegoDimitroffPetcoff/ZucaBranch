import React, { useState, useEffect } from "react";
import Nav from "../nav";
import "../../css/contact.css";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaMapMarker,
} from "react-icons/fa";

import { AxiosGetAll } from "../../utils/axios";
import FormikEditeContact from "../../utils/formikEditeContact";

export function Contact() {
  let Log = useSelector((state) => state.loggedAction);
  const [Edit, setEdit] = useState(false);
  const [data, setData] = useState([
    {
      email: "Cargando...",
      adress: "Cargando...",
      facebook: "Cargando...",
      instagram: "Cargando...",
      cellphone: "Cargando...",
    },
  ]);

  useEffect(() => {
    let url = "https://zucaarqback.onrender.com/contact";

    AxiosGetAll(url)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function editeDescription(params) {
    setEdit(!Edit);
  }

  return (
    <div>
      <Nav></Nav>

      {!Edit ? (
        <div className="containerContact">
   
          <div className="cardContact">
            <a
              className="textContact"
              rel="noreferrer"
              target="_blank"
              href={"tel:" + data[0].cellphoneText}
            >
              <FaPhone /> {data[0].cellphone}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a
              href={"mailto:" + data[0].emailText}
              target="_blank"
              className="textContact"
              rel="noreferrer"
            >
              <FaEnvelope /> {data[0].email}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a
              href={data[0].facebookText}
              target="_blank"
              className="textContact"
              rel="noreferrer"
            >
              <FaFacebook /> {data[0].facebook}
            </a>
          </div>{" "}
          <div className="cardContact">
            <a
              href={data[0].instagramText}
              target="_blank"
              className="textContact"
              rel="noreferrer"
            >
              <FaInstagram /> {data[0].instagram}
            </a>
          </div>{" "}
          <div className="cardContact">
            <p>
              <FaMapMarker /> {data[0].adress}
            </p>
          </div>{" "}
        </div>
      ) : (
        <FormikEditeContact
          id={data[0]._id}
          email={data[0].email}
          adress={data[0].adress}
          facebook={data[0].facebook}
          instagram={data[0].instagram}
          cellphone={data[0].cellphone}
          emailText={data[0].emailText}
          adressText={data[0].adressText}
          facebookText={data[0].facebookText}
          instagramText={data[0].instagramText}
          cellphoneText={data[0].cellphoneText}
        ></FormikEditeContact>
      )}

      {Log && !Edit && data[0].title !== "Cargando.." ? (
        <div className="ContainerButton">
          <Button variant="success" onClick={() => editeDescription()}>
            EDITAR PUBLICACION
          </Button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Contact;
