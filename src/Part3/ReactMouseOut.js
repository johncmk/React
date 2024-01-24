import React, { Component } from 'react'

class ReactMouseOut extends Component
{
    MouseOut(tag)
    {
        console.log(`TAG : ${tag}`)
    }

    render()
    {
        return (
            <>
                <div onMouseMove= { (e) => this.MouseOut('div')}>
                    <h3>DIV onMouseOut</h3>
                </div>
                <input type="text" onMouseMove= { (e) => this.MouseOut('input')}/>
                <select onMouseMove= { (e) => this.MouseOut('select')}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default ReactMouseOut;