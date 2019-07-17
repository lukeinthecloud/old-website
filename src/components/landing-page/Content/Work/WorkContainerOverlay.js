import React from 'react';
import ParticleContainer from '../Particle/ParticleContainer';
import {WorkImageBackgroundStyled, WorkOverlayStyled} from './Work.style';

export default function WorkContainerOverlay(props) {
    return (
        <>
            <ParticleContainer identifier={props.id}/>
            <WorkOverlayStyled>
                <WorkImageBackgroundStyled backgroundImage='https://i.ytimg.com/vi/gUIJ-UkQsXI/maxresdefault.jpg'/>
            </WorkOverlayStyled>
        </>
    );
};
