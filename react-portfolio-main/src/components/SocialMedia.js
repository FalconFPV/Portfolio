import React from "react";
import pdf from "../Assets/cvv2.pdf";
import { FaUser } from "react-icons/fa";
import {
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
     <ul className="home-about-social-links">
        <li className="social-icons">
           <a
              href="https://github.com/FalconFPV"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
           >
              <AiFillGithub className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              href="https://www.linkedin.com/in/joan-company-pastor-b5aa6b27b/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
           >
              <FaLinkedinIn className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              href="mailto:joanfpv@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
           >
              <MdEmail className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              className="icon-colour  home-social-icons"
              href={pdf}
              target="_blank"
              rel="noreferrer"
           >
              <FaUser className="social-icon" />
           </a>
        </li>
     </ul>
  );
}
export default SocialMedia;
