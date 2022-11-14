import React from "react";
import './Chat.css';

const Chat = () =>{

    return(
        <>
            <div className="page">
                <div>
                    <i class="fa-solid fa-message padding30"></i>
                    <label className="padding">Chat</label>
                </div>
                <div>
                    <i class="fa-solid fa-angle-down padding-right25"></i>
                </div>
            </div>
        </>
    )
}

export { Chat }