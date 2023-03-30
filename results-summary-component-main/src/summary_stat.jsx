
function summary_stat(props){
  console.log(props)
    return(
        <div className='summary-stat'>
          <div className='stat-type'>
            <img src={ props.img } alt='icon'/>
            <p className="stat-type-name">{ props.type }</p>
          </div>
          <div className='stat-value'>
            <p> <span>{ props.value }</span> / 100</p>
          </div>
      </div>
    )
}

export default summary_stat