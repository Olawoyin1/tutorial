import React from 'react';
import Display from './display';
import list from './list';

export default function Main(){
    const [birthday, setBirthday] = React.useState(list)

    const names = birthday.map(item => {
        return(
            <Display
                name={item.name}
                image={item.image}
                mail={item.mail}
                age={item.age}
            />
        )
    })
    // console.log(names)

    function clearAll(){
        setBirthday([])
    }

    return(
        <div className='bday'>
            <div className="header">
                <h3>{names.length} Birthdays Today</h3>
            </div>
            <div className="main">
                {names}
            <button 
                onClick={clearAll}
                className="bbtn"
            >Clear All</button>
            </div>
        </div>
    )
}