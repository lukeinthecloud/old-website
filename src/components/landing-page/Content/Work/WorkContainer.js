import React from 'react';
import {WorkContainerStyled, WorkDescription, WorkHeading} from './styles/Work.style';

export default function WorkContainer(props) {
    return (
        <WorkContainerStyled className="tile is-child notification" containerSize={`${props.workContainerSize}`}>
            <WorkHeading className="title">Title</WorkHeading>
            <WorkDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </WorkDescription>
        </WorkContainerStyled>
    );
}
