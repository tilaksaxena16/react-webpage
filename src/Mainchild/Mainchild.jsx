import React from "react";
import './Mainchild.css';

const Mainchild = () =>{

    return(
        <>
        <div className="main-container">
           <div className="main-child">
                <div className="sub-child div-margin">
                    <div className="num1">
                        <label className="center">1</label>
                    </div>
                    <div className="sub-child-div">
                        <h4>Account Type</h4>
                        <label>Setup Your Account Details</label>
                    </div>
                </div>
                <div className="sub-child">
                    <div className="num2">
                        <label className="center">2</label>
                    </div>
                    <div className="sub-child-div">
                        <h4>Account Settings</h4>
                        <label>Setup Your Account Setting</label>
                    </div>
                </div>
                <div className="sub-child">
                    <div className="num2">
                        <label className="center">3</label>
                    </div>
                    <div className="sub-child-div">
                        <h4>Bisiness Info</h4>
                        <label>Your Business Related Info</label>
                    </div>
                </div>
                <div className="sub-child">
                    <div className="num2">
                        <label className="center">4</label>
                    </div>
                    <div className="sub-child-div">
                        <h4>Billing Details</h4>
                        <label>Set Your Payment Methods</label>
                    </div>
                </div>
                <div className="sub-child">
                    <div className="num2">
                        <label className="center">5</label>
                    </div>
                    <div className="sub-child-div margin-div">
                        <h4>Completed</h4>
                        <label>Woah, we are here </label>
                    </div>
                </div>
            </div>
            <div className="main-right-div">
                <div className="div-child">
                    <div className="child-dis">
                    <h2 className="h2-col">Choose Account Type</h2><i class="fa-solid fa-circle-exclamation logo-div"></i>
                    </div>
                    <p className="p-col">If you need more info,please check out<span className="span">Help Page.</span></p>
                </div>
                <div className="main-center-div">
                    <div className="main-center-div-left">
                        <div>
                        <i class="fa-solid fa-file-invoice logo-size"></i>

                        </div>
                        <div>
                            <h6 className="font-size-div">Personal Account</h6>
                            <p className="font-size-child">If you need more info, please
                                check it out
                            </p>
                        </div>
                    </div>
                    <div className="main-center-div-right">
                        <div>
                        <i class="fa-solid fa-suitcase logo-size"></i>

                        </div>
                        <div>
                        <h6 className="font-size-div">Corporate Account</h6>
                            <p className="font-size-child">Create corporate account to mane users</p>
                        </div>
                    </div>
                </div>
                <div className="main-side-child-button">
                    <label className="label-justify">Continue</label><i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            
        </div>   
        </>
    )
}

export { Mainchild }
