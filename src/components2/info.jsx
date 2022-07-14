import React from 'react';
import ReactDOM from 'react-dom';
// import user_img from '../Images/user.jpg';


export default function Info(){
    return(
        <div className='info'>
            <div className='info-image'>
                <img src="Images/user.jpg" alt="user_image" />
            </div>
            <h3 className='bold'>Olawoyin Gbolahan</h3>
            <p>Frontend Developer</p>
            <small>olawoyingbolahan@gmail.com</small>
            <div className='follow'>
                <a href="" className='links'>
                    <i className='uil uil-envelope'></i>
                    <p>Email</p>
                </a>
                <a href="" className='links linked'>
                    <i className='uil uil-linkedin'></i>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}