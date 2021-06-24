import React from 'react' 
import { Link, NavLink } from 'react-router-dom'

const NavLeft = () =>{
    return(
        <ul className="nav_left">
            <Link to="/" style={{ textDecoration: 'none', display:"flex", alignItems:'center' }}>
                <li><img src='/reflectLogo.png' className="logo_img" alt="logo"></img></li>
                {/* <li>Reflect AR</li> */}
            </Link>

            
        </ul>
    )
}

export default NavLeft