import React from "react";
import BookingFormContainer from "../../booking_slots/BookingFormContainer";
import PhotoSection from "./PhotoSection";
import NavBar from "../../navbar/Navbar";
import Calendar from "../../calendar/Calendar";

class ListingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.listing = this.props.listing;
  }

  componentDidMount() {
    switch (this.listing.beds) {
      case 1:
        return (this.listing.listing_type = "Private Room");
      case 2:
        return (this.listing.listing_type = "Entire Apartment");
      case 3 || 4 || 5:
        return (this.listing.listing_type = "Entire House");
      default:
        "Private Room";
    }

  }

  render() {
    const { listing } = this.props;
    let beds, size;
    if (!listing.furnished) {
      beds =
        "beds can fit in this listing, but it will not be furnished during your stay. Please make sure to bring your own bed.";
      size = "Entire Apartment";
    } else if (listing.beds === 2 || listing.beds === 3) {
      beds = "beds";
      size = "Entire Apartment";
    } else if (listing.beds > 3) {
      beds = "beds";
      size = "Entire House";
    } else {
      beds = "bed";
      size = "Private Room in Apartment";
    }

    let bathrooms;
    if (listing.bathrooms === 1) {
      bathrooms = "bathroom";
    } else {
      bathrooms = "bathrooms";
    }

    return (
      <div className="listing-detail-content-wrapper">
        <NavBar />
        <div>
          <PhotoSection />
        </div>
        <div className="listings-page-content-wrapper">
          <div className="listings-detail-page">
            <div className="listing-content-container">
              <div className="listing-content">
                <div className="title-host-container">
                  <div className="title-location-container" />
                </div>

                <div className="listing-info">
                  <div className="apartment-info">
                    <div className="icon fa fa-home" />
                    <div className="listing-properties-list">
                      <div className="listing-type">{size}</div>
                      <div className="listing-props">
                        <div className="number-of-bathrooms">
                          {this.listing.bathrooms} {bathrooms}
                        </div>
                        <br />
                        <div className="number-of-bedrooms">
                          {this.listing.beds} {beds}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="apartment-info">
                    <div className="icon">
                      <i className="fas fa-key" />
                    </div>
                    <div className="listing-properties-list">
                      <div className="listing-type">
                        Great check-in experience
                      </div>
                      <div className="listing-explaination">
                        100% of recent guests gave the check-in process a 5-star
                        rating.
                      </div>
                    </div>
                  </div>

                  <div className="apartment-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="listing-properties-list">
                      <div className="listing-type">Great Location</div>
                      <div className="listing-explanation">
                        100% of recent guests gave the location a 5-star rating.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="listing-description">
                <div className="listing-title">About This Listing</div>
                <div className="description">{this.listing.description}</div>
              </div>

              <div className="listing-amenities">
                <div className="listing-title">Amenities</div>

                <div className="amenities-row">
                  <div className="amenities-item">
                    <i className="fas fa-utensils" />
                    Kitchen
                  </div>
                  <div className="amenities-item">
                    <i className="fas fa-tv" />
                    Flatscreen TV
                  </div>
                </div>

                <div className="amenities-row">
                  <div className="amenities-item">
                    <i className="fas fa-wifi" />
                    Wi-fi
                  </div>
                  <div className="amenities-item">
                    <i className="fas fa-coffee" />
                    Espresso Machine
                  </div>
                </div>

                <div className="amenities-row">
                  <div className="amenities-item">
                    <i className="fas fa-water"></i>
                    On-site Laundry
                  </div>
                  <div className="amenities-item">
                    <i className="fas fa-water"></i>
                    Pet Friendly
                  </div>
                </div>
              </div>

              <div className="listing-calendar">
                <div className="listing-title availability">Availability</div>
                <div className="calendar-row">
                  <Calendar />
                </div>
              </div>
            </div>
            <BookingFormContainer listing={this.listing} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListingContent;
