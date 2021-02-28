import React from 'react';
import { ReactComponent as Shapes } from '../images/shapes.svg';
import { motion } from 'framer-motion';
import Social from './Social';

const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}
const sectionVariants = {
    initial: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0}
}

const Homepage = () => {
    return (
    <motion.section
        className="homepage"
        variants={sectionVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{duration: 0.3}}>
        <div className="homepage-background">
          <div className="shapes-wrapper">
            <Shapes />
          </div>
        </div>
        <div className="bio">
          <h1 className="heading bio-heading">Hi, I'm Peter Smith</h1>
          <p className="bio-text">I'm a full-stack web developer and UX/UI designer based out of Kansas City, MO. I can switch between front and back end development based on a wide range of requirements and time parameters. I'm currently open to freelancing and would love to help you get started on your next project.</p>
          <div className="social">
            <Social />
          </div>
        </div>
      </motion.section>
    )
}


export default Homepage;
