import React from "react";
// import { Link } from "react-router-dom";

const ListingIndexItem = ({ listing }) => ({
  render() {
    return (
      <div className="listing-show-page">
        <div className="listing-bench-map">
          <BenchMap
            benches={benches}
            benchId={benchId}
            singleBench={true}
            fetchBench={fetchBench}
          />
        </div>
        <div className="right-half bench-details">
          <BenchDetail bench={bench} reviews={reviews} />
          <ReviewLink
            component={ReviewFormContainer}
            to={`/benches/${benchId}/review`}
            label="Leave a Review"
          />
          <ProtectedRoute
            path="/benches/:benchId/review"
            component={ReviewFormContainer}
          />
        </div>
      </div>
    );
  }
});

export default ListingIndexItem;
