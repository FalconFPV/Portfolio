import React, { useRef } from "react";
import { FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Componente CertificationCard
const CertificationCard = ({ name, img, desc, url, delay }) => {
   const cardRef = useRef(null);
   const { t } = useTranslation();
   const hasLink = url !== "none";

   return (
      <div ref={cardRef} className="skill-card" delay={delay} hasLink={hasLink}>
         <div>
            <img src={img} alt={name} />
            <div className="cert-text">
               <h3>{name}</h3>
               <p>{desc}</p>
               {url !== "none" && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                     <FaEye />
                     {t("see_cert")}
                  </a>
               )}
            </div>
         </div>
      </div>
   );
};

export default CertificationCard;
