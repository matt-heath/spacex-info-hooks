import React from 'react';
import useResources from "../useResources";

const Roadster = () => {
    const resources = useResources('roadster');
    return (
        <div>
            {JSON.stringify(resources)}
        </div>
    );
};

export default Roadster;
