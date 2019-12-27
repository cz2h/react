var React = require('react');

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content
        }
    }

    render() {
        return (
            <div className="card z-depth-0 grey-text text-darken-3" key={this.props.id + this.props.title}>
                <span className="card-title">{this.props.id + " : " + this.props.title} </span>
                <p></p>
                <span className="grey-text">{this.props.content}</span>
            </div>
        );
    }
};

export default Detail;
