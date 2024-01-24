import React, { Component } from 'react'
import { useEffect } from 'react';

// class FetchPost extends Component
// {
//     componentDidMount = async () => {
//         const response = await fetch('http://date.jsontest.com/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body: {
//                 a: "react",
//                 b: 200
//             }
//         });
//         const body = await response.json();
//         alert(body.date)
//     }

//     render()
//     {
//         return (
//             <h1>fetch post</h1>
//         )
//     }
// }

function FetchPost()
{
    useEffect(() => {
        async function fetchDate()
        {
            const response = await fetch('http://date.jsontest.com/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: {
                a: "react",
                b: 200
            }
            });
            const body = await response.json();
            alert(body.date)
        }
        fetchDate();
    });

    return (
        <h1>fetch post</h1>
    )
}

export default FetchPost;