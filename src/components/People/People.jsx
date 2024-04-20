import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
    //importing staggerChildren from motion.js
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="people"></a>

      <motion.div
      variants={footerVariants}
      //we are going to use same variants for footer and it is essentialy made for footer but i realised its useful here too
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            {/* giving inner css */}
            I made my image that was in accordance with my profession and field of work
          </p>
          <p>The process of submitting an appilication was quite cosy</p>
        </div>


         {/* carousal */}
        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {/* ....slidersettings these are just props that we have to send in slider component   in data.js  */}


            {/* comments are coming from dummy data */}
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default People;
