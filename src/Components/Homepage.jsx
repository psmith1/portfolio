import React from 'react';
import { ReactComponent as Shapes } from '../images/shapes.svg';
import { motion } from 'framer-motion';
import Social from './Social';
import ReactTypingEffect from 'react-typing-effect';
import { useEffect } from 'react';

// const variants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0 }
// }
const sectionVariants = {
    initial: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0}
}

const Homepage = ({title, ...rest}) => {
    useEffect(() => {
      title = document.title;
    });
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
          <ReactTypingEffect className="heading bio-heading typingeffect" text={['Hi, I\'m Peter Smith']} speed={90} eraseDelay={50000}/>
          <p className="bio-text">I'm UX/UI designer based out of Kansas City, MO, and I like to make cool things. I'm currently seeking to be part of a professional creative team.</p>
          <div className="social">
            <Social />
          </div>
        </div>
      </motion.section>
    )
}


export default Homepage;
