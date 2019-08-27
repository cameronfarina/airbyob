import React from "react";
import ListingsGridIndexItem from "./ListingsGridIndexItem";
import Navbar from "../../navbar/Navbar";
// import ListingsMap from "../listing_map/listing_map";
// import FilterBar from "../../filterbar/Filterbar";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const {
      listings,
      comments
      // bounds,
      // listingId,
      // fetchListing,
      // updateFilter
    } = this.props;
    if (Object.values(listings).length === 0) {
      return null;
    }

    const IndexItems = Object.values(listings)
      .slice(0, -1)
      .map((listing, i) => {
        let reviews = Object.values(comments).filter(
          comment => comment.listingId === listing.id
        );
        let rating = 0;
        reviews.forEach(el => (rating += el.rating));
        rating = rating / reviews.length || 0;

        return (
          <ListingsGridIndexItem
            listing={listing}
            key={i}
            reviews={reviews}
            reviewCount={reviews.length}
            averageRating={rating}
          />
        );
      });

    return (
      <div>
        <Navbar />
        <div className="listings-grid-container">
          <h2 className="recommended">Recommended For You</h2>
          <ul className="listings-grid">{IndexItems}</ul>
        </div>
      </div>
    );
  }
}
export default ListingIndex;
