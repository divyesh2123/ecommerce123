import React from 'react'
import { DecrementAction, IncrementAction } from './action';
import { Increment } from './constant';
import { useDispatch,useSelector } from 'react-redux';

export default function Counter() {

    const myDistpatch = useDispatch();

    const counter = useSelector(y=>y);


    const myIncrement = ()=> {
myDistpatch(IncrementAction());

    }
    const myDecrement = ()=> {
        myDistpatch(DecrementAction());
    }

  return (
    <div>
            {counter}
        <button onClick={myIncrement}>+</button>
        <button onClick={myDecrement}>-</button>
        <button></button>
    </div>
  )
}
