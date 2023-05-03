

export default function Followers(props){
   
    let borderClass;
    switch (props.name) {
      case "facebook":
        borderClass = "border-class facebook-blue";
        break;
      case 'twitter':
        borderClass = "border-class twitter-blue";
        break;
      case 'instagram':
        borderClass = "border-class instagram-gradient";
        break;
      case 'youtube':
        borderClass = "border-class youtube-red";
        break;
      default:
        borderClass = "border-class";
    }

  return(
    <div className={borderClass} key={props.index}>
        <div className="follower-stat">
          <div className="profile">
            <img className="logo" src={props.logo} alt={props.name}></img>
            <p className="username">{props.username}</p>
          </div>
          <div >
          <p className="follower-count">
            <span className="follower-number">{props.followers}</span>
            {props.name === "youtube" ? <span className="followers-text">Subscribers</span> :<span className="followers-text">Followers</span>}
          </p>
        </div>
        <div className="follower-change">
          {props.followerChangeIsPositive ? <img src="./assets/icon-up.svg"/> : <img src="./assets/icon-down.svg"/>}
          <p className={props.followerChangeIsPositive ? "follower-change-text positive" : "follower-change-text negative"}>
            {props.followerchange} Today
          </p>
        </div>
        </div>
    </div>
  )
}