import React, {useState} from 'react';
import ResourceList from "./ResourceList";

const App = () => {
    const [resource, setResource] = useState('');
    return (
        <>
            <div>
                <h4>Launches</h4>
                <hr/>
                <button onClick={() => setResource('')}>All Launches</button>
                <button onClick={() => setResource('past')}>Past Launches</button>
                <button onClick={() => setResource('upcoming')}>Upcoming Launches</button>
            </div>
            <ResourceList resource={resource}/>
        </>
    );
}

export default App;
