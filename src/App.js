import React from 'react';
import 'bulma/css/bulma.css';
import './styling/global.scss';
import './styling/base.scss';
import LandingPageHeader from './components/landing-page/LandingPageHeader';

function App() {
    return (
        <div className={'site-wrapper is-flex'}>
            <header className={'is-flex'}>
                <LandingPageHeader/>
            </header>
            <section className={'container is-flex'}>
            </section>
        </div>
    );
}

export default App;
