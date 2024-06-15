import React from "react";

import '../Css/NavBar.scss';
import { logo } from "../Assets";
const NavBar = () => {
    return(
        <div className="navbar_div">
            <div className="logo_div_navbar">
                <img src={logo}/>
            </div>
            <div className="tab_div">
                <li><a href="/">Home</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Template</a></li>
            </div>
        </div>
    )
}

export default NavBar