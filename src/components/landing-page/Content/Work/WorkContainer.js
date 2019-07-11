import React from 'react';
import {WorkContainerStyled, WorkDescriptionStyled, WorkHeadingStyled} from './Work.style';

export default function WorkContainer(props) {
    return (
        <WorkContainerStyled className="tile is-child notification" containerSize={`${props.workContainerSize}`}>
            <WorkHeadingStyled className="title">Title</WorkHeadingStyled>
            <WorkDescriptionStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </WorkDescriptionStyled>
        </WorkContainerStyled>
    );
}
