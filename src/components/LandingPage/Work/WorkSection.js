import React, {useEffect, useState} from 'react';

import {WorkSectionStyled} from './Work.style';
import {createRows} from '../../../services/work/work-row.service';
import {workResponse} from './work-response.const';

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
                    <div className="tile is-vertical">
                        {workContainers}
                    </div>
                </WorkSectionStyled>
            </div>
        </section>

    );
}

