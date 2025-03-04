import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

// Función para manejar el clic y alternar la clase 'clicked'
function handleClick(e, onClick, isClicked) {
   e.currentTarget.classList.toggle("clicked");
   if (onClick) onClick(isClicked); // Pasar si la tarjeta ya estaba seleccionada
}

function ProjectCards(props) {
   const isClicked = props.isSelected;
   const { t } = useTranslation();
   return (
      <Card
         className="project-card-view"
         onClick={(e) => handleClick(e, props.onClick, isClicked)}
      >
         <div className="front-card">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body className="project-card-body">
               <div className="project-info">
                  <Card.Title className="purple" style={{ fontWeight: "800" }}>
                     {props.title}
                  </Card.Title>
                  <Card.Text>{props.description}</Card.Text>
               </div>
               <h6>{t("technologies_used")}</h6>
               <div className="tech-img">
                  {props.images.map((img, index) => (
                     <img key={index} src={img} alt={`tech-img-${index}`} />
                  ))}
               </div>
            </Card.Body>
         </div>
      </Card>
   );
}

export default ProjectCards;
