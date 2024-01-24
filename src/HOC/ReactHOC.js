import React, { Component } from 'react'
import withHocComponent from './withHOCComponent'

// High Order Component (HOC)
// 이것은 컴포넌트를 인자로 받거나 반환하는 함수를 것이다.
// 하오더 컴포넌트를 구현하면, 여 컴ㅗ넌트에 동일하게 적용돼야 하는 공통 기능을 코드 중복 없이 사용할 수 있다.
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