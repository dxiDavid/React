import Data from "./data"
import testAvatar from "./assets/avatar-angela-gray.webp"
import Notification from "./Notification"
import { useState } from "react"

export default function App(){

    return(
        <div className="container">
            <div className="header">
                <div className="title">
                    <h1>Notifications</h1>
                    <div>
                        <p className="notification-count">3</p>
                    </div>
                </div>
                <button className="mark-as-read">Mark all as read</button>
            </div>
            <div className="notifications">
                <div className="wrapper">
                {/*map over this section and turn it into a separate component*/}
                    <div className="notification-container">
                        <div className="avatar">
                            <img src={testAvatar} alt="avatar"/>
                        </div>
                        <div className="notification-content">
                            <div className="notification">
                                <p className="">
                                    <span className="avatar-name">Some Name</span> 
                                    <span className="notification-type">&nbsp; notification type</span> 
                                    <span className="dark-greyish-blue notification-reference">&nbsp; notification reference</span> 
                                </p>
                                <p className="notification-duration">1m ago</p>
                            </div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}