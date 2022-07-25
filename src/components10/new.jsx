import React from 'react';

export default function New(props){

    const [show, setshow] = React.useState(false)

    function showHide(){
        console.log(show)
        setshow(prev => !prev)

    }

    return(
        <div className="new">
            <h3>{props.name}</h3>
            {show && <p>{props.about}</p>}
            <button onClick={showHide} className='btn3'>{show ? "Hide About" : "Show About"}</button>
            <hr />
            <br />
        </div>
    )
}