import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import healthcare from "../assets/projects/Healthcare.jpg";
import food1 from "../assets/projects/Food1.png";
import food2 from "../assets/projects/Food2.png";
import food3 from "../assets/projects/Food3.png";
import job from "../assets/projects/Job.png";
import social from "../assets/projects/Social.png";
import travel from "../assets/projects/Travel.png";
import yoga from "../assets/projects/Yogaapp.png";
import yacht from "../assets/projects/Yacht.jpg";
import dnl from "../assets/projects/DNL.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Healthcare App"
              description=""
              ghLink="https://github.com/secretstardev/flutter_healthcare_app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food3}
              isBlog={false}
              title="Food Delivery App"
              description=""
              ghLink="https://github.com/secretstardev/Food-Delivery-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yacht}
              isBlog={false}
              title="Yacht Booking App"
              description=""
              // demoLink="https://play.google.com/store/apps/details?id=com.getmycharter_user"
              ghLink="https://github.com/secretstardev/yacht_booking_app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media App"
              description=""
              ghLink="https://github.com/secretstardev/Social-Media-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoga}
              isBlog={false}
              title="Yoga App"
              description=""
              ghLink="https://github.com/secretstardev/Yoga-Training-App-UI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnl}
              isBlog={false}
              title="Dating App (Date Night Live)"
              description=""
              ghLink="https://github.com/secretstardev/DateNightLive"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects



{/* 

import healthcare from "../assets/projects/Healthcare.jpg";
import food1 from "../assets/projects/Food1.png";
import food2 from "../assets/projects/Food2.png";
import job from "../assets/projects/Job.png";
import social from "../assets/projects/Social.png";
import travel from "../assets/projects/Travel.png";
import yoga from "../assets/projects/Yoga.png";


<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Healthcare App"
              description=""
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food1}
              isBlog={false}
              title="Food Delivery App"
              description=""
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Traveling App"
              description=""
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media App"
              description=""
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoga}
              isBlog={false}
              title="Yoga App"
              description=""
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job Marketplace App"
              description=""
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>
        </Row> */}