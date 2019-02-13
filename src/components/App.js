import React, {useState} from 'react';
import ResourceList from "./ResourceList";
import Roadster from "./Roadster";

const App = () => {
    const [resource, setResource] = useState('launches');
    return (
        <>
            <div>
                <h4>Roadster</h4>
                <hr/>
                <Roadster/>
                <h4>Launches</h4>
                <hr/>
                <button onClick={() => setResource('launches')}>All Launches</button>
                <button onClick={() => setResource('launches/past')}>Past Launches</button>
                <button onClick={() => setResource('launches/upcoming')}>Upcoming Launches</button>
            </div>
            <ResourceList resource={resource}/>
        </>
    );
}

export default App;
