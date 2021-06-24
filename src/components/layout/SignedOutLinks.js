import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="nav_right_signed_out">
            <li><NavLink to='/'  className="create_btn links">Sign Up</NavLink></li>
            <li><NavLink to='/' style={{ textDecoration: 'none', color:"rgb(85,85,85)" }} className="links">Login</NavLink></li>
        </ul>
    )
}

// style={{ textDecoration: 'none', color:"rgb(255, 0, 149)", fontWeight: 'bold', }}

export default SignedOutLinks