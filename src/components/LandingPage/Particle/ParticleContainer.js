import React, {useEffect, useContext} from 'react';
import {ParticleContainerStyled} from './Particle.style';
import * as particleService from '../../../services/particle.service';
import {ParticleContainerContext} from './ParticleContainerContext';
import {WorkContainerContext} from '../Work/WorkContainerContext';

export default function ParticleContainer(props) {
    const {particleEngine} = useContext(ParticleContainerContext);
    const {dimensions} = useContext(WorkContainerContext);

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

