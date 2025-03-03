import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
   const [selectedProject, setSelectedProject] = useState(null);
   const [isCarouselVisible, setIsCarouselVisible] = useState(false);

   // Controlar la aparición del carrusel con animación
   useEffect(() => {
      if (selectedProject) {
         setTimeout(() => setIsCarouselVisible(true), 10); // Agregar una pequeña demora antes de mostrarlo
      } else {
         setIsCarouselVisible(false); // Ocultar inmediatamente cuando no hay proyecto seleccionado
      }
   }, [selectedProject]);

   return (
      <Container fluid className="project-section">
         <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
         </h1>
         <p style={{ color: "white", marginInline: "2vh" }}>
            Here are a few projects I've worked on recently. Want to see more? Email me.
         </p>
         <Row
            className="project-cards-row"
            style={{
               display: "flex",
               justifyContent: selectedProject ? "flex-start" : "center",
               alignItems: "flex-start",
               flexWrap: "wrap", // Mantener los elementos en la misma línea
            }}
         >
            {PROJECTS.map((project, index) => (
               <Col
                  key={index}
                  md={selectedProject ? 5 : 2}
                  className="project-cards-container"
                  style={{
                     minWidth: "500px",
                     display:
                        selectedProject && selectedProject !== project
                           ? "none"
                           : "flex",
                  }} // Ocultar las demás tarjetas cuando una está seleccionada
               >
                  <ProjectCard
                     imgPath={project.image}
                     images={project.images}
                     isBlog={false}
                     title={project.name}
                     description={project.description}
                     isSelected={selectedProject === project}
                  />
               </Col>
            ))}
         </Row>
      </Container>
   );
}

export default Projects;
