import React from "react";
import ListingIndexItem from "./ListingIndexItem";
import Navbar from "../../navbar/Navbar";
import ListingsMap from "../listing_map/listing_map";
import FilterBar from "../../filterbar/Filterbar";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      listings,
      bounds,
      listingId,
      fetchListing,
      updateFilter
    } = this.props;
    if (Object.values(listings).length === 0) {
      return null;
    }

    const IndexItems = Object.values(listings).map((listing, i) => (
      <ListingIndexItem listing={listing} key={i} />
    ));

    return (
      <div>
        <Navbar />
        <FilterBar />
        <div className="listings-wrapper">
          <div className="listings-page-content">
            <div className="listings-content">
              <div className="listings-rows">{IndexItems}</div>
            </div>
          </div>
          <div className="map-container" id="the-map">
            <ListingsMap
              updateFilter={updateFilter}
              listings={listings}
              fetchListing={fetchListing}
              listingId={listingId}
              singleListing={false}
              bounds={bounds}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ListingIndex;
