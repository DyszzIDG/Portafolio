import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { LanguageContext } from "../../context/LanguageContext";
import proyecto1 from "../../Assets/Projects/proyecto1.png";
import proyecto2 from "../../Assets/Projects/proyecto2.png";
import proyecto3 from "../../Assets/Projects/proyecto3.png";
import proyecto4 from "../../Assets/Projects/proyecto4.png";
import proyecto5 from "../../Assets/Projects/proyecto5.png";
import proyecto6 from "../../Assets/Projects/proyecto6.png";
import proximamente from "../../Assets/Projects/proximamente.png";
// Podés agregar más como proyecto3, proyecto4, etc.


function Projects() {
  const { texts } = useContext(LanguageContext);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {texts.projectsHeading} <strong className="purple">{texts.projectsHighlight}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {texts.projectsIntro}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyecto1}
              isBlog={false}
              title={texts.project1Title}
              description={texts.project1Desc}
              ghLink="https://github.com/DyszzIDG"
             // demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyecto2}
              isBlog={false}
              title={texts.project2Title}
              description={texts.project2Desc}
              ghLink="https://github.com/DyszzIDG/Satelite"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyecto3}
              isBlog={false}
              title={texts.project3Title}
              description={texts.project3Desc}
              ghLink="https://github.com/DyszzIDG/Proyecto-.Net"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyecto4}
              isBlog={false}
              title={texts.project4Title}
              description={texts.project4Desc}
              ghLink="https://github.com/DyszzIDG/Sistemas-PHP"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyecto5}
              isBlog={false}
              title={texts.project5Title}
              description={texts.project5Desc}
              ghLink="https://github.com/DyszzIDG/dyszzrp"
              // demoLink si tenés
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyecto6}
              isBlog={false}
              title={texts.project6Title}
              description={texts.project6Desc}
              ghLink="https://github.com/DyszzIDG"
              // demoLink si tenés
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proximamente}
              isBlog={false}
              title={texts.project7Title}
              description={texts.project7Desc}
              ghLink="https://github.com/DyszzIDG"
              // demoLink si tenés
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proximamente}
              isBlog={false}
              title={texts.project8Title}
              description={texts.project8Desc}
              ghLink="https://github.com/DyszzIDG"
              // demoLink si tenés
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proximamente}
              isBlog={false}
              title={texts.project9Title}
              description={texts.project9Desc}
              ghLink="https://github.com/DyszzIDG"
              // demoLink si tenés
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
