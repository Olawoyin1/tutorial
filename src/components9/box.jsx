import React from 'react';
import boxes from './boxes';


export default function Box(props) {
    const [change, setChange] = React.useState(boxes)

   function toggle(id){
    setChange(prevBox =>{
        return prevBox.map((box)=>{
            return box.id === id ? {...box, on: !box.on} : box
        })
    })
   }

    const styles = {
        // backgroundColor: change ? "#000" : "#fff"
    }

    return(
        <div className="box" onClick={()=>toggle(props.on)} style={styles}></div>
    )
}