import React from 'react';
import useResources from "../useResources";

const Roadster = () => {
    const resource = useResources('roadster');
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Image</th>
                    <th>Speed MPH</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{resource.name}</td>
                    <td>{resource.details}</td>
                    <td>
                        <img src={resource.flickr_images && resource.flickr_images[resource.flickr_images.length - 1]}
                             alt="Roadster"
                             style={{'height': '10rem'}}
                        />
                    </td>
                    <td>{resource.speed_mph}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Roadster;
