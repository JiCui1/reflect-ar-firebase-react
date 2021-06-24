import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="nav_right">
            <li><NavLink to='/' style={{ textDecoration: 'none', color:"rgb(85,85,85)" }} className="grey-text">Sign Up</NavLink></li>
            <li><NavLink to='/' style={{ textDecoration: 'none', color:"rgb(85,85,85)" }} className="grey-text">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks