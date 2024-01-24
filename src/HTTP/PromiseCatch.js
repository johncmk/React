import React, { Component } from 'react'

class PromiseCatch extends Component
{
    componentDidMount()
    {
        new Promise((resolve, reject) => {
            reject(Error("ERROR Info"));
        })
        .then (result => console.log(`then ${result}`))
        .catch (result => console.log(`catch : ${result}`))
    }

    render()
    {
        return (
            <h1>Promise</h1>
        )
    }
}

export default PromiseCatch;