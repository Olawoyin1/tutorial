import React from 'react';
import './form.css'


export default function Form(){
    
    const [formData,setFormData] = React.useState(
        {
            username: "",
            email: "",
            phone: "",
            isOnline: false
        }
    )

    function handleChange(e){
        // console.log(e)
        const {name, value, type, checked} = e.target
        // let name = e.target.name
        // console.log(name)
        // console.log(value)
        // console.log(type)
        // console.log(checked)

        setFormData(prevState=>{
            return {
                ...prevState,
                [name] : type ==  "checkbox" ? checked : value 
            }
        })
    }

    console.log(formData)

    return(
        <div className="form">
            <form action="">

                <div className="fields">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder='Username here...'
                        onChange={handleChange}    
                        name="username"
                        className='input'
                        value={formData.username}
                    />
                </div>
                
                <div className="fields">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text" 
                        placeholder='Phone here...'
                        onChange={handleChange}    
                        name="phone"
                        className='input'
                        value={formData.phone}
                    />
                </div>

                <div className="fields">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder='email here...'
                        onChange={handleChange}
                        name="email"
                        className='input'
                        value={formData.email}
                    />
                </div>

                <div className="fields flex">
                    <input 
                        type="checkbox"
                        name="isOnline" 
                        id="isOnline" 
                        checked={formData.isOnline}
                        onChange={handleChange}
                    />
                    <label className='last' htmlFor="isOnline">Online</label>
                </div>

                <button className="form_btn">Submit</button>
            </form>
        </div>
    )
}