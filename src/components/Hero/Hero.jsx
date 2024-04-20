import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

// for animation we will use motion .div
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        // you can take this container as if this is applied to the most parent element then the child elements are going to show animation in a specific one by one mannner if its not applied then the child will show very irrelevant behaviour so lets import it from motion.js
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >

        {/* upperelements */}
        <div className={css.upperElements}>

          {/* what is this variant ,i am saying make the element animation as fadein from the right with the animation type tween and delay of 0.2 sec and duration is going to be the one second */}
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Ravikant Sharma.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>
        </div>



        {/* person image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person2.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:ravikantsharma237mn@gmail.com">
          ravikantsharma237mn@gmail.com
        </a>
        {/* lowerElements */}
        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText"></div>

            {/* second child of experience */}
            <div className="secondaryText">
              <div>I design and develop Experiences</div>

              <br /> 
                
              <div> that make people's live simple </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED BY SOFTCON FOR</span>
            <span>C++ AND PYTHON</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
