import React from "react";
import {
   FaPaintBrush,
   FaBullhorn,
   FaChartLine,
   FaCode,
   FaBullseye,
   FaLifeRing,
   FaCamera,
   FaHelicopter,
} from "react-icons/fa";
// Importar iconos lenguajes
import CircularProgressBar from "./CircularProgressbar";
import ReactCert from "../../Assets/Certificates/react.png";
import GoogleCert from "../../Assets/Certificates/ganalytics.png";
import B2Cert from "../../Assets/Certificates/b2english.png";
import PauCert from "../../Assets/Certificates/pau.png";
import UocCert from "../../Assets/Certificates/uoc.png";
import { skills } from "../../Constants";
import CertCardRousel from "./CertCardRousel";
import HabCardRousel from "./HabCardRousel";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
   const { t } = useTranslation();

   const services = [
      {
         name: t("web_design"),
         icon: <FaPaintBrush />, // Ícono de diseño web
         desc: t("web_design_desc"),
      },
      {
         name: t("branding"),
         icon: <FaBullhorn />, // Ícono de branding
         desc: t("branding_desc"),
      },
      {
         name: t("analytics"),
         icon: <FaChartLine />, // Ícono de analytics
         desc: t("analytics_desc"),
      },
      {
         name: t("web_development"),
         icon: <FaCode />, // Ícono de desarrollo web
         desc: t("web_development_desc"),
      },
      {
         name: t("marketing"),
         icon: <FaBullseye />, // Ícono de marketing web
         desc: t("marketing_desc"),
      },
      {
         name: t("support"),
         icon: <FaLifeRing />, // Ícono de soporte
         desc: t("support_desc"),
      },
      {
         name: t("video_editing"),
         icon: <FaCamera />, // Ícono de fotografía
         desc: t("video_editing_desc"),
      },
      {
         name: t("drone_pilot"),
         icon: <FaHelicopter />, // Ícono de fotografía
         desc: t("drone_pilot_desc"),
      },
   ];

   const certifications = [
      {
         name: t("react_cert"),
         img: ReactCert,
         desc: t("react_cert_desc"),
         url: "https://openwebinars.net/cert/EbAH",
      },
      {
         name: t("google_cert"),
         img: GoogleCert,
         desc: t("google_cert_desc"),
         url: "https://skillshop.credential.net/af561d09-2002-4e04-a582-1b3523780970",
      },
      {
         name: t("b2_cert"),
         img: B2Cert,
         desc: t("b2_cert_desc"),
         url: "none",
      },
      {
         name: t("pau_cert"),
         img: PauCert,
         desc: t("pau_cert_desc"),
         url: "https://paucasesnovescifp.cat/?page_id=8586",
      },
      {
         name: t("uoc_cert"),
         img: UocCert,
         desc: t("uoc_cert_desc"),
         url: "https://www.uoc.edu/es/estudios/formacion-continua/curso-profesionalizador-analitica-web-monitorizacion-posicionamiento-marketing-buscadores",
      },
   ];

   return (
      <div className="skills-hab-cert-container">
         <div className="tecskills-container">
            <h1>{t("tech_skills")}</h1>
            <div
               className="skills"
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
               }}
            >
               {skills.map((skill, index) => (
                  <CircularProgressBar
                     key={index}
                     percentage={skill.percentage}
                     experience={skill.experience}
                     text={skill.name}
                     Component={skill.Component}
                  />
               ))}
            </div>
         </div>

         <div className="cert-hab-container">
            <div className="frame-hab-container">
               <div
                  className="habilities"
                  data-aos="fade-up"
                  data-aos-duration="2000"
               >
                  <h1>{t("soft_skills")}</h1>
                  <div className="hab-container">
                     <HabCardRousel services={services} />
                  </div>
               </div>
            </div>
            <div
               className="certifications"
               data-aos="fade-up"
               data-aos-duration="2000"
            >
               <h1>{t("certificatitons")}</h1>
               <div className="cert-container">
                  <CertCardRousel cert={certifications} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SkillsSection;
