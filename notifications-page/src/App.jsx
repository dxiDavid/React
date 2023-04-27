import data from "./data"
import { useState } from "react"

export default function App(){

    const [notifications, setnotifications] = useState(data)

    return(
        <div className="container">
            <div className="header">
                <div className="title">
                    <h1>Notifications</h1>
                    <div>
                        <p className="notification-count">{notifications && notifications.filter(n => n.isRead).length}</p>
                    </div>
                </div>
                <button className="mark-as-read">Mark all as read</button>
            </div>
            <div className="notifications">
                <div className="wrapper">

                    { notifications.map(item => {
                        return (
                            <div className="notification-container" key={item.id}>
                                <div className="notification-header">
                                <a href="#">
                                    <img src={item.profile_picture} className="avatar" alt={item.name}/>
                                </a>
                                <div className="notification-content">
                                    <div className="notification">
                                        <p className="notification-text">
                                            <a href="#" className="avatar-name">{item.name}</a> 
                                            {item.notificationType.isReaction && <span className="notification-type">&nbsp; Reacted to your recent post</span>} 
                                            {item.notificationType.isComment && <> <span className="notification-type">&nbsp; commented on your picture</span> </>} 
                                            {item.notificationType.isPrivateMesage && <span className="notification-type">&nbsp; sent you a private message</span>} 
                                            {item.notificationType.isNewFollower && <span className="notification-type">&nbsp; Followed you</span>}  
                                            {item.notificationType.isJoinedARelatedGroup && <span className="notification-type">&nbsp; Has joined your group</span>} 
                                            {item.notificationType.isLeftRelatedGroup && <span className="notification-type">&nbsp; left the group</span>} 
                                            {item.notificationType.isComment 
                                                ? <div><a href="#"><img className="post" src={item.notificationReference} alt="post"/></a></div>
                                                :   <a href="#" className="dark-greyish-blue notification-reference">&nbsp;
                                                        {item.notificationReference}
                                                    </a> 
                                            }
                                        </p>
                                        <p className="notification-duration">{item.howLongAgo}</p> 
                                    </div>
                                    {item.isRead && <div className="dot"></div>}
                                </div>
                                </div>
                                {item.notificationType.isPrivateMesage && <a href="#" className="private-message">{item.message}</a>}
                            </div>
                        )
                    }) }

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