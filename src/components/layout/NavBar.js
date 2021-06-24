import React from 'react' 
import SignedInLinks from './SignedinLinks'
import NavLeft from './NavLeft'
import SignedOutLinks from './SignedOutLinks'

const NavBar=()=>{
    return(
        <nav className="nav-home">
                <NavLeft />
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
        </nav>
    )
}

export default NavBar