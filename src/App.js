import React from "react";
import './App.css';
import ReactHOC from './Part3/ReactHOC'

function App()
{
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>Apply CSS</p>
            <ReactHOC
                name='React200'
            />
        </div>
    )
}

export default App;