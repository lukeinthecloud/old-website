import React from 'react';

import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled, WorkImageBackgroundStyled, WorkOverlayStyled,
    WorkSkillsContainerListStyled
} from './Work.style';

import ParticleContainer from '../Particle/ParticleContainer';

export default function WorkContainer(props) {
    const {title, description} = props.workData;

    return (
        <WorkContainerStyled className="tile is-child notification"
                             containerSize="large">
            <WorkHeadingStyled className="title">
                {title}
            </WorkHeadingStyled>

            <WorkDescriptionStyled>
                <p>
                    {description}
                </p>
            </WorkDescriptionStyled>

            <WorkSkillsContainerListStyled>
                <span><b>React</b></span>
                <span><b>/ Node</b></span>
                <span><b>/ Netlify</b></span>
            </WorkSkillsContainerListStyled>

            <ParticleContainer/>
            <WorkOverlayStyled>
                <WorkImageBackgroundStyled backgroundImage='https://i.ytimg.com/vi/gUIJ-UkQsXI/maxresdefault.jpg'/>
            </WorkOverlayStyled>
        </WorkContainerStyled>
    )
}
