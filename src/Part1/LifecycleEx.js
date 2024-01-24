import React, { Component } from 'react';

class LifecycleEx extends Component
{
    static getDerivedStateFromProps(props, state)
    {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {tmp_state: props.prop_value};
    }

    constructor(props)
    {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    // If tmp_state2 is true, then the React invokes the "render"
    // If tmp_state2 is false, then the React will not invoke "render"
    componentDidMount()
    {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state: ' + this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props, state)
    {
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2;
    }

    render()
    {
        console.log('3. render call');
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>            
        )
    }
}

export default LifecycleEx;