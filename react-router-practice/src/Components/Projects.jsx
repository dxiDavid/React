import laws from './laws'

export default function Projects(){

    return(
        <div className="projects-cotainer">
            <div className="projects">
                {laws && laws.map((law, index) => {
                    return(
                        <div className="project" key={index}>
                        <div className="image-container">
                            <img src={law.image} alt="law"/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}