import React, { Component } from 'react'

class PropsNode extends Component
{
    render()
    {
        return (
            <div style={{padding: "0px"}}>
                {this.props.children}
            </div>
        )
    }
}

export default PropsNode;