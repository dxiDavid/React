import data from "./data"
import Notification from "./Notification"
import { useState } from "react"

export default function App(){

    const [isRead, setIsRead] = useState(data)

    function toggleRead(index){
        //Make a function that loops through the list of items and  checks whether a notification has been read
    }
    

    const notification = data.map((item, index) => {
        return(
            <Notification 
                key = {item.id}
                name = {item.name}
                profile_picture = {item.profile_picture}
                notificationReference = {item.notificationReference}
                howLongAgo = {item.howLongAgo}
                isRead = {isRead}
                index = {index}
                handleClick = {() => toggleRead(index)}
            />
        )
    })

    return(
        <div className="container">
            <div className="header">
                <div className="title">
                    <h1>Notifications</h1>
                    <div>
                        <p className="notification-count">{data.length}</p>
                    </div>
                </div>
                <button className="mark-as-read">Mark all as read</button>
            </div>
            <div className="notifications">
                <div className="wrapper">

                    { notification }

                </div>
            </div>
        </div>
    )
}

/*
    Make a datastructure that stores unread notifications
    Each notification should have a function that clears it from that data structure
    Render each notification reference conditionally with the appropriate context
    Make the notification count update with the data structure

*/