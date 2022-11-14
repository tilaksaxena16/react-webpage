import React from "react";
import './Accounts.css';

const Accounts = () =>{

    return(
        <>
            <div className="page1">
                <div>
                    <i class="fa-solid fa-user padding30"></i>
                    <label className="padding">Accounts</label>
                </div>
                <div>
                    <i class="fa-solid fa-angle-down padding-right25"></i>
                </div>
            </div>
        </>
    )
}

export { Accounts }