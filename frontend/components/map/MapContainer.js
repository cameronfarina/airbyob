import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";
export class MapContainer extends React.Component {
  render() {
    return (
      <Map zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfwNmuusCzXl_Ci-4YgLglUGyN7uU0w_E"
})(MapContainer);
