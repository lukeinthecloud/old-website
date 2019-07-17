import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';

function generateCircle() {
    const circle = new PIXI.Graphics();

    circle.beginFill(0xFFFFFF);
    circle.drawCircle(0, 0, 10);
    circle.endFill();
    circle.x = 0;
    circle.y = 0;

    return circle;
}

function generatePixiParticleEmitter({container, circleTexture, particleConfig}) {
    const emitter = new particles.Emitter(
        container,
        circleTexture,
        particleConfig
    );
    return emitter
}

export const pixiUtil = {
    generateCircle,
    generatePixiParticleEmitter
};
