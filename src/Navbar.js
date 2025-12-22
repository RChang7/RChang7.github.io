import { Link} from 'react-router-dom';
import { useState } from 'react';




const Navbar = () => {

    // false is light mode, true is dark mode
    const [mode, setMode] = useState(false);

    const switchMode = () => {
        setMode(!mode);
    };

    return (
        <nav className="navbar">
            <h1>Ryan Chang</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/allrepos">All Repos</Link>
                <Link to="/about">About Me</Link>
                {/* <button onClick = {switchMode} className="mode-switcher">
                    {mode ? "Light Mode" : "Dark Mode"}
                </button> */}
            </div>
        </nav>
    );
}

export default Navbar;