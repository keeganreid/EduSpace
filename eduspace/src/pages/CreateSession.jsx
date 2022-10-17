import React from "react";
import {NavLink} from 'react-router-dom';

export default function CreateSession(){


    return(
    <div>
        <h1>Create your own study session</h1>
        <NavLink to='#' className='menu-bars'>
                Schedule a meeting
        </NavLink>

        <NavLink to='#' className='menu-bars'>
                Schedule an online meeting
        </NavLink>
        
    </div>
    )
} 