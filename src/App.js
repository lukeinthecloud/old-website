import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import MenuWrapper from './components/menu/Menu';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MenuWrapper />
            </header>
        </div>
    );
}

export default App;
