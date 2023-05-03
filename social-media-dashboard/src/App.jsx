import { useState } from "react"
import data from "./data"


function App() {

  const[followersStats, setFolowerStats] = useState(data)
  const[activityStats, setActivityStats] = useState(data)
  const[darkmode, setDarkMode] = useState()

  

  function toggleDarkMode(){
    console.log("toggled")
  }

  return (
    <>
      <div className="background"></div>
      <div className="container">
        <div className="header">
          <div className="dashboard-heading">
            <h1>Social Media Dashboard</h1>
            <p className="total-followers">Total Followers: 23,004</p>
          </div>
          <hr/>
          <div className="darkmode-toggle-div">
            <p className="darkmode-text">Dark Mode</p>
            <button type="button" onClick={toggleDarkMode}>
              <div className="circle"></div>
            </button>
          </div>
        </div>


        {/*_______________________________Followers___________________________*/}


        <div className="follower-stats-container">

          {followersStats && followersStats.map((item, index) => {

            let borderClass;
              switch (item.name) {
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
              <div className={borderClass} key={index}>
                  <div className="follower-stat">
                    <div className="profile">
                      <img src={item.logo} alt={item.name}></img>
                      <p className="username">{item.username}</p>
                    </div>
                    <div >
                    <p className="follower-count">
                      <span className="follower-number">{item.followers}</span>
                      {item.name === "youtube" ? <span className="followers-text">Subscribers</span> :<span className="followers-text">Followers</span>}
                    </p>
                  </div>
                  <div className="follower-change">
                    {item.followerChangeIsPositive ? <img src="./assets/icon-up.svg"/> : <img src="./assets/icon-down.svg"/>}
                    <p className={item.followerChangeIsPositive ? "follower-change-text positive" : "follower-change-text negative"}>
                      {item.followerchange} Today
                    </p>
                  </div>
                  </div>
              </div>
            )
          })}
        </div>

          <h2>Overview - Today</h2>

        <div className="activity-stats-container">


          {/*_________________Page / Profiles views and retweets______________________*/}


          {activityStats && activityStats.map((item, index) => {
            return(
              <div className={`activity-stat activity-stat-${index}`} key={index}>
                <div className="platform">
                  {item.name === "twitter" && <p>Retweets</p>}
                  {item.name === "instagram" && <p>Profile views</p>}
                  {item.name === "youtube" && <p>Total views</p>}
                  {item.name === "facebook" && <p>Page views</p>}
                  <img src={item.logo}/>
                </div>
                <div className="activity-stats-values">
                  <p className="activity-value">{item.activity}</p>
                  <div className="activity-stat-change">
                    {item.followerChangeIsPositive ? <img src="./assets/icon-up.svg"/> : <img src="./assets/icon-down.svg"/>}
                    <p className={item.activityChangeIsPositive ? "activity-change-text positive" : "activity-change-text negative"}>
                      {item.activityChange}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}


          {/*___________________Likes___________________*/}


          {activityStats && activityStats.map((item, index) => {
            return(
              <div className={`activity-stat like-stat-${index}`} key={index}>
                <div className="platform">
                  <p>Likes</p>
                  <img src={item.logo}/>
                </div>
                <div className="activity-stats-values">
                  <p className="activity-value">{item.likes}</p>
                  <div className="activity-stat-change">
                    {item.likeChangeIsPositive ? <img src="./assets/icon-up.svg"/> : <img src="./assets/icon-down.svg"/>}
                    <p className={item.likeChangeIsPositive ? "activity-change-text positive" : "activity-change-text negative"}>
                      {item.likeChange}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App
