import data from "./data"

function Notification_Template(props){

  return(
      <div className="notification-container">

        <div className="profile-picture">
          <img src={ props.profile_picture } alt="profile-picture"/>
        </div>
        <div className="notification-content">
            
            <div className="notification-details">
            <p className="notification-header">
                <span>{ props.name }</span> 

                {
                  props.notificationType.isReaction ===true && 
                  <>
                    <span className="notification-type">reacted to your recent post</span>
                    <span className="notification-reference">{props.notificationReference}</span>
                  </>
                }

                {
                  props.notificationType.isNewFollower ===true && 
                  <><span className="notification-type"></span>followed you</>
                }

                {
                  props.notificationType.isJoinedARelatedGroup ===true && 
                  <>
                    <span className="notification-type">joined your group</span> 
                    <span className="notification-reference">{props.group}</span>
                  </>
                }

                {
                  props.notificationType.isLeftRelatedGroup ===true && 
                  <>
                    <span className="notification-type">left the group</span> 
                    <span className="notification-reference">{props.group}</span>
                  </>
                }

                { 
                  props.notificationType.isPrivateMesage ===true && 
                  <>
                    <p>sent you a private message</p> 
                    <div className="private-message"><p>{props.message}</p></div>
                  </>
                }

                {
                  props.notificationType.isComment ===true && 
                  <>
                    <span className="notification-type">commented on your picture</span>
                    <span className="notification-reference">{props.notificationReference}</span>
                  </>
                }
            </p>

                <div className="red-dot"></div>
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
