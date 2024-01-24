import React, { Component } from 'react'


/**
 * line 11에서 response라는 변수는 json 형태이기 때문에 json() 함수로 사용할 수 있도록
 * 변환해 body라는 변수에 할당한다. 이때 fetch 함수의 비동기적 특징 때문에 line 11에서 
 * 데이터를 가져오기 전에 line 6이 실행돼 에러가 발생할 수 있다.
 * 
 * 이런 에러는 비동기 함수에 동기적인 기능을 추가해 해결할 수 있다.
 * 이때 사용하는 것이 async 와 await 문법이다.
 * 비동기 함수를 실해하는 함수에 async를 추가하고 
 * 동기적으로 처리돼야 하는 함수 구문 앞에 await를 추가한다.
 */
class FetchGet extends Component
{
    componentDidMount = async () =>
    {
        const response = await fetch('http://date.jsontest.com')
        const body = await response.json();
        alert(body.date)
    }

    render()
    {
        return (
            <h1>fetch get</h1>
        )
    }
}

export default FetchGet;