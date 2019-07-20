import React, {useEffect, useRef, useState} from 'react';
import * as _ from 'lodash';

import WorkContainer from './WorkContainer';
import {WorkSectionStyled} from './Work.style';
import * as particleService from '../../../services/particle.service';
import {WorkSectionContext} from '../Particle/PartileContext';
import WorkContainerLarge from './WorkContainerLarge';

export default function WorkSection() {
    const containerRef = useRef(null);
    const [dimensions, _setDimensions] = useState({width: 0, height: 0});
    const particleEngine = particleService.createParticleEngine();

    useEffect(() => {
        const resizeEvent = window.addEventListener('resize', _.debounce(_updateDimensions, 1000));

        return () => {
            window.removeEventListener('resize', resizeEvent, false);
        }
    }, []);

    useEffect(() => {
        _updateDimensions();
    }, []);

    function _updateDimensions() {
        if (containerRef.current) {
            const {width, height} = containerRef.current.getBoundingClientRect();
            _setDimensions({width, height});
        }
    }

    return (
        <section className="section">
            <WorkSectionContext.Provider value={{
                particleEngine
            }}>
                <div className="container">
                    <WorkSectionStyled ref={containerRef} className="tile is-ancestor">
                        <div className="tile is-parent">
                            <WorkContainerLarge title="Project 1" id="1"/>
                        </div>
                        <div className="tile is-vertical is-8">
                            <div className="tile">
                                <div className="tile is-parent">
                                    {/*<WorkContainer*/}
                                    {/*    workContainerSize="large"*/}
                                    {/*    title='Project 2'*/}
                                    {/*    dimensions={dimensions}*/}
                                    {/*    id="2"*/}
                                    {/*/>*/}
                                </div>
                                <div className="tile is-parent is-vertical">
                                    {/*<WorkContainer*/}
                                    {/*    title='Project 3'*/}
                                    {/*    dimensions={dimensions}*/}
                                    {/*    id="3"*/}
                                    {/*/>*/}
                                    {/*<WorkContainer*/}
                                    {/*    title='Project 4'*/}
                                    {/*    dimensions={dimensions}*/}
                                    {/*    id="4"*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </div>
                    </WorkSectionStyled>
                </div>
            </WorkSectionContext.Provider>
        </section>

    );
}
