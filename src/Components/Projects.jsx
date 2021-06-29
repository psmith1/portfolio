import React from 'react';
import projectData from '../data/projectdata';
import { ReactComponent as Multiwave } from '../images/multiwave.svg';
import ProjectLink from './ProjectLink';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';
import RouteChangeTracker from './RouteChangeTracker';

const trackingId = "G-WK39HEGN9M";
ReactGA.initialize(trackingId);

const sectionVariants = {
    initial: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0}
}

const Projects = () => {
    return (
        <motion.section
            className="projects"
            variants={sectionVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{duration: 0.3}}>
            <div className="projects-wrapper">
                <div className="projects-background">
                    <div className="multiwave-wrapper">
                        <Multiwave />
                    </div>
                </div>
                {projectData.map((data, i) => (
                    <div className="card">
                        <div className="card-content">
                            <h2 className="project-title">
                                {data.title}
                            </h2>
                            <p className="project-description">
                                {data.description}
                            </p>
                            {data.demo ? <ProjectLink url={data.demo} icon='link' label='Demo' /> : null}
                            {data.link ? <ProjectLink url={data.link} icon='link' label='Link'/> : null}
                            {data.github ? <ProjectLink url={data.github} icon='github' label='GitHub' /> : null}
                            {data.prototype ? <ProjectLink url={data.prototype} icon='link' label='Prototype' /> : null}
                        </div>
                        <img src={`./images/${data.img}`} alt="" className="project-image"/>
                    </div>
                ))}
            </div>
            <RouteChangeTracker />
        </motion.section>
    )
}

export default Projects;
