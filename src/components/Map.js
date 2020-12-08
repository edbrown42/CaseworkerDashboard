import { popup, divIcon } from 'leaflet';
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import blueMarker from "../resources/marker-icon-blue.png"

import "../App.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  
  render() {

    const iconMarkupGreen = renderToStaticMarkup(
      <i class=" fa fa-map-marker-alt fa-3x" style={{color:"green"}}></i>
    );
    const iconMarkupYellow = renderToStaticMarkup(
      <i class=" fa fa-map-marker-alt fa-3x" style={{color:"yellow"}}></i>
    );
    const iconMarkupRed = renderToStaticMarkup(
      <i class=" fa fa-map-marker-alt fa-3x" style={{color:"red"}}></i>
    );

    const customMarkerGreen = divIcon({
      html: iconMarkupGreen
    });
    
    const customMarkerYellow = divIcon({
      html: iconMarkupYellow
    });
    
    const customMarkerRed = divIcon({
      html: iconMarkupRed
    });
    
    this.props.mapData.map(participant => {
      if( (participant.warningLevel) == 0){
        participant.icon=customMarkerGreen
      } else if( (participant.warningLevel) == 1){
        participant.icon=customMarkerYellow
      } else {
        participant.icon=customMarkerRed
      } 
    })
    console.log(this.props.mapData)

    return (
      <MapContainer 
        center={[40.4259, -86.9081]} 
        zoom={13} 
        scrollWheelZoom={false}>


        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {this.props.mapData.map (participant => (
          
          <Marker 
            data="customdata"
            key={participant.userID}
            position= {[participant.lastKnownLocation.lat, participant.lastKnownLocation.long]}
            icon={participant.icon}
          >
            <Popup>
              {participant.firstName} {participant.lastName}
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    );
  }
}

export default Map;
