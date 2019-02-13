import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(`https://api.spacexdata.com/v3/launches/${resource}`);
            setResources(response.data)
        })(resource)
    }, [resource]);

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
