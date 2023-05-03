import { useState } from "react"
import data from "./data"
import Followers from "./components/Followers"
import Views from "./components/Views"
import Likes from "./components/Likes"
import { createContext } from "react"

export const ThemeContext = createContext(null)

function App() {

  const[followersStats, setFolowerStats] = useState(data)
  const[activityStats, setActivityStats] = useState(data)
  const[isDark, setIsDark] = useState(true)

  const toggleDarkMode = () =>{
    setIsDark(!isDark)
  }
  

  return (
    <div className={isDark ? "app lightmode" : "app darkmode"}>
      <div className="background"></div>
      <div className="container">
          <div className="header">
            <div className="dashboard-heading">
              <h1>Social Media Dashboard</h1>
              <p className="total-followers">Total Followers: 23,004</p>
            </div>
            <hr/>
            <div className="darkmode-toggle-div">
              <p className="darkmode-text">{isDark ? "Light" : "Dark"} Mode</p>
              <button type="button" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
                <div className="circle"></div>
              </button>
            </div>
          </div>


          {/*_______________________________Followers___________________________*/}


          <div className="follower-stats-container">

              {followersStats && followersStats.map((item, index) => {
                  return(
                    <Followers
                      key = {index}
                      index = {index}
                      name = {item.name}
                      logo = {item.logo}
                      username = {item.username}
                      followers = {item.followers}
                      followerchange = {item.followerchange}
                      followerChangeIsPositive = {item.followerChangeIsPositive}
                    />
                  )
              })}
          </div>

          <h2>Overview - Today</h2>

          <div className="activity-stats-container">

              {activityStats && activityStats.map((item, index) => {
                return(
                  <Views
                    key = {index}
                    index = {index}
                    logo = {item.logo}
                    name = {item.name}
                    activity = {item.activity}
                    activityChange = {item.activityChange}
                    activityChangeIsPositive = {item.activityChangeIsPositive}
                  />
                )
              })}

              {activityStats && activityStats.map((item, index) => {
                return(
                <Likes
                    key = {index}
                    index = {index}
                    logo = {item.logo}
                    name = {item.name}
                    likes = {item.likes}
                    likeChange = {item.likeChange}
                    likeChangeIsPositive = {item.likeChangeIsPositive}
                />
                )
              })}

          </div>
        </div>
    </div>
  )
}

export default App
