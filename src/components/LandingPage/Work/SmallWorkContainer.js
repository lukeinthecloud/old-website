import React from 'react';

import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkSkillsContainerListStyled
} from './Work.style';
import WorkContainerOverlay from './WorkContainerOverlay';

export default function SmallWorkContainer(props) {
    return (
        <WorkContainerStyled className="tile is-child notification"
                             containerSize="small">
            <WorkHeadingStyled className="title">
                {props.title}
                <WorkSkillsContainerListStyled>
                    <span><b>React</b></span>
                    <span><b>/ Node</b></span>
                    <span><b>/ Netlify</b></span>
                </WorkSkillsContainerListStyled>
            </WorkHeadingStyled>
            <WorkDescriptionStyled>
                <p>
                    A description...
                </p>
            </WorkDescriptionStyled>
            <WorkContainerOverlay
                id={props.id}/>
        </WorkContainerStyled>
    )
}
