import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxLink from '@iconify-icons/bx/bx-link';
import bxlGithub from '@iconify-icons/bx/bxl-github';

const ProjectLink = ({label, url, icon}) => {
        return (
        <a type={label} href={url} className="project-link">
            <Icon icon={icon === 'github' ? bxlGithub : bxLink } />
            {label}
        </a>
        )
};

export default ProjectLink;
