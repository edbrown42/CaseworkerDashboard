import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <MapContainer center={[40.4259, -86.9081]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.4259, -86.9081]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
