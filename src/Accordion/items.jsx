import React from 'react';
import './style.css'

export default function Item(props){
    console.log(props)

    const  [toggle, setToggle] = React.useState(true)

    function toggleBtn(){
        setToggle(!toggle)
    }


    return(
        <div className='accordion'>
            <div className="flex padd">
                <h3>{props.question}</h3>
                <button onClick={toggleBtn} className="ac_btn">
                    {toggle ? "+" : "-"}
                </button>
            </div>
            {toggle && <div className="answerl padd">
                <p>{props.answer}</p>
            </div>}
        </div>
    )
}