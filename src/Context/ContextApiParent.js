import React from 'react'
import Children from './contextChildrenParent'

/**
 * props는 데이터가 부모에서 자식 컴포넌트로 단방향으로만 이동할 수 있다면
 * 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경할 수 있다.
 */

const { Provider, Consumer } = React.createContext();
export { Consumer }

class ContextApiParent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value)
    {
        this.setState({name : value})
    }

    render()
    {
        const content = { 
            ...this.state, 
            setStateFunc : this.setStateFunc
        }
        return (
            <Provider value={content}>
                <Children/>
            </Provider>
        )
    }
}

export default ContextApiParent;