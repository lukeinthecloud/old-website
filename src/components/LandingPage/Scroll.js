import React, {useState} from 'react';

export default function Scroll(props) {
    const [scrollPoint, setScrollPoint] = useState(0);

    _addWindowScrollListener();

    function _addWindowScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY % 50 === 0) {
                setScrollPoint(window.scrollY);
            }
        });
    }

    const children = React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            scrollPoint
        });
    });

    return (children);
};






