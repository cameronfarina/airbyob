import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import MarkerManager from "../../../util/marker_manager";

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let getCenterLat =
      (this.props.bounds.northEastLat + this.props.bounds.southWestLat) / 2;
    let getCenterLng =
      (this.props.bounds.northEastLng + this.props.bounds.southWestLng) / 2;

    const mapOptions = {
      center: {
        lat: getCenterLat,
        lng: getCenterLng
      },
      zoom: 8
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    if (this.props.singleListing) {
      const targetListingKey = Object.keys(this.props.listings)[0];
      const targetListing = this.props.listings[targetListingKey];
      this.MarkerManager.updateMarkers([targetListing]);
    } else {
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateFilter("bounds", bounds);
    });
    google.maps.event.addListener(this.map, "click", event => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(listing) {
    const listingId = listing.id;
    this.props.history.push(`/listings/${listingId}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: "listings/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(ListingMap);
