import React from 'react';
import axios from 'axios';

export default function Newest(){
    // const [count, setCount] = React.useState(0)
    // const [toggle, setToggle] = React.useState(true)
    const [data, setData] = React.useState("")
    
    const [state, dispatch] = React.useReducer(reducer, {
        count : 0,
        toggle : true
    })

    React.useEffect(()=>{
        console.log("effect ran")
        const url = "https://jsonplaceholder.typicode.com/comments"
        axios.get(url)
            .then((response)=>{
                setData(response.data[0].email)
            })
    }, [])

    function reducer(state, action){
        switch(action.type){
            case "add":
                return{
                    count : state.count + 1,
                    toggle : state.toggle
                }
            case "toggle" :
                return{
                    count : state.count,
                    toggle : !state.toggle
                } 
            default :
                return state
        }
    }

    function add(){
        // setCount(prevCount => prevCount + 1)
        // setToggle(prev => !prev)
        dispatch({type : "add"});
        dispatch({type : "toggle"})
    }

    const styles = {
        backgroundColor :  state.toggle ? "red" : "white"

    }

    return(
        <div className='newest'>
            <h3>{state.count}</h3>
            <button className='btn3 newbtn' onClick={add}>Add & toggle box</button>
            <div className="box" style={styles}></div>

            <div>
                {data}
            </div>
        </div>
    )
}