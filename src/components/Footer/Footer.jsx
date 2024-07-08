import React, { useEffect, useState } from "react";
import "./style.css";

const Footer = () => {
  /* window.screen.width */

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function updateScreenSize() {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="footer">
      <p>
        Screen width is: {screenSize.width} px, height is: {screenSize.height}{" "}
        px
      </p>
    </div>
  );
};

export default Footer;
