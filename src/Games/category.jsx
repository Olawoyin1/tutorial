import React from 'react';
// import Item from '../Accordion/items';

export default function Category({ cat ,  filter }){
   

    return (
        <div className='categories'>
            {
                cat.map((item)=> {
                    return(
                        
                        <button 
                            key={item.id}
                            onClick={()=> filter(item)}
                             className='cat_btn'
                        >
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )

}