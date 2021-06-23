import React from 'react' 
import { Link } from 'react-router-dom'

const NavLeft = () =>{
    return(
        <ul >
            <Link to="/">
            <li className="pink-text">LOGO</li>
            <li className="pink-text">Reflect AR</li>
            </Link>
        </ul>
    )
}

export default NavLeft