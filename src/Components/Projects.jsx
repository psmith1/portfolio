import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import projectData from '../data/projectdata';
import { ReactComponent as Multiwave } from '../images/multiwave.svg';
import ProjectLink from './ProjectLink';
import { motion } from 'framer-motion';

// const variants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0 }
// }

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
            <div className="projects-background">
                <div className="multiwave-wrapper">
                    <Multiwave />
                </div>
            </div>
            <div className="projects-wrapper">
                <Swiper
                spaceBetween={15}
                slidesPerView={1.2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1.2,
                        spaceBetween: 40,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 2.2
                    }
                }}
                >
                {projectData.map((data, i)=> (
                    <SwiperSlide>
                        <div className="card">
                            <img src={`./images/${data.img}`} alt="" className="project-image"/>
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
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </motion.section>
    )
}

export default Projects;
