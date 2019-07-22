import React, {useEffect, useState} from 'react';

const withAnimation = (WrappedComponent) => {
    return (props) => {
        const [canRender, setCanRender] = useState(false);
        let containerRef = React.createRef();

        useEffect(() => {
            console.log(containerRef.current.getBoundingClientRect().top);
            const containerRefYPosition = containerRef.current.getBoundingClientRect().y;
            const positionCalc = containerRefYPosition - props.scrollPoint;

            // console.log('containerRefYPosition', containerRefYPosition);
            // console.log('positionCalc', positionCalc);
            // console.log(window.innerHeight);

            setCanRender(true);

        }, [props.scrollPoint, containerRef]);

        return <WrappedComponent ref={containerRef} {...props} canRender={canRender}/>;
    }
};

export default withAnimation;
