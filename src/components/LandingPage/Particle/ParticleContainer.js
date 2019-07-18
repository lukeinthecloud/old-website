import React, {useEffect} from 'react';
import * as particleService from '../../../services/particle.service';
import {ParticleContainerStyled} from './Particle.style';

export default function ParticleContainer(props) {
    useEffect(() => {
        const elapsed = Date.now();
        const containerIdentifier = `particle-container-${props.identifier}`;
        const canvasContainer = document.getElementById(containerIdentifier);
        const particleEngine = particleService.createRenderer();

        particleService.startParticles(elapsed, particleEngine);
        canvasContainer.appendChild(particleEngine.renderer.view);

        return () => {
            particleService.destroy(particleEngine);
            // canvasContainer.parentNode.removeChild(canvasContainer);
        }
    }, [props.identifier]);

    return (
        <ParticleContainerStyled id={`particle-container-${props.identifier}`}/>
    );
};

