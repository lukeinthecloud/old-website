import React from 'react';
import Introduction from './Content/Introduction/Introduction';
import Skills from './Content/Skills/Skills';
import WorkSection from './Content/Work/WorkSection';
import Footer from './Content/Footer/Footer';

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
