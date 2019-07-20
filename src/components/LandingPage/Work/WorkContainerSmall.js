import React from 'react';

import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkSkillsContainerListStyled
} from './Work.style';
import WorkContainerOverlay from './WorkContainerOverlay';

export default function WorkContainerSmall(props) {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </WorkDescriptionStyled>
            <WorkContainerOverlay
                id={props.id}/>
        </WorkContainerStyled>
    )
}
