import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled/macro';

export default function Animate(props) {
    const [classList, setClassList] = useState('u-visibility-none');
    let animateClass = 'fadeInUp';

    const SkillContainerStyled = styled()`
                margin-top: .5rem;
            `;
    if (props.options) {
        animateClass = props.options.animateClass ? props.options.animateClass : animateClass;

    }

    useEffect(() => {
        const updatedClassList = props.canAnimate ? `animated ${animateClass}` : 'u-visibility-none';
        setClassList(updatedClassList);
    });

    const children = React.Children.map(props.children, (child, index) => {
        if (index === 0) {
            const classes = `${child.props.className} ${classList}`;

            // const Element = styled(
            //     ({component, ...props}) => {
            //         return
            //     }
            // )`
            //  background: red;
            // `;

            return React.cloneElement(child, {className: classes});
        }
        return React.cloneElement(child);
    });

    return (
        children
    );
}
