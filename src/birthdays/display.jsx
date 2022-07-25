import React from 'react';

// console.log("display page rendered")

export default function Display(props){
    return(
        // <h3>{props.name}</h3>
        <div className="birthday">

            <div className="b_lists">
                <div className="flex">
                    <div className="photo">
                        <img 
                            src={props.image} 
                            alt="" 
                        />
                    </div>
                    <div className="names">
                        <h4>{props.name}</h4>
                        <p>{props.mail}</p>
                        <p>{props.age} years</p>
                    </div>
                </div>
            </div>

        </div>
    )
}