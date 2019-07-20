import React, {useEffect, useContext} from 'react';
import {ParticleContainerStyled} from './Particle.style';
import {ParticleEngineContext} from './PartileContext';
import * as particleService from '../../../services/particle.service';

export default function ParticleContainer(props) {
    const {particleEngine, dimensions} = useContext(ParticleEngineContext);

    useEffect(() => {
        let elapsed = Date.now();
        const containerIdentifier = `particle-container-${props.identifier}`;
        let canvasContainer = document.getElementById(containerIdentifier);
        canvasContainer.appendChild(particleEngine.renderer.view);
        const destroyParticleEngine = particleService.initiateParticleEngine(particleEngine, elapsed);
        return () => {
            destroyParticleEngine();
            canvasContainer.parentNode.removeChild(canvasContainer);
            canvasContainer = null;
        }
    }, [
        props.identifier,
        particleEngine,
        dimensions
    ]);

    return (
        <ParticleContainerStyled id={`particle-container-${props.identifier}`} className="particle-container"/>
    );
};

