import React from "react";

export const renderStars = rating => {
  if (rating && (rating > 0 && rating < 6)) {
    const fullStar = <i className="fa fa-star" />;
    const emptyStar = <i className="fa fa-star" />;

    if (rating <= 0.99) {
      return (
        <div className="individual-stars-container">
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </div>
      );
    } else if (rating > 0 && rating < 2) {
      return (
        <div className="individual-stars-container">
          {fullStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </div>
      );
    } else if (rating > 1 && rating < 3) {
      return (
        <div className="individual-stars-container">
          {fullStar}
          {fullStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </div>
      );
    } else if (rating > 2 && rating < 4) {
      return (
        <div className="individual-stars-container">
          {fullStar}
          {fullStar}
          {fullStar}
          {emptyStar}
          {emptyStar}
        </div>
      );
    } else if (rating > 3 && rating < 5) {
      return (
        <div className="individual-stars-container">
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {emptyStar}
        </div>
      );
    } else if (rating > 4) {
      return (
        <div className="individual-stars-container">
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
        </div>
      );
    }
  } else {
    return 'No reviews yet'
  }
};
