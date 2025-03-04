import React, { useRef } from "react";
import { FaEye } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Estilo de la tarjeta de certificación
const Card = styled.div`
   background-color: var(--imp-background-color);
   border-radius: 20px;
   padding: 20px;
   margin: 20px;
   width: 330px;
   height: 430px;
   text-align: center;
   box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171) !important;
   opacity: 1; /* Comienza invisible */
`;

// Estilo para la imagen de la certificación
const Image = styled.img`
   width: 280px !important;
   height: 170px !important;
   object-fit: cover;
   margin-bottom: 15px;
   border-radius: 20px;
`;

// Estilo para el nombre de la certificación
const Name = styled.h3`
   margin-bottom: 15px;
   font-size: 20px;
   color: var(--imp-text-color);
`;

// Estilo para la descripción de la certificación
const Description = styled.p`
   font-size: 16px;
   margin-bottom: 25px;
   color: #fff;
`;

// Componente CertificationCard
const CertificationCard = ({ name, img, desc, url, delay }) => {
   const cardRef = useRef(null);

   // Comprobar si hay link (url no es "none")
   const hasLink = url !== "none";

   return (
      <Card
         ref={cardRef}
         className="skill-card"
         delay={delay}
         hasLink={hasLink}
      >
         <div>
            <Image src={img} alt={name} />
            <div className="cert-text">
               <Name>{name}</Name>
               <Description>{desc}</Description>
               {url !== "none" && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                     <FaEye />
                     See certificate
                  </a>
               )}
            </div>
         </div>
      </Card>
   );
};

export default CertificationCard;
