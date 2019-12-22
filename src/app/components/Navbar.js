import { Link } from 'react-router-dom';

require('./css/Navbar.css');

var React = require('react');

class Navbar extends React.Component {
    render() {
        return (
            <ul>
                <li><span><Link to={'/'}>Main</Link></span></li>
                <li><span><Link to={'/graph'}>Graph</Link></span></li>
                <li><span><Link to={'/login'}>Login</Link></span></li>
                <li><span><Link to={'/about'}>About</Link></span></li>
            </ul>
        );
    }
};

export default Navbar;


