var React = require('react');

class Post extends React.Component {
    state = {
        id: null
    }

    componentDidMount() {
        console.log("Post did mount");
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        })
    }

    componentDidUpdated() {
        console.log("Navigated to a new page");
    }

    componentWillReceiveProps() {
        console.log("Post will recevie new props");
    }

    static getDerivedStateFromProps(next, prev) {
        console.log("Post get derived state from props");
        console.log(next);
        console.log(prev);
        // This function is called before re-rendered.
        // Set the state here.
    }

    shouldComponentUpdate() {
        console.log("Should Post update");
        return true;
    }

    componentWillUdate() {
        console.log("Component will update");
    }

    render() {
        console.log('Post rendered' + this.state.id);
        return (
            <div>Route Parameter: {this.props.match.params.post_id}</div>
        );
    }

};

export default Post;
