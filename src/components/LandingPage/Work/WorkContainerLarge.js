import React from 'react';

import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkSkillsContainerListStyled
} from './Work.style';
import WorkContainerOverlay from './WorkContainerOverlay';

export default function WorkContainerLarge(props) {
    const {title, id, description} = props.workData;
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
            <WorkContainerOverlay
                id={id}/>
        </WorkContainerStyled>
    )
}
