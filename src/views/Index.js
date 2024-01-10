import React, {useEffect, useRef} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Experiencia from './index-sections/Experiencia.js'


function Index() {
  const portfolio = useRef(null)
  const quienes = useRef(null)

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar portfolio={portfolio} quienes={quienes} />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <CompleteExamples />
          <NucleoIcons quienes={quienes}/>
          {/* <Experiencia quienes={quienes}/> */}
          <Carousel portfolio={portfolio} />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
