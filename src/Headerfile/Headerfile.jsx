import React from "react";
import './Headerfile.css';

const Headerfile = () =>{


    return(
        <>
        <div className="header">
        <i class="fa-solid fa-angles-left"></i>
        <label className="header-font-size">Dashboard</label>
        <label className="header-font-size">Layout Builder</label>
        <label className="header-font-size">Crafted</label>
        <label className="header-font-size">Apps</label>
        <label className="header-font-size">Mega menu</label>


        </div>
        
        </>
    )
}

export { Headerfile }