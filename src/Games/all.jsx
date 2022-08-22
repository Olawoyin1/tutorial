import React from 'react';
import './style.css'

export default function All(props){
    return(
        <div className="image">
            <div className="image_b">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <p className='category'>{props.category}</p>
                <div className="space">
                    <h3>{props.name}</h3>
                    <p className='price'>{props.price}</p>
                </div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}