import React, { useEffect } from "react";
import "./DisplayPics.css";
import pic2 from "../../src/assets/pic2.jpg";
import pic4 from "../../src/assets/pic4.jpg";
import pic5 from "../../src/assets/pic5.jpg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DisplayPics({refer}) {
  const visible = { opacity: 1, y: 0, transition: { duration: 1.5 } };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="displayPics" ref={refer}>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.9 } } }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          className="sqaure"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -70 },
            visible,
          }}
        >
          <div className="picHeader">
            <div className="picsTitle">PROJECTS</div>
            <div className="viewAll">
              <Link to="/projects">
                {" "}
                <span>View All &#8594;</span>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="picsContainer">
          <motion.div
              ref={ref}
              initial="hidden"
              className="sqaure"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 180 },
                visible,
              }}
          >
            <div className="pic">
              <img src={pic2} alt="pic2" className="pic2" />

              <div className="con-text">
                <h2>Project 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut!{" "}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
             ref={ref}
             initial="hidden"
             className="sqaure"
             animate={controls}
             variants={{
               hidden: { opacity: 0, y: -180 },
               visible,
             }}
          >
            <div className="pic">
              <img src={pic4} alt="pic4" className="pic4" />

              <div className="con-text">
                <h2>Project 2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut!{" "}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            className="sqaure"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 180 },
              visible,
            }}
          >
            <div className="pic">
              <img src={pic5} alt="pic5" className="pic5" />
              <div className="con-text">
                <h2>Project 3</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut!{" "}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

export default DisplayPics;
