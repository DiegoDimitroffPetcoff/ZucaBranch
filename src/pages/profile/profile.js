import React, { useState, useEffect } from "react";
import Nav from "../nav";
import "../../css/profile.css";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { AxiosGetAll } from "../../utils/axios";

export function Profile() {
  let Log = useSelector((state) => state.loggedAction);

  const [data, setData] = useState([
    {
      imagen: [{ url: "Cargando.." }],
      description: "Cargando..",
      title: "Cargando..",
    },
  ]);

  useEffect(() => {
    let url = "https://zucaarqback.onrender.com/profile";

    AxiosGetAll(url)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function editeDescription(params) {}
  return (
    <div>
      <Nav></Nav>
      <div className="containerProfile">
        <h1 className="titleProfile">{data[0].title}</h1>
        <div className="cardProfile">
          <Image className="imagenProfile" src={data[0].image?.url} fluid />
          ;'
          <p className="textProfile">{data[0].description}</p>
        </div>
        {Log ? (
          <div>
            <Button variant="success" onClick={() => editeDescription()}>
              EDITAR PUBLICACION
            </Button>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Profile;
