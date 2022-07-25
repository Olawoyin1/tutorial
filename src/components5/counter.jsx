import React from 'react';

export default function Counter(){

    const [count, setCount] = React.useState(0)

    function add(){
        setCount((prevCount)=>{
            return prevCount + 1
        })
    }
    
    function subtract(){
        setCount(prevCount => prevCount - 1)
    }

    return(
        <div className="counter">
            <p className='count-el'>{count}</p>
            <button className='btn' onClick={subtract}>-</button>
            <button className='btn btn2' onClick={add}>+</button>
        </div>
    )
}