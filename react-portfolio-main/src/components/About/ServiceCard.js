import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

// Definir la animación de entrada
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Definir una animación de pulso para cuando la tarjeta está visible
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Card = styled.div`
   background-color: var(--imp-background-color);
   border-radius: 20px;
   padding: 20px;
   margin: 20px;
   width: 330px;
   height: 430px;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171) !important;
   opacity: 1; /* Comienza invisible */
`;

const IconContainer = styled.div`
   background-color: hsla(0, 0%, 13%, 0.587);
   border-radius: 50%;
   width: 100px;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 40px;
`;

const Icon = styled.div`
   font-size: 50px;
   color: var(--imp-text-color);
`;

const Name = styled.h3`
   margin-bottom: 15px;
   font-size: 24px;
   color: var(--imp-text-color);
`;

const Description = styled.p`
   font-size: 16px;
   font-weight: 800;
   color: #fff;
`;

const ServiceCard = ({ name, icon, desc, delay }) => {
   const cardRef = useRef(null);

   return (
      <Card ref={cardRef} className="skill-card" delay={delay}>
         <IconContainer>
            <Icon>{icon}</Icon>
         </IconContainer>
         <Name>{name}</Name>
         <Description>{desc}</Description>
      </Card>
   );
};

export default ServiceCard;
