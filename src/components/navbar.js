import React from 'react'; 
import { NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">logo</a>

                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar); //da mojem da polzvame HOC (neshto det ti wrapva elementa vyv  func i mu dawa poweche features )

