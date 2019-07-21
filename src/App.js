import React from 'react';

import 'bulma/css/bulma.css';
import 'animate.css/animate.min.css';
import './styles/global.css';
import './styles/animate-extra.css';

import LandingPage from './components/LandingPage/LandingPage';

function App() {
    return (
        <div className={'site-wrapper is-flex'}>
            <LandingPage/>
        </div>
    );
}

export default App;

