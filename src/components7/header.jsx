import React from 'react';
import { useState } from 'react';


export default function Header(props){
   
    return(
        <header>
            <p>Current User : {props.name}</p>
        </header>
    )
}