import React, {useEffect, useState} from 'react';
import useResources from "../useResources";


const ResourceList = ({resource}) => {
    const resources = useResources(resource);

    return (
        <ul>
            {resources.map(record =>
                <li key={record.flight_number}>
                    {`${record.flight_number} -
                    ${record.mission_name}`}
                    <img src={record.links.flickr_images.length > 0 && record.links.flickr_images.reduce(img => img)} alt=""/>
                </li>)}
        </ul>
    );
}

export default ResourceList;
