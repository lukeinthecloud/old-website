import React, {useRef, useState} from 'react';
import {
    WorkContainerStyled,
    WorkDescriptionStyled,
    WorkHeadingStyled,
    WorkSkillsContainerListStyled
} from './Work.style';

import WorkContainerOverlay from './WorkContainerOverlay';
import * as particleService from '../../../../services/particle.service';

export default function WorkContainer(props) {
    const containerRef = useRef();
    const [dimensions, _setDimensions] = useState({width: 0, height: 0});

    function _updateDimensions() {
        // if (containerRef.current) {
        //     const {width, height} = containerRef.current.getBoundingClientRect();
        //     console.log({width, height});
        //     _setDimensions({width, height});
        // }
    }

    function _addEventListeners() {
        // window.addEventListener('resize', _updateDimensions.bind(this));
    }

    function _onWindowResize() {
        particleService.updateRenderScale();
    }

    function _largeWorkContainer() {
        return (
            <WorkContainerStyled className="tile is-child notification"
                                 containerSize={`${props.workContainerSize}`}
                                 ref={containerRef}>
                <WorkHeadingStyled className="title">{props.title}</WorkHeadingStyled>
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
                <WorkContainerOverlay id={props.id}/>
            </WorkContainerStyled>
        )
    }

    function _smallWorkContainer() {
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
                <WorkContainerOverlay/>
            </WorkContainerStyled>
        )
    }

    function createContainer() {
        if (props.workContainerSize === 'large') {
            return _largeWorkContainer();
        } else {
            return _smallWorkContainer();
        }
    }

    _addEventListeners();
    _updateDimensions();

    return (
        <>
            {createContainer()}
        </>
    )
}
