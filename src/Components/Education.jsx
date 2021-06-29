import React from 'react';
import {ReactComponent as Circle} from '../images/circle.svg';
import educationData from '../data/educationdata';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';
import RouteChangeTracker from './RouteChangeTracker';

const trackingId = "G-WK39HEGN9M";
ReactGA.initialize(trackingId);
ReactGA.pageview('/education');

const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}
const sectionVariants = {
    initial: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0}
}

const Education = () => {
    return (
    <motion.section
        className="education"
        variants={sectionVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{duration: 0.3}}>
            <div className="education-background">
                <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 2.5}}
                className="semicircle-wrapper">
                    <Circle />
                </motion.div>
            </div>
            <div className="education-info">
                <h1 className="heading">
                    Education
                </h1>
                <div className="education-list">
                    { educationData.map((data, i) => (
                        <div className="list-wrapper">
                            <h4> {data.title} </h4>
                            <p> {data.location} </p>
                            <p> {data.date} </p>
                        </div>
                    ))}
                </div>
            </div>
            <RouteChangeTracker />
        </motion.section>
    )

}

export default Education;
