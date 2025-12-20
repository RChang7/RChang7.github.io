import {Link} from 'react-router-dom';





const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Ryan Chang</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/allrepos">All Repos</Link>
                <Link to="/about">About Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;