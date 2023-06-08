import React, { useState, useEffect } from "react";
import Nav from "../nav";
import "../../css/profile.css";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { AxiosGetAll } from "../../utils/axios";
import FormikEditeProfile from "../../utils/formikEditeProfile";


export function Profile() {
  let Log = useSelector((state) => state.loggedAction);
  const [Edit, setEdit] = useState(false);
  const [data, setData] = useState([
    {
      image: [{ url: "Cargando.." }],
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

  function editeDescription(params) {
    setEdit(!Edit);
  }

  return (
    <div>
      <Nav></Nav>

      <div className="containerProfile">
        {!Edit ? (
          <div>
            {" "}
            <h1 className="titleProfile">{data[0].title}</h1>
            <div className="cardProfile">
     { /*        <Image className="imagenProfile" src={data[0].image?.url} fluid />*/}
              <p className="textProfile">{data[0].description}</p>
            </div>{" "}
          </div>
        ) : (
          <FormikEditeProfile
            description={data[0].description}
            title={data[0].title}
            id={data[0]._id}
          //  img={data[0].image?.url}
          ></FormikEditeProfile>
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
    </div>
  );
}

export default Profile;
