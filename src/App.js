import React from 'react';

import 'bulma/css/bulma.css';
import './styles/global.css';

import LandingPage from './components/landing-page/LandingPage';

function App() {
    return (
        <div className={'site-wrapper is-flex'}>
            <LandingPage/>
        </div>
    );
}

export default App;

