
import data from "./data"

function Notification_Template(props){

  return(
      <div className="notification-container">
        <div className="profile-picture">
          <img src={props.profile_picture} alt="profile-picture"/>
        </div>
        <div className="notification-content">
          <div className="notification-details">
            <div className="profile-name">
              <p>{props.name}</p>
            </div>
            <div className="notification-type">
              {/*Conditional rendering for the notification type*/}
              <p>{props.notificationType}</p>
            </div>
            <div className="notification-reference">
              {/*Implement conditional rendering for image reference*/}
              <p>{props.notificationReference}</p>
              <div className="red-dot"></div>
            </div>
          </div>
          <div className="notification-time">
            <p>
              {/*write a function that calculates 
              the amount of time that has passed since 
              the notification was shared*/}
            </p>
          </div>
        </div>
      </div>
  )
}

function singleNotification() {

  const dataElements = data.map( notification_item => {
    return <Notification_Template 

              name = {notification_item.name}
              notificationType = {notification_item.notificationType}  
              notificationReference = {notification_item.notificationReference}
              profile_picture = {notification_item.profile_picture}
              />
  } )

  return(
    <div>
        {dataElements}
    </div>
  )
}

export default singleNotification
