import React from 'react';

import Introduction from './Introduction/Introduction';
import Skills from './Skills/Skills';
import WorkSection from './Work/WorkSection';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll';

export default function LandingPageContent() {
    return (
        <>
            <Introduction/>
            <Scroll>
                <Skills/>
                <WorkSection/>
            </Scroll>
            <Footer/>
        </>
    );
}
