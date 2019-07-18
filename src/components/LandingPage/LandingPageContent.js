import React from 'react';

import Introduction from './Introduction/Introduction';
import Skills from './Skills/Skills';
import WorkSection from './Work/WorkSection';
import Footer from '../Footer/Footer';

export default function LandingPageContent() {
    return (
        <>
            <Introduction/>
            <Skills/>
            <WorkSection/>
            <Footer/>
        </>
    );
}
