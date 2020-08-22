import React, { useEffect } from "react";
import "./App.css";
import "./main.scss";
import Header from "./Components/Header";
import Hero from "./Components/hero";
import gsap, { Back } from "gsap";
function App() {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const tl = gsap.timeline();
    tl.from(".navbar", 1.1, {
      y: -150,
      ease: Back.easeOut,
    });
    tl.from(".herocontainer", 2.1, {
      opacity: 0,
      y: -250,
      ease: Back.easeOut,
    });

    tl.from(".hero__image", 2.1, {
      opacity: 0,
      x: -250,
      ease: Back.easeOut,
    });

    tl.from(".main__heading", 0.5, {
      opacity: 0,
      y: 70,
      ease: "Power3.easeOut",
      stagger: {
        amount: 0.4,
      },
    });
    tl.from(".sub__heading", 1.0, {
      opacity: 0,
      y: 70,
      ease: "Power3.easeOut",
      stagger: {
        amount: 0.4,
      },
    });
    tl.from(".main__para", 1.4, {
      opacity: 0,
      y: 70,
      ease: "Power3.easeOut",
      stagger: {
        amount: 0.4,
      },
    });
    tl.from(".hero__cta", 1.7, {
      opacity: 0,
      x: 70,
      ease: "Power3.easeOut",
      stagger: {
        amount: 0.4,
      },
    });
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Hero
        mainHeading="Presidential Initiative"
        subHeading="for Artificial Intelligence & Computing"
        mainPara="The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution."
      />
    </React.Fragment>
  );
}

export default App;
