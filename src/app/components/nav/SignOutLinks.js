import { Link } from 'react-router-dom';


var React = require('react');


class SignOutLinks extends React.Component {
    render() {

        return (
            <ul className="right">
                <li><Link to={"/"}>Register</Link></li>
                <li><Link to={"/"}>Login</Link></li>
            </ul>
        );
    }
};

export default SignOutLinks;


