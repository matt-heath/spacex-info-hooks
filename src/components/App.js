import React from 'react';

class App extends React.Component {
    state = { resource: ''}
    render() {
        return (
            <>
                <div>
                    <h4>Launches</h4>
                    <hr/>
                    <button onClick={() => this.setState({resource: ''})}>All Launches</button>
                    <button onClick={() => this.setState({resource: 'past'})}>Past Launches</button>
                    <button onClick={() => this.setState({resource: 'upcoming'})}>Upcoming Launches</button>
                </div>
                {this.state.resource}
            </>
        );
    }
}

export default App;
