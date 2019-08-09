import React from "react";

class BookingFormCalculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleaningHidden: true,
      serviceHidden: true
    };
    this.toggleHiddenButtons = this.toggleHiddenButtons.bind(this);
  }

  toggleHiddenButtons(field) {
    let that = this;
    return () => {
      const filterButton = document.getElementById(field);
      that.setState(
        {
          [`${field}Hidden`]: !that.state[`${field}Hidden`]
        },
        () => {
          if (!that.state[`${field}Hidden`]) {
            filterButton.classList.remove("hide-extra-info");
          } else {
            filterButton.classList.add("hide-extra-info");
          }
        }
      );
    };
  }

  render() {
    const { listing } = this.props;
    this.cleaningFees = 10 * this.props.num_nights;
    this.totalCosts = Math.floor(listing.price * this.props.num_nights);
    this.serviceFees = Math.floor((this.totalCosts + this.cleaningFees) * 0.2);
    this.cleaningFees = Math.floor(this.totalCosts * 0.08);
    this.finalPrice = Math.floor(
      this.cleaningFees + this.serviceFees + this.totalCosts
    );

    const finalPricingSection =
      this.props.startDate && this.props.endDate ? (
        <div>
          <div className="final-pricing">
            <span>
              ${Math.floor(this.props.listing.price)} x {this.props.num_nights}
            </span>
            <span className="right-side">${this.totalCosts}</span>
          </div>
          <div className="final-pricing">
            <span>
              Service fee{" "}
              <a onClick={this.toggleHiddenButtons("service")}>
                <i className="far fa-question-circle" />
              </a>
              <span className="right-side">${this.serviceFees}</span>
              <div className="hide-extra-info" id="service">
                This helps us run our platform and offer services like 24/7
                support on your trip.
              </div>
            </span>
          </div>
          <div className="final-pricing">
            <span>
              Cleaning fees{" "}
              <a onClick={this.toggleHiddenButtons("cleaning")}>
                <i className="far fa-question-circle" />
              </a>
              <span className="right-side">${this.cleaningFees}</span>
              <div className="hide-extra-info" id="cleaning">
                One-time fee charged by host to cover the cost of cleaning their
                space.
              </div>
            </span>{" "}
          </div>
          <div className="final-pricing">
            <span>Total</span>{" "}
            <span className="right-side">${this.finalPrice}</span>
          </div>
        </div>
      ) : null;
    return finalPricingSection;
  }
}

export default BookingFormCalculation;
