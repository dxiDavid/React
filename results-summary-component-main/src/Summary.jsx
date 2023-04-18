import Summary from './summary_stat'
import reactionIcon from './assets/images/icon-reaction.svg'
import memoryIcon from './assets/images/icon-memory.svg'
import verbalIcon from './assets/images/icon-verbal.svg'
import visualIcon from './assets/images/icon-visual.svg'

function summary(){
  
    return(

      <div className='summary-container flex-column'>
        <div className='summary-results flex-column'>
          <h3>Summary</h3>
            <div className='summary-stats-container flex-column'>
              <Summary
                  img = {reactionIcon}
                  type = 'Reaction'
                  value = {80}
                />
              <Summary 
                  img = {memoryIcon}
                  type = 'Memory'
                  value = {92}
              />
              <Summary 
                  img = {verbalIcon}
                  type = 'Verbal'
                  value = {61}
              />
              <Summary 
                  img = {visualIcon}
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
