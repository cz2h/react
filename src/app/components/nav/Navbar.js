import { Link } from 'react-router-dom';
import SignInLinks from "./SignInLinks"
import SignOutLinks from "./SignOutLinks"

var React = require('react');


class Navbar extends React.Component {
    render() {

        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to={'/'} className="brand-logo left">Welcome</Link>
                    <SignInLinks />
                    <SignOutLinks />
                </div>
            </nav>
            // < ul className="nav-wrapper grey darken-3" >
            //     <li className="brand-logo"><span><Link to={'/'}>Main</Link></span></li>
            //     <li><span><Link to={'/signup'}>Login</Link></span></li>
            //     <li><span><Link to={'/signin'}>Register</Link></span></li>
            // </ul >
        );
    }
};

export default Navbar;


