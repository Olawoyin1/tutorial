import React from 'react';
import data from './data';
import Showcase from './showcase';


export default function Reviews(){
    const userData = data
    const [index, setIndex] = React.useState(0)
    const {image,name,id,about,mail} = userData[index]

    function checkNumber(number){
        if(number > data.length - 1){
            return 0
        }
        if(number < 0){
            return data.length - 1
        }
        return number

    }

    function add(){
        setIndex(prev => {
            return checkNumber(prev + 1)
        })
    }
    
    function minus(){
        setIndex(prev =>{
            return checkNumber(prev - 1)
        })
    }

    function random(){
        let randNum = Math.floor(Math.random() * data.length)
        console.log(randNum)

        if(randNum === index){
            randNum = index + 1
        }

        setIndex(checkNumber(randNum))

    }

    // const user = data.map(item=>{
    //     return (<Showcase 
    //         image={item.image}
    //         name={item.name}
    //         key ={item.id}
    //         about={item.about}
    //         mail={item.mail}
    //     />)
    // })

    return(
        <div className='body'>
            <h3 className='underlined'>Our Reviews</h3>
            <div className='review_container'>
                <div className="photo">
                    <img src={image} alt="" />
                </div>
                <div className="review_content">
                    <h3>{name}</h3>
                    <p className='muted'>{mail}</p>
                    <p className="about_user">{about}</p>
                </div>
                <div className="icons">
                    <button className='icn_btn' onClick={minus}>
                        <i className="uil uil-angle-left-b"></i>
                    </button>
                    <button className='icn_btn'  onClick={add}>
                        <i className="uil uil-angle-right-b"></i>
                    </button>
                </div>
                <button className='btn3' onClick={random}>Random</button>
        </div>
        </div>
    )
}