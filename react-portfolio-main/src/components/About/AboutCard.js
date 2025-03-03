import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import myImg from "../../Assets/banner_joancompany.png";
import { useTranslation } from "react-i18next";

function AboutCard() {
   const containerRef = useRef(null);
   const textRef = useRef(null);
   const { t } = useTranslation();

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target
                     .querySelector(".profile-pic")
                     .classList.add("visible");
                  entry.target
                     .querySelector(".pic-shadow")
                     .classList.add("visible");
                  entry.target
                     .querySelector(".about-text-container")
                     .classList.add("visible");
               } else {
                  entry.target
                     .querySelector(".profile-pic")
                     .classList.remove("visible");
                  entry.target
                     .querySelector(".pic-shadow")
                     .classList.remove("visible");
                  entry.target
                     .querySelector(".about-text-container")
                     .classList.remove("visible");
               }
            });
         },
         { threshold: 0.1 }
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => {
         if (containerRef.current) {
            observer.unobserve(containerRef.current);
         }
      };
   }, []);

   return (
      <Card className="quote-card-view">
         <Card.Body>
            <div className="about-card-container" ref={containerRef}>
               <div ref={textRef} className="about-text-container">
                  <blockquote className="blockquote mb-0">
                     <h1 id="about-title">{t("aboutme.title")}</h1>
                     <div
                        dangerouslySetInnerHTML={{
                           __html: t("aboutme.description"),
                        }}
                     />
                  </blockquote>
               </div>
               <div className="profile-pic-container">
                  <div className="pic-shadow"></div>
                  <img src={myImg} className="profile-pic" alt="avatar" />
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}

export default AboutCard;
