/* global google:false */

class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(Listing => listingsObj[Listing.id] = Listing);

    listings
      .filter(Listing => !this.markers[Listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))

    Object.keys(this.markers)
      .filter(ListingId => !listingsObj[ListingId])
      .forEach((ListingId) => this.removeMarker(this.markers[ListingId]))
  }

  createMarkerFromListing(Listing) {
    const position = new google.maps.LatLng(Listing.lat, Listing.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      ListingId: Listing.id
    });

    marker.addListener('click', () => this.handleClick(Listing));
    this.markers[marker.ListingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.ListingId].setMap(null);
    delete this.markers[marker.ListingId];
  }
}

export default MarkerManager;
