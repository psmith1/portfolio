import React from 'react';
import Social from './Social';
import {ReactComponent as Circle} from '../images/circle.svg';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}
const sectionVariants = {
    initial: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0}
}

const Contact = () => {
    return (
    <motion.section
        className="contact"
        variants={sectionVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{duration: 0.3}}>
            <div className="contact-background">
                <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 2.5}}
                className="bottom-circle-wrapper">
                    <Circle />
                </motion.div>
            </div>
        <div className="contact-info">
            <h1 className="heading">
                Contact Me
            </h1>
            <p className="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2> E-mail me at <a href="mailto:petergbsmith@gmail.com">petergbsmith@gmail.com</a></h2>
            <Social />
        </div>
    </motion.section>
    )
}

export default Contact;
