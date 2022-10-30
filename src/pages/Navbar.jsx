import React from "react";
import { Link, useNavigate } from "react-router-dom";
import hijaziLogo from "../../src/assets/hijaziLogo.png";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = ({ handleClick }) => {
  let nav = useNavigate();

  return (
    <div className="cover-img">
      <div className="navbar">
        <nav>
          <div className="img-container">
            <img
              className="logoNav"
              src={hijaziLogo}
              onClick={() => {
                nav("/landing");
              }}
            />
          </div>
          <div className="links">
            <ul>
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="">Projects</Link>
              </li>

              <li className="">
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2.5 }}
      >
        <div className="intro">
          <div className="title">Technical Hijazi</div>
          <div className="info">
            Build Your Dream Property With
            <br />A Touch Of Perfection
          </div>
        </div>
        <div className="btn">
          <button className="btn-projects" onClick={handleClick}>
            Projects
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
