import React, { useState } from 'react';
import boxes from './boxes';
import Box from './box'
// import boxes

export default function Show(){
    const [box, setBoxes] = useState(boxes)

    const square = box.map(item => (
        <Box 
            on={item.on}
            id={item.id}
        />
    ))


    // const square = box.map(item => (
    //     <div className='box' key={item.id}>
    //         {item.on}
    //     </div>
    // ))
    
    // console.log(square)


    return(
        <div>
            <h1>show function rendered </h1>
            <p>{square}</p>
        </div>
    )
}