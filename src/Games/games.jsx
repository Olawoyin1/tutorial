import React from 'react'
import data from './data'
import All from './all'
import './style.css';
import Category from './category'



export default function Games(){

    const categories = ["All", ...new Set (data.map(item => item.category))]


    const [games, setGames] = React.useState(data)
    const [catagory, setCatagory]  = React.useState(categories)


    function filterItem(category){
        if(category == 'All'){
            setGames(data)
            return
        }
        const newItem = data.filter(item => item.category === category)
        setGames(newItem)
    }


    const game = games.map(item=>{
        return (
            <All 
                key = {item.id}
                image={item.image}
                {...item}
            />
        )
    })

    return(
        <div className="games">
            <h1 className='bold'>Kaskid Games Collection</h1>
            <div className="all_list">
                <Category 
                    cat={categories}
                    filter={filterItem}
                />
            </div>
            <div className="grid">
                {game}
            </div>
        </div>
    )
}