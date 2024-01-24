import React, { Component } from 'react'

class ReactOnSubmit extends Component
{
    // 이벤트 객체 e에 preventDefault 함수를 실행하면,
    // submit 이후에 페이지 새로 고침을 방지할 수 있다.
    Submit(e)
    {
        var inputValue = document.getElementById('inputId').value;
        console.log(`inputValue ${inputValue}`)
        e.preventDefault();
    }

    render()
    {
        return (
            <form onSubmit={this.Submit}>
                <input type="text" name="inputName" id="inputId"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default ReactOnSubmit;