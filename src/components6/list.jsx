import React from 'react';

export default function List() {
    
    const [todos,setTodos] = React.useState(
        ["Todo 1", "Todo 2"]
    )

    let todo = todos.map((item) => {
        return <p>{item}</p>
    })

    function addToList(){
        setTodos(prevstate =>{
            return(
                [...prevstate, `Todo ${prevstate.length + 1}`]
            )
        })
        console.log(todo)
    }
    return(

        <div  className="todo_container">
            <h3>Add to List</h3>
            <button className='btn3' onClick={addToList}>Add Todo</button>
            <ul>{todo}</ul>
        </div>
    )
    
}