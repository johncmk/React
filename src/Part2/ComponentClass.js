import React, { Component } from 'react'


/**
 * props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용한다. props를 전달받은 자식
 * 컴포넌트에서는 데이터를 수정할 수 없다. 데이터를 변경하기 위해서는 컴포넌트 내부에서만 사용하는
 * 변수에 값을 넣어 사용해야한다.
 * 
 * Props를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용했다면, state는 하나의
 * 컴포넌트 안에서 전역 변수처럼 사용한다.
 */
class ComponentClass extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', { react: '200' }]
        }
    }

    buttonClick = (type) =>
    {
        console.log('buttonClick() 실행')
        if (type === 'String')
        {
            this.setState({StateString: 'react'})
        }
        else
        {
            this.setState({ StateArrayObj: ['react', { react: '200'}]})
        }
    }

    render()
    {
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObjet')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default ComponentClass;