import React, {useState, useEffect} from 'react';

import Introduction from './Introduction/Introduction';
import Skills from './Skills/Skills';
import WorkSection from './Work/WorkSection';
import Footer from '../Footer/Footer';
import withScroll from '../Scoll';

export default function LandingPageContent() {
    const [scrollPoint, setScrollPoint] = useState(0);
    let IntroductionComponent = withScroll(Introduction, scrollPoint);
    let SkillsComponent = withScroll(Skills, scrollPoint);

    useEffect(() => {
        _addWindowScrollListener()
    }, [scrollPoint]);

    function _addWindowScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY % 200 === 0) {
                setScrollPoint(window.scrollY);
            }
        });
    }

    return (
        <>
            <IntroductionComponent/>
            <SkillsComponent/>
            <WorkSection/>
            <Footer/>
        </>
    );
}
