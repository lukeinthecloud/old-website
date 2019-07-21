import React, {useEffect, useState} from 'react';

import {WorkSectionStyled} from './Work.style';
import WorkRowContainerSingle from './WorkRowContainerSingle';
import WorkRowContainer from './WorkRowContainer';
import {createRows} from '../../../services/work/work-row.service';

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
    {
        id: 3,
        title: 'Project 3',
        description: 'Hello World',
        links: []
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Hello World',
        links: []
    },
    {
        id: 5,
        title: 'Project 1',
        description: 'Hello World',
        links: []
    },
    {
        id: 6,
        title: 'Project 2',
        description: 'Hello World',
        links: []
    },
    {
        id: 7,
        title: 'Project 3',
        description: 'Hello World',
        links: []
    },
    {
        id: 8,
        title: 'Project 4',
        description: 'Hello World',
        links: []
    }
];


export default function WorkSection() {
    const [workContainers, setWorkContainers] = useState([]);

    useEffect(() => {
        _createContainerRows();
    }, []);

    function _createContainerRows() {
        const containers = createRows(workResponse);
        setWorkContainers(containers);
    }




    return (
        <section className="section">
            <div className="container">
                <WorkSectionStyled className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        {workContainers}
                    </div>
                </WorkSectionStyled>
            </div>
        </section>

    );
}

