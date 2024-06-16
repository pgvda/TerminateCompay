import React, { useState } from "react";

import '../Css/NavBar.scss';
import { logo } from "../Assets";
import Modal from "./Modal";
const NavBar = () => {

    const [showModal, setShowModal] = useState(false)

    const warningPopup = () => {
        setShowModal(true);
        
        alert("This website under the developing .So, You can't access this tab ..!")
    }

    const closeWarningPopup = () => {
        setShowModal(false)
    }
    return(
        <div className="navbar_div">
            <div className="logo_div_navbar">
                <img src={logo}/>
            </div>
            <div className="tab_div">
                <li><a href="/">Home</a></li>
                <li><a href="/project" >Project</a></li>
                <li><a href="" onClick={warningPopup}>About</a></li>
                <li><a href="" onClick={warningPopup}>Template</a></li>
            </div>

        </div>

        
    )
}

export default NavBar