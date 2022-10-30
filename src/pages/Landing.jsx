import React, { useRef } from "react";
import ChooseUs from "./ChooseUs";
import DisplayPics from "./DisplayPics";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Landing() {
  const refer = useRef(null);

  const handleClick = () => {
    refer.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <ChooseUs />
      <DisplayPics refer={refer} />
      <Footer />
    </div>
  );
}

export default Landing;
