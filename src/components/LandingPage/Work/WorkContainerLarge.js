import React from 'react';

import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkSkillsContainerListStyled
} from './Work.style';
import WorkContainerOverlay from './WorkContainerOverlay';

export default function WorkContainerLarge(props) {
    return (
        <WorkContainerStyled className="tile is-child notification"
                             containerSize="large">
            <WorkHeadingStyled className="title">
                {props.title}
            </WorkHeadingStyled>
            <WorkDescriptionStyled>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                    ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
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
