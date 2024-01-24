import React from 'react'
import { Consumer } from './ContextApiParent'

class contextChildrenParent extends React.Component
{
    render()
    {
        return (
            <Consumer>
                {contextValue =>
                    <button onClick = {
                        (e) => contextValue.setStateFunc("react200")}>
                        {contextValue.name}_button
                    </button>
                }
            </Consumer>
        )
    }
}

export default contextChildrenParent;