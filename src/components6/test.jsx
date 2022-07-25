import React from 'react';

export default function Test(){
    const [toggle, setToggle] = React.useState(false)
    let res = toggle ? "Yes" : "No"

    function change(){
        setToggle(change_el=> !change_el)
        // setToggle(true)
    }


    return(
        <div>
            <h1>Toggle the button</h1>
            <button className='btn5' onClick={change}>{res}</button>
        </div>
    )
}