
function result() {

  return (
    <div className="results-container flex-column">
        <h3>Your Result</h3>
        <div className="results flex-column">
            <div className="result-numbers">
              <h1>76</h1>
              <p>of 100</p>
            </div>
        </div>
        <div className="results-message flex-column">
          <h2>Great</h2>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
  )
}

export default result;
