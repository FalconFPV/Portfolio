import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import { SKILLS } from "../../Constants";

function About() {
  return (
     <Container fluid className="about-section">
      <Row className="about-row">
        {/* IMATGE */}
        <Row className="img-about"></Row>
           {/* CARTA DE ABOUT */}
           <Aboutcard />
        </Row>

        <Row className="skill-tools-wrapper"></Row>
     </Container>
  );
}

export default About;
