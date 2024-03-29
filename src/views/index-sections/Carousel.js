import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/bons/UNO.png"),
    altText: "RUI - Republica Dominicana",
    caption: "RUI - Republica Dominicana"
  },
  {
    src: require("assets/img/bons/DOS.png"),
    altText: "RUI - Republica Dominicana",
    caption: "RUI - Republica Dominicana"
  },
  {
    src: require("assets/img/bons/TRES.png"),
    altText: "RUI - Republica Dominicana",
    caption: "RUI - Republica Dominicana"
  },
  {
    src: require("assets/img/bons/CUATRO.png"),
    altText: "RUI - Republica Dominicana",
    caption: "RUI - Republica Dominicana"
  },
  {
    src: require("assets/img/bons/CINCO.png"),
    altText: "RUI - Republica Dominicana",
    caption: "RUI - Republica Dominicana"
  }
];

function CarouselSection({portfolio}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel" ref={portfolio}>
        <Container className="text-center">
          <div className="title">
          <h2 className="title">
          Transformá Ideas en Éxito.
          </h2>
              <h5 className="description" style={{padding: '20px', paddingRight: '50px', paddingLeft: '50px'}}>
              Con décadas de experiencia en la producción de contenido audiovisual
              de alta calidad, BONS GROUP se destaca en el mercado televisivo.
              Hemos colaborado con canales de renombre internacional, incluyendo NatGeo, 
              Telemundo, Cinecanal, y muchas otras marcas líderes. Nuestro historial de 
              éxitos es el testimonio de nuestro compromiso con la innovación y la excelencia
              en cada proyecto que abordamos. Confiar en BONS GROUP significa confiar en la 
              experiencia que garantiza resultados sobresalientes.
              </h5>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
