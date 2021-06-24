import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="nav_right">
            <li><NavLink to='/' style={{ textDecoration: 'none' }} className="create_btn">Create</NavLink></li>
            <div class="nav_right_right">
                <li><NavLink to='/' style={{ textDecoration: 'none', color:"rgb(85,85,85)" }} className="grey-text">Log Out</NavLink></li>
                <li><NavLink to='/' style={{ textDecoration: 'none', color:"white"}} className="profile_btn">NN</NavLink></li>
            </div>
        </ul>
    )
}

export default SignedInLinks