import * as PIXI from 'pixi.js';
import {pixiUtil} from '../util/pixi.util';
import {particleConfig} from '../components/landing-page/Content/Particle/particle-config.const';

export function createRenderer() {
    const renderer = PIXI.autoDetectRenderer({transparent: true});
    const stage = new PIXI.Container();
    const container = new PIXI.Container();
    const emitter = _createEmitter(container, renderer);

    stage.addChild(container);

    return {
        emitter,
        stage,
        renderer
    };
}

export function start(elapsed, particleEngine) {
    _updateParticles(elapsed, particleEngine);
}

export function updateRenderScale() {
    // renderer.view.style.width = '100px';
}

function _createEmitter(container, renderer) {
    const circle = pixiUtil.generateCircle(renderer);
    const circleTexture = renderer.generateTexture(circle, 1, 1);

    const emitter = pixiUtil.generatePixiParticleEmitter({
        circleTexture,
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

function _updateParticles(elapsed, particleEngine) {
    let now = Date.now();
    particleEngine.emitter.update((now - elapsed) * 0.001);
    elapsed = now;
    requestAnimationFrame(_updateParticles.bind(_updateParticles, elapsed, particleEngine));
    particleEngine.renderer.render(particleEngine.stage);
}

