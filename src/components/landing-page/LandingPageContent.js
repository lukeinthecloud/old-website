import React from 'react';
import Introduction from './Content/Introduction';

export default function LandingPageContent() {
    return ([
        <Introduction/>,
        <section className={'section'}>
            <div className="container is-full">
                <h2 className="title is-2">Main Title</h2>
            </div>
        </section>
    ]);
}
