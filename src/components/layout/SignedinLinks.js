import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/' className="pink-text">Create</NavLink></li>
            <li><NavLink to='/' className="grey-text">Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks