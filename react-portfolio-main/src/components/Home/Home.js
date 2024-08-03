import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/banner_joancompany.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
     <section>
        <Container fluid className="home-section" id="home">
           <Container className="home-content">
              <Row>
                 <Col md={6} className="home-header">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                       Hi There!{" "}
                       <span className="wave" role="img" aria-labelledby="wave">
                          👋🏻
                       </span>
                    </h1>

                    <h1 className="heading-name">
                       I'M
                       <strong className="main-name">
                          {" "}
                          Joan Company Pastor
                       </strong>
                    </h1>

                    <p className="heading-description blockquote">
                       I am 21-year-old web
                       developer from Alcudia, Mallorca. I am currently working
                       as a Frontend Web Developer at Juniper Travel Technology,
                       where I focus on creating and managing projects for new
                       clients. Driven by a constant need to learn and grow, I
                       actively pursue further education and training to stay at
                       the forefront of web development.
                    </p>
                    <p className="heading-description blockquote">
                       I am committed to continuous learning and professional
                       growth, always staying up-to-date with industry trends.
                       My excellent communication skills and collaborative
                       spirit make me a valuable team player, dedicated to
                       delivering high-quality results and contributing
                       positively to any project.
                    </p>

                    <div className="heading-type">
                       <TypeWriter />
                    </div>
                 </Col>

                 <Col md={5}>
                    <img src={myImg} className="profile-pic" alt="avatar" />
                 </Col>
              </Row>
           </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Container>
              <Row>
                 <Col md={12} className="home-about-social">
                    <h1>Get in Touch</h1>
                    <p>
                       {" "}
                       Whether you want to get in touch, or talk about a project
                       collaboration.
                       <br />
                       <strong>Feel free to connect with me</strong>
                    </p>
                    <SocialMedia />
                 </Col>
              </Row>
           </Container>
        </Container>
     </section>
  );
}

export default Home;
