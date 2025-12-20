import {Link} from 'react-router-dom';





const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Ryan Chang</h1>
            <div className="links">
                {/* <Link to="/">Home</Link> */}
                <a href={"https://github.com/RChang7"}>Github</a>
                <a href={"https://www.linkedin.com/in/ryanchang-it/"}>LinkedIn</a>
            </div>
        </nav>
    );
}

export default Navbar;