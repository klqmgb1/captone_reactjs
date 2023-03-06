import React, {useReducer} from 'react'
import { Button } from 'antd';

const initialState = {
    number : 0
}

const reducer = (state, action) =>{
    switch (action.type) {
        case "decrement":
            return {number: state.number - 1}
        case "indecrement":
            return {number: state.number + 1}
        default:
            return {...state}
    }
}

export default function DemoUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div>
        <Button type='primary' onClick={()=>{
            dispatch({type: "decrement"})
        }}>-</Button>
        <span >{state.number}</span>
        <Button type='primary' onClick={()=>{
            dispatch({type: "indecrement"})
        }}>+</Button>
    </div>
    </div>
  )
}
