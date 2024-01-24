import React, { Component } from 'react'
import withHocComponent from './withHOCComponent'

class ReactHOC extends Component
{
    render()
    {
        console.log('2. HOCComponent render')
        return (
            <h2>props.name : {this.props.name}</h2>
        )
    }
}

export default withHocComponent(ReactHOC, 'ReactHOC')