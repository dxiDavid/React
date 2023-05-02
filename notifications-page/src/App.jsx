
import { useState, useEffect } from "react"
import data from "./data.jsx"

export default function App(){

    const [notifications, setNotifications] = useState(data)

    function markAsRead(id){
       setNotifications(prev => prev.map(item => (
            item.id === id ? {...item, isUnread: false} : item
       )))
    }

    function markAllAsRead(id){
        setNotifications(prev => prev.map(item => ({...item, isUnread: false})))
    }

    return(
        <div className="container">
            <div className="header">
                <div className="title">
                    <h1>Notifications</h1>
                    <div>
                        <p className="notification-count">{notifications && notifications.filter(n => n.isUnread).length}</p>
                    </div>
                </div>
                <button className="mark-as-read" onClick={markAllAsRead}>Mark all as read</button>
            </div>
            <div className="notifications">
                <div className="wrapper">

                    {notifications && notifications.map(item => {
                        return (
                            <div className={item.isUnread ? "notification-container" : "notification-container notification-read"} key={item.id} onClick={() => markAsRead(item.id)}>
                                <div className="notification-header">
                                <a href="#" aria-label="Visit Profile">
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
                                            {item.notificationType.isComment ? <></> : <a href="#" aria-label="visit" className="dark-greyish-blue notification-reference">&nbsp;{item.notificationReference}</a>}
                                        </p>
                                        <p className="notification-duration">{item.howLongAgo}</p> 
                                    </div>
                                    {item.isUnread && <span className="dot"></span>}
                                    {item.notificationType.isComment 
                                        && 
                                        <a href="#" aria-label="visit" className="dark-greyish-blue notification-reference post-reference">&nbsp;
                                            <img className="post" src={item.notificationReference} alt="post"/>
                                        </a>}
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


// For JSON server and fake API

 // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const res = await fetch("http://dist/db.json");
    //         if(!res.ok){
    //           throw new Error('prob, bob')
    //         }
    //         const json = await res.json();
    //         setNotifications(json);
    //       } catch (err) {
    //         console.log(err.message);
    //       }
    //     }
    //     fetchData();
    //   }, [])