

function Notification(props){

  return(
    <div className="notification-container">
      <div className="avatar">
          <img src={props.profile_picture} alt="avatar"/>
      </div>
      <div className="notification-content">
          <div className="notification">
              <p className="">
                  <a href="#" className="avatar-name">{props.name}</a> 
                  <span className="notification-type">&nbsp; Notification reference</span> 
                  <a href="#" className="dark-greyish-blue notification-reference" onClick={props.handleClick}>&nbsp; {props.notificationReference}</a> 
              </p>
              <p className="notification-duration">{props.howLongAgo}</p>
          </div>
          <div className={props.isRead === props.index ? " " : "dot"}></div>
      </div>
    </div>
  )
}

export default Notification
