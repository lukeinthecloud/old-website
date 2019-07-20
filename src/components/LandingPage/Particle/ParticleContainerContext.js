import * as React from 'react';
import * as particleService from '../../../services/particle.service';
const particleEngine = particleService.createParticleEngine();

export const ParticleContainerContext = React.createContext({
    particleEngine
});
