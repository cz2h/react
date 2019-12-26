import { connect } from 'react-redux';

var React = require('react');

// List all the projects 
class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        return (
            <h1>Dashboard Page</h1>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        projects: state.graphs.projects
    };
}

export default connect(mapStateToProps)(Dashboard);
