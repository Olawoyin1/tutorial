import React from 'react';
import './style.css'

export default function TourComp(){

    console.log('TourComp rendered')

    return(
        <div className="tours">
            <div className="tour">
                <div className="tour_image">
                    <img src="" alt="Tour image" />
                </div>
                <div className="tour_content">
                    <div className="flex">
                        <h3>Name</h3>
                        <p className="price">$1,129.00</p>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem harum, saepe temporibus placeat odio animi eos fuga numquam! Facere sit harum dolore, tempora, repellendus dignissimos voluptate veritatis libero cupiditate blanditiis rem impedit! Ratione nemo odio, perspiciatis nulla fugit earum quas.</p>
                    <button className='btn3'>Not Interested</button>
                </div>
            </div>
        </div>
    )
}