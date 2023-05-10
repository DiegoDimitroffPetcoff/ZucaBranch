import React, { useState } from "react";
//import { Outlet, Link } from "react-router-dom";
import "./project.css";
import Nav from '../../nav'

export function Project1() {
  return (
    <div className="containerProject">
    <Nav></Nav>
      <h1 className="title">TITULO DEL TRABAJO</h1>
      
      <img
        className="imagenProject"
        src="http://res.cloudinary.com/dqkez9vsw/image/upload/v1683678163/zucaArq/hfownhrys3efitjwjiir.png"
        alt="Ecommerce Project"
      />
      <p className="description">
        Un proyecto corto de arquitectura podría ser el diseño de una pequeña
        casa de una sola planta, con una superficie aproximada de 80 metros
        cuadrados. El objetivo principal del proyecto sería crear un espacio
        cómodo y funcional para una familia pequeña. El proceso de diseño podría
        comenzar con un análisis detallado del terreno y su entorno, teniendo en
        cuenta la orientación solar, la topografía y las vistas panorámicas. A
        partir de esta información, se podrían establecer las principales
        directrices del diseño, como la ubicación de la casa en el terreno, la
        orientación de las ventanas y la disposición de los espacios interiores.
        Una vez definidas las directrices básicas, se podría comenzar con el
        diseño de la planta y los detalles arquitectónicos, como la altura de
        los techos, la disposición de las habitaciones, la distribución de los
        espacios comunes y la ubicación de las áreas de almacenamiento. El
        proyecto también debería incluir la selección de materiales y acabados,
        considerando aspectos como la durabilidad, el mantenimiento y la
        estética general de la casa. Por ejemplo, se podría optar por materiales
        naturales como la madera y la piedra, para crear un ambiente cálido y
        acogedor. Finalmente, se debería elaborar un conjunto de planos
        detallados que incluyan la planta, las elevaciones y las secciones
        transversales de la casa, así como un presupuesto detallado que permita
        estimar el costo total del proyecto. Este tipo de proyecto es un
        excelente ejercicio para arquitectos en formación o para aquellos que
        buscan desarrollar habilidades de diseño arquitectónico y aprender a
        trabajar con los requisitos específicos del cliente, el terreno y el
        entorno.
      </p>
    </div>
  );
}

export default Project1;
