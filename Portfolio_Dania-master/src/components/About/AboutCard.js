import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Resume from "../Resume/ResumeNew"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Dania </span>
            from <span className="purple"> Jordan.</span>
            <br /> I am a full_stack programmer 
       
            <br />
            Additionally, I took a six month scholarship in orange coding academy to improve my self  
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
        <Resume/>
          </p>
        </blockquote>
     
            
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
