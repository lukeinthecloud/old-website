import * as PIXI from 'pixi.js';

import {pixiUtil} from '../util/pixi.util';
import {particleConfig} from '../components/LandingPage/Particle/particle-config.const';

export function createParticleEngine() {
    const renderer = PIXI.autoDetectRenderer({transparent: true});
    const stage = new PIXI.Container();
    const container = new PIXI.Container();
    const texture = _createTexture(renderer);
    const emitter = _createEmitter(container, renderer, texture);

    stage.addChild(container);

    return {
        container,
        emitter,
        stage,
        renderer,
        texture
    };
}

export function initiateParticleEngine(particleEngine, elapsed) {
    let requestIdentifier = null;
    particleEngine.emitter.emit = true;
    startParticles(particleEngine, elapsed);

    function startParticles(elapsedTime, particleEngine) {
        requestIdentifier = null;
        _animateParticles(elapsedTime, particleEngine);
    }

    function _animateParticles(particleEngine, elapsedTime) {
        let now = Date.now();
        particleEngine.emitter.update((now - elapsedTime) * 0.001);
        elapsedTime = now;

        if (!requestIdentifier) {
            requestIdentifier = requestAnimationFrame(() => {
                startParticles(particleEngine, elapsedTime);
            });
        }

        particleEngine.renderer.render(particleEngine.stage);
    }


    return () => {
        cancelAnimationFrame(requestIdentifier);
        destroy(particleEngine);
    }
}

function destroy(particleEngine) {
    particleEngine.emitter.emit = false;
    particleEngine.emitter.destroy();
    particleEngine.texture.destroy();
    particleEngine.stage.removeChild(particleEngine.container);
    particleEngine.renderer.destroy(true);
    particleEngine.renderer = null;
}

function _createTexture(renderer) {
    const circle = pixiUtil.generateCircle(renderer);
    const texture = renderer.generateTexture(circle, 1, 1);
    circle.destroy();
    return texture;
}

function _createEmitter(container, renderer, texture) {
    const emitter = pixiUtil.generatePixiParticleEmitter({
        texture,
        container,
        particleConfig
    });

    _positionEmitter(emitter, renderer);

    return emitter;
}

function _positionEmitter(emitter, renderer) {
    emitter.ownerPos.x = renderer.view.width / 2;
    emitter.ownerPos.y = renderer.view.height / 2;
}
