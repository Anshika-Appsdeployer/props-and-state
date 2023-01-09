import React, { useState } from 'react'

function B(props){
    const [, setCountA] = useState(props.valueA);
    const [, setCountB] = useState(props.valueB);
    return(
        <>
        <h2>B.js Buttons</h2>
        <p>Value of A on Decreasing by 1: {props.countA}</p>
        <button onClick={() =>setCountA(prev=>prev-1)}>Decrement A</button>

        <p>Value of B on Decreasing by 1: {props.countB}</p>
        <button onClick={() =>setCountB(prev=>prev-1)}>Decrement B</button>
        </>
    )
}

export default B;