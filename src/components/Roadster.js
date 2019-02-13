import React from 'react';
import useResources from "../hooks/useResource";

const Roadster = () => {
    const resources = useResources('roadster')
    return (
        <>
            {/*<div className="card text-center" style={{"width": "18rem"}}>*/}
                {/*<div className="card-body">*/}
                    {/*{console.log(resources.flickr_images)}*/}
                    {/*<img className="card-img-top" src={resources.flickr_images && resources.flickr_images[resources.flickr_images.length -1]} alt="Card image cap"/>*/}
                    {/*<h5 className="card-title">{resources.name}</h5>*/}
                    {/*<p className="card-text">{resources.details}</p>*/}
                    {/*<a href={resources.wikipedia} target='_blank' className="btn btn-primary">Roadster Wiki</a>*/}
                {/*</div>*/}
            {/*</div>*/}

            {JSON.stringify(resources)}
        </>
    );
}

export default Roadster;
