import React from 'react';
import 'bulma/css/bulma.css';
import './styling/global.scss';
import LandingPageHeader from './components/landing-page/LandingPageHeader';

function App() {
    return (
        <div className="site-wrapper">
            <LandingPageHeader/>
        </div>
    );
}

export default App;
