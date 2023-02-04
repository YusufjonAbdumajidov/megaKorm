import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
 

const Map = () => {
    const center = useMemo(() => ({ lat: 55, lng: 37 }), []) ;
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_GOOGLE_MAP_API });
    if(!isLoaded) return <div>Loading...</div>
  return (
    <div className='mapContainer'>
      
       <GoogleMap 
       zoom={10} 
       center={center}
       mapContainerClassName={"mapClass"}
      >
        <MarkerF position={center} />
        <MarkerF position={{lat: 54.1, lng: 35.2}} />
      </GoogleMap>
    </div>
  )
}

export default Map
