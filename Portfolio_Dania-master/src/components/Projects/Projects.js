import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import test from "../../Assets/testproject.PNG";
import golden from "../../Assets/golden.png";
import hotel from "../../Assets/hotel.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Resume from "../Resume/ResumeNew"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
    
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      

     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel reservation"
              description="website for hotel reservetion, full stack with PERN stack postgres,react,nodejs and express js"
              ghLink="https://github.com/C2-G5/reservation_project_"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Test for jobs application"
              description="website to take  Employment test,using java script,html,and local storage 
"
              ghLink="https://github.com/zarqaC2T2/Evaluating-Candidates"
              
            />
          </Col>

    

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golden}
              isBlog={false}
              title="Jewelry e-commerce"
              description="website to sell jewelry,using react js,tailwand css"
              ghLink="https://github.com/jewelry-power/Golden-A"
           
            />
          </Col>
        <Resume/>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
