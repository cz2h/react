import { Link } from 'react-router-dom';


var React = require('react');


class SignInLinks extends React.Component {
    render() {

        return (
            <ul className="right">
                <li><Link to={"/"}>New Project</Link></li>
                <li><Link to={"/"}>Log out</Link></li>
                <li><Link to={"/"} className="btn btn-floating pink lighten-1">NN</Link></li>
            </ul>
        );
    }
};

export default SignInLinks;


