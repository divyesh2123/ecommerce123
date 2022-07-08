import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterCopy() {
    const counter = useSelector(y=>y);
  return (
    <div>{counter}</div>
  )
}
