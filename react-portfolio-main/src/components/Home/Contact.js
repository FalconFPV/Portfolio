import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SocialMedia from "../SocialMedia";

const Contact = () => {
   const { t } = useTranslation();

   return (
      <Container fluid className="home-about-section" id="contact">
         <Container className="home-social-container">
            <Row data-aos="zoom-in" data-aos-duration="1000">
               <Col md={12} className="home-about-social">
                  <div
                     dangerouslySetInnerHTML={{
                        __html: t("contact_me"),
                     }}
                  />
                  <SocialMedia />
               </Col>
            </Row>
         </Container>
         <div className="svg-curve-footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
               <path
                  fill="var(--imp-background-dark-color)"
                  fill-opacity="1"
                  d="M0,0L120,16C240,32,480,64,720,64C960,64,1200,32,1320,16L1440,0V220H0Z"
               ></path>
            </svg>
         </div>
      </Container>
   );
};

export default Contact;
