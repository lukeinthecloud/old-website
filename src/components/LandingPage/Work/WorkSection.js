import React, {useEffect, useState} from 'react';

import WorkContainer from './WorkContainer';
import {WorkSectionStyled} from './Work.style';

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
    const [workContainers, setWorkContainers] = useState([]);

    useEffect(() => {
        createWorkContainers();
    }, [workContainers]);


    function createWorkContainers() {
        const containers = workResponse.map((workItem) => {
            return (
                <div className="tile is-parent"
                     key={workItem.id.toString()}>
                    <WorkContainer
                        workContainerSize="large"
                        workData={workItem}/>
                </div>
            )
        });

        setWorkContainers(containers);
    }

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
