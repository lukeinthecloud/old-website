import React, {useEffect} from 'react';
import * as particleService from '../../../services/particle.service';
import {ParticleContainerStyled} from './Particle.style';

export default function ParticleContainer(props) {
    useEffect(() => {
        const elapsed = Date.now();
        const containerIdentifier = `particle-container-${props.identifier}`;
        let canvasContainer = document.getElementById(containerIdentifier);
        let particleEngine = particleService.createParticleEngine();

        canvasContainer.appendChild(particleEngine.renderer.view);

        const destroyParticleEngine = particleService.initiateParticleEngine(particleEngine, elapsed);

        return () => {
            destroyParticleEngine();
            canvasContainer.parentNode.removeChild(canvasContainer);
            canvasContainer = null;
            particleEngine = null;
        }
    }, [props.identifier, props.dimensions.width, props.dimensions.height]);

    return (
        <ParticleContainerStyled id={`particle-container-${props.identifier}`}/>
    );
};

