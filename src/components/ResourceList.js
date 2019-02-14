import React from 'react';
import useResources from "../useResources";

const ResourceList = ({resource}) => {
    const resources = useResources(resource);
    return (
        <div>
            <h4>Launches ({resources.length})</h4>
            <hr/>
            <ul>{resources.map(resource => <li key={resource.mission_name}>{resource.mission_name}</li>)}</ul>
        </div>
    );
}

export default ResourceList;
