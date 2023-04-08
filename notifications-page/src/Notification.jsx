import data from "./data"

function Notification_Template(props){

  return(
      <div className="notification-container">
        <div className="profile-picture">
          <img src={ props.profile_picture } alt="profile-picture"/>
        </div>
        <div className="notification-content">
          <div className="notification-details">
            <div className="profile-name">
              <p>{ props.name }</p>
            </div>
            <div className="notification-type">
              {props.notificationType.isReaction ===true && <p>reacted to your recent post {props.notificationReference}</p>}
              {props.notificationType.isNewFollower ===true && <p>followed you</p>}
              {props.notificationType.isJoinedARelatedGroup ===true && <p>joined your group {props.group}</p>}
              {props.notificationType.isLeftRelatedGroup ===true && <p>left the group {props.group}</p>}
              {props.notificationType.isPrivateMesage ===true && 
                <>
                  <p>sent you a private message</p> 
                  <div className="private-message"><p>{props.message}</p></div>
                </>}
              {props.notificationType.isComment ===true && <p>commented on your picture</p>}
            </div>
            <div className="notification-reference">
              {/*Implement conditional rendering for image reference*/}
              <p>{ }</p>
              <div className="red-dot"></div>
            </div>
          </div>
          <div className="notification-time">
            <p>
                {props.howLongAgo}
            </p>
          </div>
        </div>
      </div>
  )
}

function singleNotification() {

  const dataElements = data.map( notification_item => {
    return <Notification_Template 

              name = { notification_item.name }
              notificationType = { notification_item.notificationType }  
              notificationReference = { notification_item.notificationReference }
              profile_picture = { notification_item.profile_picture }
              //message = { notification_item.message }
              group = { notification_item.group }
              howLongAgo = { notification_item.howLongAgo }
              />
  } )

  return(
    <div>
        {dataElements}
    </div>
  )
}

export default singleNotification
