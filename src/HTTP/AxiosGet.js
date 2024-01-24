import React, { useEffect, Component } from 'react'
import axios from 'axios'

// class AxiosGet extends Component
// {
//     componentDidMount()
//     {
//         axios.get('http://date.jsontest.com')
//         .then(
//             response => {alert(response.data.date)}
//         )
//     }

//     render()
//     {
//         return (
//             <h1>axios get</h1>
//         )
//     }
// }

const AxiosGet = () => {
    useEffect(() => {
        axios.get('http://date.jsontest.com')
        .then(
            response => {
                alert(response.data.date)
            }
        )
    })
}

export default AxiosGet