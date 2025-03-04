import React from "react";
import ReactCardCarousel from "react-card-carousel";
import ServiceCard from "./ServiceCard";

const HabCardRousel = ({ services }) => {
   if (!services || services.length === 0) {
      return <div>No habilities available.</div>; // O cualquier mensaje que desees mostrar
   }
   return (
      <div className="cardrousel-container">
         <ReactCardCarousel autoplay={true} autoplay_speed={6000}>
            {services.map((service, index) => (
               <ServiceCard
                  key={index}
                  name={service.name}
                  icon={service.icon}
                  desc={service.desc}
                  delay={`${index * 0.1}s`}
               />
            ))}
         </ReactCardCarousel>
      </div>
   );
};

export default HabCardRousel;
