import React, {useEffect, useState} from 'react';

import {WorkSectionStyled} from './Work.style';
import {createRows} from '../../../services/work/work-row.service';
import {workResponse} from './work-response.const';
import withAnimation from '../../HOC/withAnimation';
import Animate from '../../Animate';

const WorkSection = React.forwardRef((props, ref) => {
        const [workContainers, setWorkContainers] = useState([]);

        useEffect(() => {
            _createContainerRows();
        }, []);

        function _createContainerRows() {
            const containers = createRows(workResponse);
            setWorkContainers(containers);
        }

        return (
            <section ref={ref} className="section">
                <Animate canAnimate={props.canAnimate} options={{
                    animateClass: 'fadeIn',
                    duration: '3s',
                    delay: '1s'
                }}>
                    <div className="container">
                        <WorkSectionStyled className="tile is-ancestor">
                            <div className="tile is-vertical">
                                {workContainers}
                            </div>
                        </WorkSectionStyled>
                    </div>
                </Animate>
            </section>
        );
    }
);

export default withAnimation(WorkSection);
