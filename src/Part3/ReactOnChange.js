import React, { Component } from 'react'

/**
 * react에서는 onChange 이벤트도 camelCase 형식의 명칭을 사용한다.
 * onChange 이벤트는 특정 element에 변화가 생겼을 때 정의된 함수를 호출하는
 * 방식으로 사용한다.
 */

class ReactOnChange extends Component 
{
    change = (e) => {
        var val = e.target.value;
        console.log(`param : ${val}`)
    }

    render()
    {
        return (
            <>
                <input type="text" onChange={this.change}/>
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default ReactOnChange;