import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
    // Store logitude, latitude, zoom for map
    const [viewport, setViewport] = useState({
        longitude: -71.06,
        latitude: 42.37,
        zoom: 9.5,
    });

    return (
        <div className="map-container">
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={setViewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v10"
            >
                <Marker longitude={-71.08} latitude={42.34}>
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-blue text-3xl"
                    />
                </Marker>
            </ReactMapGL>
        </div>
    );
};

export default Map;
