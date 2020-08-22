import React, { useEffect } from "react";

function hero({ mainHeading, subHeading, mainPara }) {
  return (
    <div className="herocontainer">
      <div className="hero">
        <img src={require("../Images/broImage.png")} className="hero__image" />
        <div className="main__text">
          <h2 className="main__heading">{mainHeading}</h2>
          <p className="sub__heading">{subHeading}</p>
          <p className="main__para">{mainPara}</p>
          <a href="#" className="hero__cta">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default hero;
