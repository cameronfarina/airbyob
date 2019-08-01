import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listingId = this.props.listing.id;
    this.props.history.push(`/listings/${listingId}`);
  }

  render() {
    const { description } = this.props.listing;
    return (
      <div
        className="listing-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
        <img src={window.bedroom1} />
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
