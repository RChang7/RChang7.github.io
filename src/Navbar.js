import { Link} from 'react-router-dom';
import { useState } from 'react';




const Navbar = ({isDarkMode, toggleThemeSwitch}) => {



    return (
        <nav className="navbar">
            <h1>Ryan Chang</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/allrepos">Projects</Link>
                <Link to="/about">About Me</Link>
                <button onClick = {toggleThemeSwitch} className="mode-switcher">
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;