
export default function Nav(props){

    return(
        <nav>
            <div className="nav-center">
                    <div className="nav-header">
                        <a href="index.html">
                            <h1 className="logo">dxi<span className="accent">Gichuru</span></h1>
                        </a>
                        <button type="button" aria-label="nav" className={props.toggleClass} onClick={props.handleClick}>
                            <span className="burger b-1"></span>
                            <span className="burger b-2"></span>
                            <span className="burger b-3"></span>
                        </button>
                    </div>
                    <ul className={props.toggleLinks}>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="index.html">About</a>
                        </li>
                        <li>
                            <a href="index.html">Project</a>
                        </li>
                    </ul>
                    <ul className="socials ">
                        <li>
                            <a href="#">
                                <img src="./icon-facebook.svg" alt="facebook icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./icon-instagram.svg" alt="instagram icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./icon-pinterest.svg" alt="pinterest icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./icon-twitter.svg" alt="twitter icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./icon-youtube.svg" alt="youtube icon"/>
                            </a>
                        </li>
                    </ul>
            </div>
	    </nav>
    )
}