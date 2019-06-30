import React from 'react';
import 'bulma/css/bulma.css';
import './styling/global.scss';
import './styling/base.scss';

import LandingPage from './components/landing-page/LandingPage';

function App() {
    return (
        <div className={'site-wrapper is-flex'}>
            <LandingPage/>
        </div>
    );
}

export default App;

