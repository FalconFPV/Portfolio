import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

// Funcion para añadir .clicked a la clase project-card para que se muestre el back de la carta
function handleClick(e) {
  e.currentTarget.classList.toggle("clicked");
}

function ProjectCards(props) {
  return (
     <Card className="project-card-view" onClick={handleClick}>
        <div className="front-card">
           <Card.Img variant="top" src={props.imgPath} alt="card-img" />
           <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                 {props.title}
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                 {props.description}
              </Card.Text>
           </Card.Body>
        </div>
        <div className="back-card">
           <h5>Technology/ies used:</h5>
           <div className="tech-img">
              {props.images.map((img, index) => (
                 <img key={index} src={img} alt={`tech-img-${index}`} />
              ))}{" "}
           </div>
        </div>
     </Card>
  );
}
export default ProjectCards;
