import React from 'react';
import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkImageBackgroundStyled,
    WorkOverlayStyled, WorkSkillsContainerListStyled
} from './Work.style';

export default function WorkContainer(props) {
    let container = null;
    const workContainerOverlay = () => {
        return(
            <WorkOverlayStyled>
                <WorkImageBackgroundStyled backgroundImage='https://i.ytimg.com/vi/gUIJ-UkQsXI/maxresdefault.jpg'/>
            </WorkOverlayStyled>
        )
    }

    const largeWorkContainer = () => {
        return (
            <WorkContainerStyled className="tile is-child notification"
                                 containerSize={`${props.workContainerSize}`}>
                <div>
                    <WorkHeadingStyled className="title">{props.title}</WorkHeadingStyled>
                    <WorkDescriptionStyled>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </WorkDescriptionStyled>
                </div>
                <WorkSkillsContainerListStyled>
                    <span><b>React</b></span>
                    <span><b>/ Node</b></span>
                    <span><b>/ Netlify</b></span>
                </WorkSkillsContainerListStyled>
                {workContainerOverlay()}
            </WorkContainerStyled>
        )
    };

    const smallWorkContainer = () => {
        return (
            <WorkContainerStyled className="tile is-child notification"
                                 containerSize={`${props.workContainerSize}`}>
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
                {workContainerOverlay()}
            </WorkContainerStyled>
        )
    };

    if (props.workContainerSize === 'large') {
        container = largeWorkContainer();
    } else {
        container = smallWorkContainer();
    }

    return (
        <>
            {container}
        </>
    );
}
