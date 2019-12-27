import Detail from './Detail';

var React = require('react');


class Graphs extends React.Component {
    constructor(props) {
        console.log(props.graphs.projects);
        super(props);
        this.state = {
            graphs: props.graphs.projects,
        }
    }

    render() {
        var graphDetails = this.state.graphs.map((graph) => {
            return <Detail id={graph.id} title={graph.title} content={graph.content} key={"graph" + graph.id} />
        });
        return (
            <div className="project-list section">
                {graphDetails}
            </div>
        );
    }

};

export default Graphs;
