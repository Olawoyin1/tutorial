import React from 'react';

export default function Card(props){
    // console.log(props);
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.about}</p>
            <hr />
        </div>
    )
}