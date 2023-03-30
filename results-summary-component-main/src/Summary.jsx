import Summary from './summary_stat'

function summary(){
  
    return(

      <div className='summary-container flex-column'>
        <div className='summary-results flex-column'>
          <h3>Summary</h3>
            <div className='summary-stats-container flex-column'>
              <Summary
                  img = './src/assets/images/icon-reaction.svg'
                  type = 'Reaction'
                  value = {80}
                />
              <Summary 
                  img = './src/assets/images/icon-memory.svg'
                  type = 'Memory'
                  value = {92}
              />
              <Summary 
                  img = './src/assets/images/icon-verbal.svg'
                  type = 'Verbal'
                  value = {61}
              />
              <Summary 
                  img = './src/assets/images/icon-visual.svg'
                  type = 'Visual'
                  value = {72}
              />
            </div>
        </div>
      <button className='button'>
        Continue
      </button>
      </div>

    )
  }

export default summary  
