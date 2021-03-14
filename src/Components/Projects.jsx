import React from 'react';
import projectData from '../data/projectdata';
import { ReactComponent as Multiwave } from '../images/multiwave.svg';
import ProjectLink from './ProjectLink';



const Projects = () => {
    return (
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
                        </div>
                        <img src={`./images/${data.img}`} alt="" className="project-image"/>
                    </div>
                ))}
            </div>
    )
}

export default Projects;
