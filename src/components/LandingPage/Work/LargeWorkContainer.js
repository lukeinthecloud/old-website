import React from 'react';
import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkSkillsContainerListStyled
} from './Work.style';

import WorkContainerOverlay from './WorkContainerOverlay';

export default function LargeWorkContainer(props) {
    return (
        <WorkContainerStyled className="tile is-child notification"
                             containerSize="large">
            <WorkHeadingStyled className="title">{props.title}</WorkHeadingStyled>
            <WorkDescriptionStyled>
                <p>
                    A description...
                </p>
            </WorkDescriptionStyled>
            <WorkSkillsContainerListStyled>
                <span><b>React</b></span>
                <span><b>/ Node</b></span>
                <span><b>/ Netlify</b></span>
            </WorkSkillsContainerListStyled>
            <WorkContainerOverlay
                id={props.id}/>
        </WorkContainerStyled>
    )
}
