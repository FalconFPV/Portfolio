import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useProjects } from "../../Constants";
import { useTranslation } from "react-i18next";
import CardRousel from "../About/CertCardRousel";

function Projects() {
   const projects = useProjects(); // Obtén los proyectos con traducción
   const { t } = useTranslation();

   return (
      <Container fluid className="project-section">
         <div
            dangerouslySetInnerHTML={{
               __html: t("works_title"),
            }}
         />
         <div
            dangerouslySetInnerHTML={{
               __html: t("works_desc"),
            }}
         />
         <Row
            className="project-cards-row"
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "flex-start",
               flexWrap: "wrap", // Mantener los elementos en la misma línea
            }}
         >
            {projects.map((project, index) => (
               <Col
                  key={index}
                  md="2"
                  className="project-cards-container"
                  style={{
                     minWidth: "500px",
                     display: "flex",
                  }} 
               >
                  <ProjectCard
                     imgPath={project.image}
                     images={project.images}
                     isBlog={false}
                     title={project.name}
                     description={project.description}
                  />
               </Col>
            ))}
         </Row>
      </Container>
   );
}

export default Projects;
