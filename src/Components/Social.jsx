import React from 'react';
import { Icon } from '@iconify/react';
import bxlGithub from '@iconify-icons/bx/bxl-github';
import bxlLinkedinSquare from '@iconify-icons/bx/bxl-linkedin-square';
import bxlCodepen from '@iconify-icons/bx/bxl-codepen';
import bxlInstagramAlt from '@iconify-icons/bx/bxl-instagram-alt';

const Social = () => {
    return (
        <div className="social">
            <a href="https://github.com/psmith1" target="_blank" rel="noreferrer"><Icon className="icon" icon={bxlGithub} /></a>
            <a href="https://codepen.io/psmith1" target="_blank" rel="noreferrer"><Icon className="icon" icon={bxlCodepen} /></a>
            <a href="https://linkedin.com/in/petergbsmith" target="_blank" rel="noreferrer"><Icon className="icon" icon={bxlLinkedinSquare} /></a>
            <a href="https://instagram.com/petergrabbit" target="_blank" rel="noreferrer"><Icon className="icon" icon={bxlInstagramAlt} /></a>
        </div>
    )
}

export default Social;
