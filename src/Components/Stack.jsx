import React from 'react';
import {ReactComponent as Circle} from '../images/circle.svg';
import techStackData from '../data/techstackdata';
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

const Stack = () => {
    return (
    <motion.section
        className="stack"
        variants={sectionVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{duration: 0.3}}>
        <div className="stack-background">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1.5}}
            className="top-circle-wrapper">
                <Circle />
            </motion.div>
            <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1.5}}className="bottom-circle-wrapper">
                <Circle />
            </motion.div>
        </div>
        <div className="stack-info">
            <h1 className="heading">
                Tech Stack
            </h1>
            <div className="stack-description">
                As a designer and coder, I have experience with multiple front-end and back-end technologies, including semantic HTML, React, and Node.js. I also value my collaborative tools including Git and Figma.
            </div>
            <div className="stack-lists">
                { techStackData.map((data, i) => (
                    <div className="list-wrapper">
                        <h4> {data.title} </h4>
                        <ul>
                            {data.technologies.map((t) => (<li> {t} </li> ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </motion.section>
    )
}

export default Stack;
