import React, { useState, useEffect } from "react";
import Nav from "../nav";
import "../../css/profile.css";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";

export function Profile() {
  let Log = useSelector((state) => state.loggedAction);
  function editeDescription(params) {
    console.log("editeDescription");
  }
  return (
    <div>
      <Nav></Nav>
      <div className="containerProfile">
        <h1 className="titleProfile">Flavia Zucarelli</h1>
        <div className="cardProfile">
          <Image
            className="imagenProfile"
            src="http://res.cloudinary.com/dqkez9vsw/image/upload/v1684547348/zucaArq/x6xzcbbwxftgjenr7aiy.jpg"
            fluid
          />
          ;'
          <p className="textProfile">
            Había una vez una joven llamada Flavia Zucarelli, apasionada por el
            arte y la creatividad desde que era una niña. Siempre mostró un
            talento innato para el diseño y la arquitectura, y soñaba con
            construir edificios que inspiraran a las personas y cambiaran el
            mundo. A medida que crecía, su pasión por la arquitectura se hizo
            más fuerte, y decidió que se convertiría en la arquitecta más
            importante de todo el mundo. Flavia se dedicó intensamente a su
            educación. Estudió en las mejores escuelas de arquitectura y se
            destacó por su talento y dedicación. Su enfoque y su visión única la
            hicieron sobresalir entre sus compañeros. A medida que avanzaba en
            su carrera, Flavia comenzó a ganar reconocimiento y premios por sus
            innovadores diseños y su enfoque sostenible. Con el tiempo, la fama
            de Flavia se extendió más allá de las fronteras de su país natal.
            Recibió encargos de proyectos importantes en todo el mundo, desde
            rascacielos impresionantes hasta museos vanguardistas. Cada uno de
            sus diseños era una obra maestra en sí misma, fusionando la
            funcionalidad con la estética de una manera única. Flavia se ganó el
            respeto y la admiración de sus colegas y clientes por igual. Su
            capacidad para comprender las necesidades de las personas y
            plasmarlas en sus diseños la convirtió en una figura revolucionaria
            en el campo de la arquitectura. Además, siempre se aseguraba de que
            sus proyectos fueran sostenibles y respetuosos con el medio
            ambiente, lo que le valió el reconocimiento como una líder en
            arquitectura verde. A medida que su reputación crecía, Flavia se
            convirtió en una defensora de la igualdad de género en el campo de
            la arquitectura. Utilizó su posición para promover y apoyar a
            mujeres arquitectas jóvenes, alentándolas a perseguir sus sueños y
            superar los obstáculos que enfrentaban en la industria. Con el
            tiempo, los diseños de Flavia comenzaron a transformar el paisaje
            urbano de las ciudades de todo el mundo. Sus edificios icónicos se
            convirtieron en destinos turísticos y puntos de referencia para las
            personas de todas las edades. Flavia demostró que la arquitectura no
            solo era funcional, sino que también podía ser una forma de arte que
            afectara positivamente la vida de las personas. Flavia Zucarelli se
            convirtió en la arquitecta más importante de todo el mundo no solo
            por sus diseños excepcionales, sino también por su pasión por hacer
            del mundo un lugar mejor a través de la arquitectura. Su legado
            perduró mucho más allá de su tiempo, y su influencia en el campo de
            la arquitectura continúa inspirando a las generaciones futuras a
            seguir sus pasos y dejar su huella en el mundo.
          </p>
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
