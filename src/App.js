import React from 'react';
import './App.css';
import Playground from './Playground';
import Paint from "./components/Paint";

function App() {
    return (
        <div className="App">
            <Playground />
            <Paint />
        </div>
    );
}

export default App;
