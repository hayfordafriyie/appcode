// Map.js
import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const Map = ({ shippingAddress }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: shippingAddress.lat,
    lng: shippingAddress.lng,
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      {shippingAddress && (
        <Marker position={center}>
          <InfoWindow>
            <div>
              <p>Shipping Address:</p>
              <p>{shippingAddress.address}</p>
            </div>
          </InfoWindow>
        </Marker>
      )}
    </GoogleMap>
  );
};

export default Map;
