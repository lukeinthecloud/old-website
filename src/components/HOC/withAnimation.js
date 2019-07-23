import React, {useEffect, useState} from 'react';

const withAnimation = (WrappedComponent) => {
    return (props) => {
        const [canAnimate, setcanAnimate] = useState(false);
        let containerRef = React.createRef();

        useEffect(() => {
            const containerRefYPosition = containerRef.current.getBoundingClientRect().y;
            if (containerRefYPosition <= props.scrollPoint) {
                setcanAnimate(true);
            }

        }, [props.scrollPoint, containerRef]);

        return <WrappedComponent ref={containerRef} {...props} canAnimate={canAnimate}/>;
    }
};

export default withAnimation;
