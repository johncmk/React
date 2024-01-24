import React, { Component } from 'react'

// Component Version
// class ReturnMap extends Component
// {
    // render()
    // {
    //     const element_Array = [
    //         <li key="1">react</li>,
    //         <li key="2">200</li>,
    //         <li key="3">Array map</li>
    //     ]
        
    //     return (
    //         <ul>
    //             {element_Array.map((array_val) => array_val)}
    //         </ul>
    //     )
    // }
// }

function ReturnMap()
{
    const element_Array = [
        <li key="1">react</li>,
        <li key="2">200</li>,
        <li key="3">Array map</li>
    ]
    
    return (
        <ul>
            {element_Array.map((array_val) => array_val)}
        </ul>
    )
}

export default ReturnMap;