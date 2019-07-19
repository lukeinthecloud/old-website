import React, {useEffect} from 'react';
import * as particleService from '../../../services/particle.service';
import {ParticleContainerStyled} from './Particle.style';

export default function ParticleContainer(props) {
    useEffect(() => {
        const containerIdentifier = `particle-container-${props.identifier}`;
        let canvasContainer = document.getElementById(containerIdentifier);
        let particleEngine = particleService.createRenderer();

        canvasContainer.appendChild(particleEngine.renderer.view);
        const stopParticles = particleService.initiateAnimation(particleEngine);
        // let requestIdentifier = null;
        //
        // function startParticles(elapsed, particleEngine) {
        //     requestIdentifier = null;
        //     _animateParticles(elapsed, particleEngine);
        // }
        //
        // function _animateParticles(elapsed, particleEngine) {
        //     let now = Date.now();
        //     particleEngine.emitter.update((now - elapsed) * 0.001);
        //     elapsed = now;
        //     if (!requestIdentifier) {
        //         requestIdentifier = requestAnimationFrame(() => {
        //             startParticles(elapsed, particleEngine);
        //         });
        //     }
        //     particleEngine.renderer.render(particleEngine.stage);
        // }
        //
        // startParticles(elapsed, particleEngine);

        return () => {
            stopParticles();
            particleService.destroy(particleEngine);
            canvasContainer.parentNode.removeChild(canvasContainer);
            canvasContainer = null;
            particleEngine = null;
        }
    }, [props.identifier, props.dimensions.width, props.dimensions.height]);

    return (
        <ParticleContainerStyled id={`particle-container-${props.identifier}`}/>
    );
};

