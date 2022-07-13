import React from 'react'
import ReactDOM from 'react-dom';


function Header(){
    return(
        <div className='header'>
            <h3>Logo</h3>
            <ul className='lists'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </div>
    )
}

export default Header;