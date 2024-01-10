import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Nuestra Mision</h2>
              <h5 className="description">
              Somos una productora audiovisual especializada en produccion, 
              publicidad, documentales y agencia de marketing exclusivamente para canales de televisión líderes, 
              como NATIONAL GEOGRAPHIC CHANNEL, TELEMUNDO, HOLA TV, CINECANAL, STAR, STAR LIFE, 
              FX, FX MOVIES, SONY, AXN, COMEDY CENTRAL, PARAMOUNT, E! ENTERTAINMENT, FOX, 
              VENEVISION, entre otros. Nuestro objetivo es llevar tus ideas al 
              siguiente nivel y cautivar a tu audiencia como nunca antes. Descubre cómo BONS GROUP
               puede ser tu aliado estratégico en el mundo del entretenimiento televisivo.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
