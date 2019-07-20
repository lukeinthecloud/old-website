import React, {useEffect, useState, useRef} from 'react';

import WorkContainer from './WorkContainer';
import {WorkSectionStyled} from './Work.style';
import * as _ from 'lodash';

const workResponse = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Hello World',
        links: []
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Hello World',
        links: []
    },
    // {
    //     id: 3,
    //     title: 'Project 3',
    //     description: 'Hello World',
    //     links: []
    // },
    // {
    //     id: 4,
    //     title: 'Project 4',
    //     description: 'Hello World',
    //     links: []
    // }
];


export default function WorkSection() {
    const containerRef = useRef(null);
    const [workContainers, setWorkContainers] = useState([]);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});


    useEffect(() => {
        _updateDimensions();
        createWorkContainers();
    }, []);

    useEffect(() => {
        const resizeEvent = window.addEventListener('resize', _.debounce(_updateDimensions, 1000));

        return () => {
            window.removeEventListener('resize', resizeEvent, false);
        }
    }, []);

    function _updateDimensions() {
        createWorkContainers();
        if (containerRef.current) {
            const {width, height} = containerRef.current.getBoundingClientRect();
            setDimensions({width, height});
        }
    }

    function createWorkContainers() {
        const containers = workResponse.map((workItem) => {
            const containerRef = React.createRef();
            return (
                <div className="tile is-parent"
                     key={workItem.id.toString()}
                     ref={containerRef}>
                    <WorkContainer
                        workContainerSize="large"
                        workData={workItem}
                        ref={containerRef}
                    />
                </div>
            )
        });

        setWorkContainers(containers);
    }

    return (
        <section className="section" ref={containerRef}>
            <div className="container">
                <WorkSectionStyled className="tile is-ancestor">
                    {workContainers}
                </WorkSectionStyled>
            </div>
        </section>

    );
}
