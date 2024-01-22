import React from "react";
import './App.css';
import LifecycleEx from './LifecycleEx';

function App()
{
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>Apply CSS</p>
            <LifecycleEx
                prop_value = 'FromApp.js'
            />
        </div>
    )
}

export default App;