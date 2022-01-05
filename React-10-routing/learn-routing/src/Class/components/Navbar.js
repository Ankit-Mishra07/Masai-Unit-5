import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about" style={{margin : "0 20px"}}>About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
        </div>
    )
}

export default Navbar
