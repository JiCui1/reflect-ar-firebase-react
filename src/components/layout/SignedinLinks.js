import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return (

            <ul className="nav_right">
                <li><NavLink to='/'  className="create_btn links">Create</NavLink></li>
                <div className="nav_right_right">
                    <li><NavLink to='/' style={{ textDecoration: 'none', color:"rgb(85,85,85)" }} className="links">Log Out</NavLink></li>
                    <li><NavLink to='/' style={{ textDecoration: 'none', color:"rgb(85,85,85)" }} className="links">Projects</NavLink></li>
                    <li><NavLink to='/' className="profile_btn">NN</NavLink></li>
                </div>
            </ul>

    )
}



export default SignedInLinks