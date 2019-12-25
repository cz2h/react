var React = require('react');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }


    handleChange(e) {
        var toSet = e.target.id;
        var input = e.target.value;
        console.log(toSet + " : " + input);
        this.setState({
            [toSet]: input,
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        console.log(this);
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit.bind(this)}>
                    <h5>
                        Sign In
                        </h5>
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={this.handleChange.bind(this)} />
                    </div >
                    <div className="input-field">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" onChange={this.handleChange.bind(this)} />
                    </div >
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;