import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons({quienes}) {
  return (
    <>
      <div className="section section-nucleo-icons" ref={quienes}>
        <Container>
          <Row>
          <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Experiencia que Transforma Ideas en Éxito.</h2>
              <h5 className="description">
              Con décadas de experiencia en la producción de contenido audiovisual
              de alta calidad, BONS GROUP se destaca en el mercado televisivo.
              Hemos colaborado con canales de renombre internacional, incluyendo NatGeo, 
              Telemundo, Cinecanal, y muchas otras marcas líderes. Nuestro historial de 
              éxitos es el testimonio de nuestro compromiso con la innovación y la excelencia
              en cada proyecto que abordamos. Confiar en BONS GROUP significa confiar en la 
              experiencia que garantiza resultados sobresalientes.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
