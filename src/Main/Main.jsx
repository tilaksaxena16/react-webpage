import React from "react";
import './Main.css';

const Main = () =>{

    return(
        <>
        <div>
            <div className="main-item">
                <div>
                    <h4 className="font">Vertical</h4>
                    <label>wizards - vertical</label>
                </div>
                <div className="child-div">
                    <div className="main-child1">
                    <i class="fa-solid fa-filter filter"></i>
                    <label>Filter</label>
                    </div>
                    <div className="main-side-child">
                        <label>Create</label>
                    </div>

                </div>
            </div>    
        </div>
        
        </>
    )
}

export { Main }