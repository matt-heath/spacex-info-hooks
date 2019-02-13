import React from 'react';
import useResources from "../hooks/useResource";

const ResourceList = ({resource}) => {
    const resources = useResources(resource)
    return (
        <>
            <h4>Number of launches ({resources.length})</h4>
            <ul>
                {resources.map(resource => <li key={resource.mission_name}>{resource.mission_name}</li>)}
            </ul>
        </>
    );
}

export default ResourceList;
