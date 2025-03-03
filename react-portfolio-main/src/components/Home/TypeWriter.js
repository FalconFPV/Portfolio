import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function TypeWriter() {
   const { t } = useTranslation();
  return (
     <Typewriter
        options={{
           strings: [
              t("frontend"),
              t("seosem"),
              t("dronepilot"),
           ],
           autoStart: true,
           loop: true,
           deleteSpeed: 50,
        }}
     />
  );
}

export default TypeWriter;
