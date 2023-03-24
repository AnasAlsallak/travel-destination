import React from "react";
import '../Header/Header.css';
import Navbar from "../Navbar/Navbar";


function Header (){
    return(
        <div className="head">
        <h1>My TOURS Website</h1>
        <Navbar />
        </div>
    )
}


export default Header;