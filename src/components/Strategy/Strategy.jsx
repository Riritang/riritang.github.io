import React from "react";
import { sliderSettings, strategies } from "../../utils/data";
import css from "./Strategy.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Strategy = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="testimonials"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">CRM Strategies</span>
            <p style={{ marginTop: "2rem" }}>
            Focus on online CRM channels
            </p>
            <p>Investigate their strategies throughout the customer journey</p>
            <a href="https://island-cub-3da.notion.site/b53a6018f2b844ab84fb1a04b76d0798?v=b29baadab6594a49b21b718c4629027b"
                  target="_blank"
                  rel="noopener noreferrer">
              <span className="secondaryText">Explore More Strategies</span>
            </a>
        </div>

        <div className={` ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {strategies.map((trategy) => {
              return (
                <a
                  href={`${trategy.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={trategy.id}
                >
                  <div className={`flexCenter ${css.comment}`} >
                    <img src={trategy.src}></img>
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Strategy;
