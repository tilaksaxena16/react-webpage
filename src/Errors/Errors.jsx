import React from "react";
import './Errors.css'

const Errors = () =>{

    return(
        <>
        <div className="page">
                <div>
                <i class="fa-solid fa-circle-xmark padding30"></i>
                    <label className="padding">Pages</label>
                </div>
                <div>
                    <i class="fa-solid fa-angle-down padding-right25"></i>
                </div>
            </div>
        
        </>
    )
}

export { Errors }