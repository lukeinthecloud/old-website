import React, {useEffect, useContext} from 'react';
import {ParticleContainerStyled} from './Particle.style';
import {WorkSectionContext} from './PartileContext';
import * as particleService from '../../../services/particle.service';

export default function ParticleContainer(props) {
    const {particleEngine, dimensions} = useContext(WorkSectionContext);

    useEffect(() => {
        const elapsed = Date.now();
        const containerIdentifier = `particle-container-${props.identifier}`;
        let canvasContainer = document.getElementById(containerIdentifier);

        canvasContainer.appendChild(particleEngine.renderer.view);
        const destroyParticleEngine = particleService.initiateParticleEngine(particleEngine, elapsed);

        return () => {
            destroyParticleEngine();
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

