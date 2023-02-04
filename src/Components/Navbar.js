import React from 'react'
import { Link} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor:"#f7f5fd" }} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Piyush</Link>
               

                    
                        <Link className="btn btn-primary mx-1" to="/" role="button">Logout</Link>
                   
                
            </div>
        </nav>
    )
}

export default Navbar
