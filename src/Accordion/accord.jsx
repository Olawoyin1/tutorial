import React from 'react';
import Item from './items';
import question from './question';

export default function Accord(){

   

    const accords = question.map(item => {
       return ( 
            <Item 
                key={item.id}
                {...item}
            />
       )
    })



    return(
        <div>
            {/* <h3>Accordion Loading...</h3> */}
            {accords}
        </div>
    )
}