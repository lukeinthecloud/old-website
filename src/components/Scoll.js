import React from 'react';

export default function withScroll(WrappedComponent, scrollPoint) {
    const windowInnerHeight = window.innerHeight;
    console.log(scrollPoint);

    return class Scroll extends React.Component {
        constructor(props) {
            super(props);
        }

        shouldComponentUpdate(nextProps, nextState, nextContext) {
            return false;
        }

        componentDidMount() {
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }
}
