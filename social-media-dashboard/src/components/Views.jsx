

export default function Views(props){
    return(
        <div className={`activity-stat activity-stat-${props.index}`}>
                <div className="platform">
                  {props.name === "twitter" && <p>Retweets</p>}
                  {props.name === "instagram" && <p>Profile views</p>}
                  {props.name === "youtube" && <p>Total views</p>}
                  {props.name === "facebook" && <p>Page views</p>}
                  <img className="logo" src={props.logo} alt={props.name}/>
                </div>
                <div className="activity-stats-values">
                  <p className="activity-value">{props.activity}</p>
                  <div className="activity-stat-change">
                    {props.activityChangeIsPositive ? <img src="./assets/icon-up.svg" alt="arrow-up"/> : <img src="./assets/icon-down.svg" alt="arrow-down"/>}
                    <p className={props.activityChangeIsPositive ? "activity-change-text positive" : "activity-change-text negative"}>
                      {props.activityChange}
                    </p>
                  </div>
                </div>
              </div>
    )
}