import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import {
   AiOutlineUser,
   AiOutlineDeploymentUnit,
   AiOutlineFundProjectionScreen,
   AiOutlineMail,
   AiOutlineHome
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
   const { t, i18n } = useTranslation();
   const [expand, updateExpanded] = useState(false);
   const [navColour, updateNavbar] = useState(false);
   const [activeNav, setActiveNav] = useState("");
   const [language, setLanguage] = useState("es"); // Estado para la bandera (español por defecto)
   const location = useLocation();

   useEffect(() => {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
         setLanguage(storedLanguage);
         i18n.changeLanguage(storedLanguage);
      }
      const scrollHandler = () => {
         if (window.scrollY >= 20) {
            updateNavbar(true);
         } else {
            updateNavbar(false);
         }

         // Define section positions
         const sections = ["about", "skills", "projects"];
         let currentSection = "";

         for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (
               section &&
               window.scrollY + window.innerHeight / 2 >= section.offsetTop
            ) {
               currentSection = sections[i];
               break;
            }
         }

         setActiveNav(currentSection);
      };

      window.addEventListener("scroll", scrollHandler);

      // Cleanup the event listener on unmount
      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   }, []);

   const handleNavClick = (sectionId) => {
      setActiveNav(sectionId);
      updateExpanded(false);
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
   };

   const toggleLanguage = () => {
      setLanguage((prevLanguage) => {
         const newLanguage = prevLanguage === "es" ? "en" : "es";
         i18n.changeLanguage(newLanguage);
         localStorage.setItem("selectedLanguage", newLanguage);
         return newLanguage;
      });
   };

   const isResumePage = location.pathname === "/resume";

   return (
      <Navbar
         expanded={expand}
         fixed="top"
         expand="xl"
         className={navColour ? "sticky" : "navbar"}
      >
         <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
               updateExpanded(expand ? false : "expanded");
            }}
         >
            <span></span>
            <span></span>
            <span></span>
         </Navbar.Toggle>
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Item>
                  <Nav.Link
                     onClick={toggleLanguage}
                     style={{ cursor: "pointer" }}
                     title={
                        language === "es"
                           ? "Cambiar a inglés"
                           : "Switch to Spanish"
                     }
                  >
                     <div className="lang-container">
                        <span>{language === "es" ? "ES |" : "EN |"} </span>
                        <Flag
                           code={language === "es" ? "es" : "gb"}
                           className="lang-flag" // Texto dinámico
                           alt="Language flag"
                        />
                     </div>
                  </Nav.Link>
               </Nav.Item>
               {/* Botón de inicio (solo visible en /resume) */}
               {isResumePage && (
                  <Nav.Item>
                     <Nav.Link
                        as={NavLink}
                        to="/"
                        onClick={() => {
                           updateExpanded(false);
                        }}
                     >
                        <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                        {t("home")}
                     </Nav.Link>
                  </Nav.Item>
               )}
               {/* Resto de los enlaces (no visibles en /resume) */}
               {!isResumePage && (
                  <>
                     <Nav.Item>
                        <Nav.Link
                           href="#"
                           onClick={(e) => {
                              e.preventDefault();
                              handleNavClick("about");
                           }}
                           className={activeNav === "about" ? "act" : ""}
                        >
                           <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                           {t("about")}
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           href="#"
                           onClick={(e) => {
                              e.preventDefault();
                              handleNavClick("skills");
                           }}
                           className={activeNav === "skills" ? "act" : ""}
                        >
                           <AiOutlineDeploymentUnit
                              style={{ marginBottom: "2px" }}
                           />{" "}
                           {t("skills")}
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           href="#"
                           onClick={(e) => {
                              e.preventDefault();
                              handleNavClick("projects");
                           }}
                           className={activeNav === "projects" ? "act" : ""}
                        >
                           <AiOutlineFundProjectionScreen
                              style={{ marginBottom: "2px" }}
                           />{" "}
                           {t("projects")}
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           as={NavLink}
                           to="/resume"
                           onClick={(e) => {
                              handleNavClick("resume");
                           }}
                           className={activeNav === "resume" ? "active" : ""}
                        >
                           <CgFileDocument style={{ marginBottom: "2px" }} />{" "}
                           {t("resume")}
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item className="nav-contact-button">
                        <div className="nav-contact-button-container">
                           <Nav.Link
                              href="#"
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleNavClick("contact");
                              }}
                           >
                              <AiOutlineMail style={{ marginBottom: "2px" }} />{" "}
                              {t("contact")}
                           </Nav.Link>
                        </div>
                     </Nav.Item>
                  </>
               )}
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default NavBar;
