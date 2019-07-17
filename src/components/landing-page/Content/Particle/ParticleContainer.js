import React, {useEffect} from 'react';
import * as particleService from '../../../../services/particle.service';
import {ParticleContainerStyled} from './particle.style';

export default function ParticleContainer(props) {
    let elapsed = Date.now();

    useEffect(() => {
        const containerIdentifier = `particle-container-${props.identifier}`;
        const canvasContainer = document.getElementById(containerIdentifier);
        const particleEngine = particleService.createRenderer();

        particleService.start(elapsed, particleEngine);
        canvasContainer.appendChild(particleEngine.renderer.view);
    }, []);

    return (
        <ParticleContainerStyled id={`particle-container-${props.identifier}`}/>
    );
};
