import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdfES from "../../Assets/Joan Company - PortfolioES.pdf";
import pdfEN from "../../Assets/Joan Company - PortfolioEN.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeOld() {
   const { t } = useTranslation();
   const getStoredLanguage = () =>
      localStorage.getItem("selectedLanguage") || "es";

   const [width, setWidth] = useState(window.innerWidth);
   const [language, setLanguage] = useState(getStoredLanguage());
   const [currentPdf, setCurrentPdf] = useState(
      language === "es" ? pdfES : pdfEN
   );

   useEffect(() => {
      const updateLanguage = () => {
         const newLanguage = getStoredLanguage();
         if (newLanguage !== language) {
            setLanguage(newLanguage);
            setCurrentPdf(newLanguage === "es" ? pdfES : pdfEN);
         }
      };

      const storageListener = (event) => {
         if (event.key === "selectedLanguage") {
            updateLanguage();
         }
      };

      window.addEventListener("storage", storageListener);
      updateLanguage();

      return () => window.removeEventListener("storage", storageListener);
   }, [language]);

   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   // Escalar el PDF usando vw
   const getScale = () => width / 1000; // 1vw = 1% del ancho de la pantalla

   const printPdf = () => {
      const pdfWindow = window.open(currentPdf);
      if (pdfWindow) {
         pdfWindow.onload = () => pdfWindow.print();
      }
   };

   return (
      <div>
         <Container fluid className="resume-section">
            <Row className="resume" style={{ justifyContent: "center" }}>
               <Document file={currentPdf}>
                  <Page pageNumber={1} scale={getScale()} />
               </Document>
            </Row>

            <Row style={{ justifyContent: "center", marginTop: "20px" }}>
               <Button id="download-selector" onClick={printPdf}>
                  <FaDownload />
                  {t("downloadpdf")}
               </Button>
            </Row>
         </Container>
      </div>
   );
}

export default ResumeOld;
