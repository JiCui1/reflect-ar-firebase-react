import React from 'react' 
import SignedInLinks from './SignedinLinks'
import NavLeft from './NavLeft'

const NavBar=()=>{
    return(
        <nav className="nav-wrapper white darken-3">
            <div className="container">
                <NavLeft />
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default NavBar