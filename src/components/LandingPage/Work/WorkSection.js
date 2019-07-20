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
    // {
    //     id: 2,
    //     title: 'Project 2',
    //     description: 'Hello World',
    //     links: []
    // },
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
    let workContainers = [];
    const containerRefs = useRef({});
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
        // if (containerRef.current) {
        //     const {width, height} = containerRef.current.getBoundingClientRect();
        //     _setDimensions({width, height});
        // }
    }

    function createWorkContainers() {
        workContainers = workResponse.map((workItem) => {
            return (
                <div className="tile is-parent" key={workItem.id.toString()}>
                    <WorkContainer
                        workContainerSize="large"
                        workData={workItem}
                    />
                </div>
            )
        });
    }

    createWorkContainers();
    return (
        <section className="section">
            <div className="container">
                <WorkSectionStyled className="tile is-ancestor">
                    {workContainers}
                </WorkSectionStyled>
            </div>
        </section>

    );
}
