import React, {useState} from 'react';

import SmallWorkContainer from './SmallWorkContainer';
import LargeWorkContainer from './LargeWorkContainer';

export default function WorkContainer(props) {
    // const [dimensions, _setDimensions] = useState({width: 0, height: 0});

    return (
        <>
            {
                props.workContainerSize === 'large' ?
                    <LargeWorkContainer id={props.id} title={props.title}/> :
                    <SmallWorkContainer id={props.id} title={props.title}/>
            }
        </>
    )
}
