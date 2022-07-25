import React from 'react';


export default function User(props){
    return(
        <div className="card">

            <div className='user'>
                <div className='user_photo'>
                    <img src={props.image} alt="" />
                </div>
                <div className='user_about'>

                    <h3>
                        <i className='uil uil-user'></i>&nbsp;
                        {props.name}
                    </h3>

                    <p>
                        <i className='uil uil-suitcase'></i>&nbsp;
                        {props.stack}
                    </p>

                    <p>
                        <i className='uil uil-graduation-cap'></i>&nbsp;
                        {props.course}
                    </p>

                    <p>
                        <i className='uil uil-envelope'></i> &nbsp;
                        {props.mail}
                    </p>

                    <p>
                        <i className='uil uil-link-h'></i>&nbsp;
                        {props.age}
                    </p>

                    <p>
                        <i className='uil uil-phone'> </i>&nbsp;
                        {props.phone}
                    </p>
                </div>
            </div>
        </div>
    )
}