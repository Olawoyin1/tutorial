import React from 'react';
import {BrowerRouter as Router, Routes , Route} from "react-router-dom";



export default function MainRoute(){
    return(
        <Router>
            <Routes>
                
                    <Route path='/' element={<h1>Hello Route</h1>}/>
                
            </Routes>
        </Router>
    )
}