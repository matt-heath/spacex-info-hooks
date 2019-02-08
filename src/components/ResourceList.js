import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
    state = {resources: []}

    async componentDidMount() {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches/${this.props.resource}`);
        this.setState({resources: response.data});
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://api.spacexdata.com/v3/launches/${this.props.resource}`);
            this.setState({resources: response.data});
        }
    }

    render() {
        return (
            <>
                {this.state.resources.length}
            </>
        );
    }
}

export default ResourceList;
