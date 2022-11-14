import React from "react";
import './Errors.css'

const Errors = () =>{

    return(
        <>
            <div className="page1">
                <div>
                    <i class="fa-solid fa-circle-xmark padding30"></i>
                    <label className="padding">Errors</label>
                </div>
                <div>
                    <i class="fa-solid fa-angle-down padding-right25"></i>
                </div>
            </div> 
        </>
    )
}

export { Errors }