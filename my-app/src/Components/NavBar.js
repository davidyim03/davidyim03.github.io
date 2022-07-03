import React from "react"
import { Link } from "react-router-dom";

function NavBar () {    
    return (
      <div>
        <ul className="navbar">
          <li>
            <Link to="/" className="navbarlist">David Yim</Link>
          </li>
          <div style={{display: "flex", justifyContent:"space-evenly"}}>
            <li>
                <Link to="/about" className="navbarlist">About</Link>
            </li>
            <li>
                <Link to="/projects" className="navbarlist">Projects</Link>
            </li>
            <li>
                <Link to="/resume" className="navbarlist">Resume</Link>
            </li>
          </div>
        </ul>
      </div>
    );
  
  }

export default NavBar