import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  //this hook for menu when we use responsive
  const headerShadow = useHeaderShadow();
  //custom  hook for the light shadow if we scrool the it will show shadow






  //to handle click outside of sidebar on mobile

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      //hidden and show are states that are define in motion .js
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}

      //true means animation for once and false again and again
      style={{boxShadow: headerShadow}}


    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Ravikant</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          // like we are passing props
        >
          <li><a href="#experties">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91  6398596316</p>
            <BiPhoneCall size={"40px"} />
            {/* its an icon */}
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
          //if its true then it will make false if its false then it will make true
        >
          <BiMenuAltRight size={30} />
          {/* its an menu icon */}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
