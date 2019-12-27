import { connect } from 'react-redux';
import Graphs from './Graphs'

var React = require('react');

// List all the projects 
class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Dashboard Page</h1>
                <Graphs graphs={this.props} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        projects: state.graphs.projects
    };
}

export default connect(mapStateToProps)(Dashboard);
