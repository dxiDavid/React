

export default function Likes(props){
    return(
        <div className={`activity-stat like-stat-${props.index}`}>
        <div className="platform">
          <p>Likes</p>
          <img className="logo" src={props.logo} alt={props.name}/>
        </div>
        <div className="activity-stats-values">
          <p className="activity-value">{props.likes}</p>
          <div className="activity-stat-change">
            {props.likeChangeIsPositive ? <img src="./assets/icon-up.svg"/> : <img src="./assets/icon-down.svg"/>}
            <p className={props.likeChangeIsPositive ? "activity-change-text positive" : "activity-change-text negative"}>
              {props.likeChange}
            </p>
          </div>
        </div>
      </div>
    )
}