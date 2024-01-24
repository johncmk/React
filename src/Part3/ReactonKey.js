import React, { Component } from 'react'

class ReactonKey extends Component 
{
    // e is an EventObject
    // event is an event value such as onKeydown, onKeyPress, onKeyUp
    Onkey(event, e)
    {
        var val = e.target.value;
        console.log(`event : ${event}, value: ${val}`)
    }

    render()
    {
        return (
            <>
                onKeyDown : <input type="text"
                onKeyDown={ (e) => this.Onkey('onKeyDown', e)}/>
                <br/>
                onKeyPress : <input type="text"
                onKeyPress={ (e) => this.Onkey('onKeyPress', e)}/>
                <br/>
                onKeyUp : <input type="text"
                onKeyUp={ (e) => this.Onkey('onKeyUp', e)}/>
            </>
        )
    }
}

export default ReactonKey