import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

import "./Footer.css";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1.5 } };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="footer">
      <motion.div
        ref={ref}
        initial="hidden"
        className="sqaure"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 4 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        }}
      >
        <div className="footerIcons">
          <p>
            <FaFacebook />
          </p>
          <p>
            <BsTwitter />
          </p>
          <p>
            <IoLogoWhatsapp />
          </p>
          <p>
            <AiFillInstagram />
          </p>
        </div>

        <p className="footerText">
          © 2022 Technical Hijazi. All Rights Reserved
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
