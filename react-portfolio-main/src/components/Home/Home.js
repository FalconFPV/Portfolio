import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Card from "react-bootstrap/Card";
import { FaArrowDown } from "react-icons/fa";
import Aurora from "./Aurora";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import SplitText from "./SplitText";

function Home() {
   const { t } = useTranslation();
   const [showText, setShowText] = useState(false);
     
     useEffect(() => {
        const timeout = setTimeout(() => {
           setShowText(true);
        }, 1200);

        return () => clearTimeout(timeout);
     }, []);
   
  return (
     <section className="home-section">
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
                          {t("im")}
                          <strong className="main-name"> {t("name")}</strong>
                       </h1>
                       <h1 className="heading-name">
                          {showText && (
                             <SplitText
                                text={t("slogan")}
                                className="text-2xl font-semibold text-center"
                                delay={40}
                                animationFrom={{
                                   opacity: 0,
                                   transform: "translate3d(0,50px,0)",
                                }}
                                animationTo={{
                                   opacity: 1,
                                   transform: "translate3d(0,0,0)",
                                }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                             />
                          )}
                       </h1>
                       <div className="heading-type">
                          <TypeWriter />
                       </div>
                       <div className="show-work" id="xl">
                          <a href="#about">
                             <span className="show-work-text">
                                {t("viewmywork")}
                                <FaArrowDown style={{ marginLeft: "8px" }} />
                             </span>
                          </a>
                       </div>
                    </div>
                 </div>
                 <div className="show-work" id="xs">
                    <a href="#about">
                       <span className="show-work-text">
                          {t("viewmywork")}
                          <FaArrowDown style={{ marginLeft: "8px" }} />
                       </span>
                    </a>
                 </div>
              </Row>
              <div className="svg-curve">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path
                       fill="#040404"
                       fill-opacity="1"
                       d="M0,160L120,144C240,128,480,96,720,96C960,96,1200,128,1320,144L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                    ></path>
                 </svg>
              </div>
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Row className="about">
              <About />
           </Row>
        </Container>
        <Container fluid className="home-about-section">
           <Row className="about" id="projects">
              <Card
                 className="quote-card-view"
                 data-aos="fade-up"
                 data-aos-duration="2000"
              >
                 <Projects />
              </Card>
           </Row>
        </Container>
        <Contact />
     </section>
  );
}

export default Home;
