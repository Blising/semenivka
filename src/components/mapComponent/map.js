import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "../../ style/Map.css";
function MyComponent() {
  const containerStyle = {
    width: '500px',
    height: '400px'
  };

  const center = {
    lat: -34.397,
    lng: 150.644
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div id="mapContainer" style={{ width: '600px', height: '450px' }}>
          {map !== null ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : (
            <iframe
              id="mapFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21927.61780332301!2d33.57536099243307!3d46.60794710137541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c3bc3ea1dadb23%3A0x2a73e264463970f0!2z0KHQtdC80LXQvdGW0LLQutCwLCDQpdC10YDRgdC-0L3RgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzQ4NDM!5e0!3m2!1suk!2sua!4v1711270054607!5m2!1suk!2sua"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}

export default React.memo(MyComponent);
