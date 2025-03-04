import React from "react";
import ReactCardCarousel from "react-card-carousel";
import CertificationCard from "./CertificationCard";


const CertCardRousel = ({ cert }) => {
   if (!cert || cert.length === 0) {
      return <div>No certifications available.</div>; // O cualquier mensaje que desees mostrar
   }
   return (
      <div className="cardrousel-container">
         <ReactCardCarousel autoplay={true} autoplay_speed={6000}>
            {cert.map((certification, index) => (
               <CertificationCard
                  key={index}
                  name={certification.name}
                  img={certification.img}
                  desc={certification.desc}
                  url={certification.url}
                  delay={`${index * 0.1}s`}
               />
            ))}
         </ReactCardCarousel>
      </div>
   );
};

export default CertCardRousel;