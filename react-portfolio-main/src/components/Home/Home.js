import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Card from "react-bootstrap/Card";
import { FaArrowDown } from "react-icons/fa";
import Aurora from "./Aurora";
import Threads from "./Threads";

function Home() {
     useEffect(() => {
        // Cargar la API de IFrame de YouTube
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Configurar el reproductor de YouTube
        window.onYouTubeIframeAPIReady = () => {
           new window.YT.Player("player", {
              videoId: "s9n47lkKqVk", // Reemplaza con tu ID de video
              playerVars: {
                 autoplay: 1,
                 mute: 1,
                 start: 0,
                 end: 100, // 2 minutos
                 loop: 1,
                 playlist: "s9n47lkKqVk", // Reemplaza con tu ID de video para que funcione el loop
              },
              events: {
                 onReady: (event) => {
                    event.target.playVideo();
                 },
                 onStateChange: (event) => {
                    if (event.data === window.YT.PlayerState.ENDED) {
                       event.target.seekTo(0); // Reinicia el video al inicio
                    }
                 },
              },
           });
        };
     }, []);
  return (
     <section>
        <Container fluid className="home-section" id="home">
           <Row className="home-content">
              <Row className="home-row">
                 <div className="video-background">
                    <Aurora
                       colorStops={["#E9770C", "#E9770C", "#E9770C"]}
                       blend={0.5}
                       amplitude={0.6}
                       speed={0.5}
                    />
                 </div>
                 <div className="home-header">
                    <div className="home-first">
                       <h1 style={{ paddingBottom: 15 }} className="heading">
                          Hello!{" "}
                          <span
                             className="wave"
                             role="img"
                             aria-labelledby="wave"
                          >
                             👋🏻
                          </span>
                       </h1>

                       <h1 className="heading-name">
                          I'm
                          <strong className="main-name"> Joan Company</strong>
                       </h1>
                       <div className="heading-type">
                          <TypeWriter />
                       </div>
                       <div className="show-work" id="xl">
                          <a href="#about">
                             <span className="show-work-text">
                                View my work
                                <FaArrowDown style={{ marginLeft: "8px" }} />
                             </span>
                          </a>
                       </div>
                    </div>
                 </div>
                 <div className="show-work" id="xs">
                    <a href="#about">
                       <span className="show-work-text">
                          View my work
                          <FaArrowDown style={{ marginLeft: "8px" }} />
                       </span>
                    </a>
                 </div>
              </Row>
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Row className="about">
              <About />
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Row className="about" id="projects">
              <Card className="quote-card-view">
                 <Projects />
              </Card>
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Container className="home-social-container">
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
