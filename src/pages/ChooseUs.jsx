import React, { useEffect } from "react";
import "./ChooseUs.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function ChooseUs() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -70 },
            visible,
          }}
        >
          <div className="chooseTitle">WHY CHOOSE US</div>
        </motion.div>
        <table>
          <tr>
            <td>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -70 },
                  visible,
                }}
              >
                <div>
                  <div className="subtitle">
                    <span>01 &nbsp;</span>The Best Price{" "}
                  </div>
                  <br />
                  <div>
                    A project is an activity to meet the creation of
                    <br /> a unique product of service and thus activities{" "}
                    <br />
                    that are under taken to accomodate outline.
                  </div>
                </div>
              </motion.div>
            </td>
            <td>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -70 },
                  visible,
                }}
              >
                <div>
                  <div className="subtitle">
                    <span>02 &nbsp;</span>Daily Consultancy{" "}
                  </div>
                  <br />
                  <div>
                    One of the most common competency
                    <br /> based on questions for any sequiring some <br />
                    project that make client for easy consulting <br />
                    about the property.
                  </div>
                </div>
              </motion.div>
            </td>
          </tr>
          <tr>
            <td>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -70 },
                  visible,
                }}
              >
                <div>
                  <div className="subtitle">
                    <span>03 &nbsp;</span>Custom Design{" "}
                  </div>
                  <br />
                  <div>
                    A project is defined as a sequence of tasks <br />
                    that must be completed to attain a certain <br /> outcome
                    according to the project with your
                    <br /> preffered design.
                  </div>
                </div>
              </motion.div>
            </td>
            <td>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -70 },
                  visible,
                }}
              >
                <div>
                  <div className="subtitle">
                    <span>04 &nbsp;</span>Premium Quality
                  </div>
                  <br />
                  <div>
                    Make sure that all we use is premium quality <br />
                    and taking no longer than deadlines. This will <br />
                    get the ball rolling and improve your <br />
                    confidence.
                  </div>
                </div>
              </motion.div>
            </td>
          </tr>
        </table>
      </motion.article>
    </div>
  );
}

export default ChooseUs;
