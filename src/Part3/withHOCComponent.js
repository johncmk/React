import React from 'react';

export default function withHOCComponent(InComponent, InComponentName)
{
    return class OutComponent extends React.Component 
    {
        componentDidMount()
        {
            console.log(`3. InComponentName : ${InComponentName}`)
        }
        render()
        {
            console.log('1. InComponent render')
            return (
                <InComponent {...this.props}/>
            )
        }
    }
}