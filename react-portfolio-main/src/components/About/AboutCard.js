import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
     <Card className="quote-card-view">
        <Card.Body>
           <blockquote className="blockquote mb-0">
              <h1>About me</h1>
              <p>
                 Hi Everyone, I am{" "}
                 <span className="purple">Joan Company Pastor </span>
                 from <span className="purple"> Alcudia, Mallorca.</span>
              </p>
              <p className="heading-description blockquote">
                 I am 21-year-old web developer from Alcudia, Mallorca. I am
                 currently working as a Frontend Web Developer at Juniper Travel
                 Technology, where I focus on creating and managing projects for
                 new clients. Driven by a constant need to learn and grow, I
                 actively pursue further education and training to stay at the
                 forefront of web development.
              </p>
              <p className="heading-description blockquote">
                 I am committed to continuous learning and professional growth,
                 always staying up-to-date with industry trends. My excellent
                 communication skills and collaborative spirit make me a
                 valuable team player, dedicated to delivering high-quality
                 results and contributing positively to any project.
              </p>
              {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul> */}
           </blockquote>
        </Card.Body>
     </Card>
  );
}

export default AboutCard;
