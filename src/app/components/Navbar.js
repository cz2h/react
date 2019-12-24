import { Link } from 'react-router-dom';

require('./css/Navbar.css');

var React = require('react');

class Navbar extends React.Component {
    render() {
        return (
            <ul>
                <li><span><Link to={'/'}>Main</Link></span></li>
                <li><span><Link to={'/signup'}>Login</Link></span></li>
                <li><span><Link to={'/signin'}>Register</Link></span></li>
            </ul>
        );
    }
};

export default Navbar;


