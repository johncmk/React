import React, { Component } from 'react'

class ReactCurrying extends Component
{
    plusNumOrString(c, d)
    {
        return c + d
    }

    PlusFunc1(a)
    {
        return function(b)
        {
            return this.plusNumOrString(a,b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrString(a,b)

    plusFunc(a)
    {
        return this.PlusFunc1(a)(200)
    }

    render()
    {
        return (
            <>
                <input type="button" value="NumberPlus"
                onClick={ e => alert(this.plusFunc(100))}/>
                <input type="button" value="StringPlus"
                onClick={e => alert(this.plusFunc('react'))}/>
            </>
        )
    }
}

export default ReactCurrying;