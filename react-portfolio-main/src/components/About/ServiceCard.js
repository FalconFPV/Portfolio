import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

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

const ServiceCard = ({ name, icon, desc, delay }) => {
   const cardRef = useRef(null);

   return (
      <div ref={cardRef} className="skill-card" delay={delay}>
         <IconContainer>
            <Icon>{icon}</Icon>
         </IconContainer>
         <h3>{name}</h3>
         <p>{desc}</p>
      </div>
   );
};

export default ServiceCard;
