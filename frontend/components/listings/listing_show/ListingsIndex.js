import React from "react";
import ListingIndexItem from "./ListingIndexItem";
import Navbar from "../../navbar/Navbar";
import ListingsMap from "../listing_map/listing_map";
import FilterBar from "../../filterbar/Filterbar";
import LoadingDots from "../../loading/loading";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    if (this.state.loading) {
      return <LoadingDots state={this.state} />;
    }
    const {
      listings,
      comments,
      bounds,
      listingId,
      fetchListing,
      updateFilter
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
          <ListingIndexItem
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
