import React from 'react';

import withAnimation from '../../HOC/withAnimation';

const Introduction = React.forwardRef((props, ref) => {
        return (
            <section ref={ref} className="section">
                {
                    props.canRender &&
                    <div className="container is-full">
                        <div className="columns animated fadeInUp">
                            <div className="column">
                                <h2 className="title is-2 u-title-primary">Main Title</h2>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column animated fadeInUp">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="column animated fadeInUp delay-half-1s">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </section>
        );
    }
);

export default withAnimation(Introduction);
