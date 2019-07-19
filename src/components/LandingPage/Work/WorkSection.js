import React, {useEffect, useRef, useState} from 'react';
import * as _ from 'lodash';

import WorkContainer from './WorkContainer';
import {WorkSectionStyled} from './Work.style';

export default function WorkSection() {
    const containerRef = useRef();
    const [dimensions, _setDimensions] = useState({width: 0, height: 0});

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
            <div className="container">
                <WorkSectionStyled ref={containerRef} className="tile is-ancestor">
                    <div className="tile is-parent">
                        <WorkContainer
                            workContainerSize="large"
                            title='Project 1'
                            dimensions={dimensions}
                            id="1"
                        />
                    </div>
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent">
                                <WorkContainer
                                    workContainerSize="large"
                                    title='Project 2'
                                    dimensions={dimensions}
                                    id="2"
                                />
                            </div>
                            <div className="tile is-parent is-vertical">
                                <WorkContainer
                                    title='Project 3'
                                    dimensions={dimensions}
                                    id="3"
                                />
                                <WorkContainer
                                    title='Project 4'
                                    dimensions={dimensions}
                                    id="4"
                                />
                            </div>
                        </div>
                    </div>
                </WorkSectionStyled>
            </div>
        </section>
    );
}
