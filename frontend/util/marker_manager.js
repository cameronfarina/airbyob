class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    Object.values(listings).forEach(
      listing => (listingsObj[listing.id] = listing)
    );

    Object.values(listings)
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing =>
        this.createMarkerFromListing(newListing, this.handleClick)
      );

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]));
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(
      listing.latitude,
      listing.longitude
    );

    const mapIcon = {
      path: "m22,-28.38281l-44,0l0,20l16,0l6,5l6,-5l16,0l0,-20z",
      labelOrigin: new google.maps.Point(0, -18),
      fillColor: "white",
      fillOpacity: 1,
      scale: 1.15,
      strokeColor: "grey",
      strokeWeight: 0.5,
    };

    this.markers[listing.id] = new google.maps.Marker({
      position,
      map: this.map,
      title: listing.name,
      listingId: listing.id,
      label: "$" + String(listing.price),
      icon: mapIcon,
    });

    
    let marker = this.markers[listing.id];
    marker.addListener('click', () => this.handleClick(listing))
    marker.setMap(this.map);

    // marker.addListener("click", () => this.handleClick(listing));
    // this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;
