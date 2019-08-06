import React from "react";

class BookingFormCalculation extends React.Component {
  constructor(props) {
    super(props);

    this.openExtraInfo = this.openExtraInfo.bind(this);
  }

  openExtraInfo(e) {
    e.preventDefault();
    const question = document.getElementById("questionMark");
    this.setState({
      extraHidden: !this.state.extraHidden
    });

    if (this.state.extraHidden) {
      question.classList.remove("hide-extra-info");
    } else {
      question.classList.add("hide-extra-info");
    }
  }

  render() {
    const { listing } = this.props;
    this.cleaningFees = 10 * this.props.num_nights;
    this.totalCosts = Math.floor(listing.price * this.props.num_nights);
    this.serviceFees = Math.floor((this.totalCosts + this.cleaningFees) * 0.2);
    this.occupancyTaxes = Math.floor(this.totalCosts * 0.08);
    this.finalPrice = Math.floor(
      this.occupancyTaxes + this.serviceFees + this.totalCosts
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
              <button onClick={this.openExtraInfo}>
                <i className="far fa-question-circle" />
              </button>
              <div className="hide-extra-info" id="questionMark">
                This is for the site
              </div>
            </span>{" "}
            <span className="right-side">${this.serviceFees}</span>
          </div>
          <div className="final-pricing">
            <span>
              Occupancy taxes and fees{" "}
              <button onClick={this.openExtraInfo}>
                <i className="far fa-question-circle" />
              </button>
              <div className="hide-extra-info" id="questionMark">
                This is for the site
              </div>
            </span>{" "}
            <span className="right-side">${this.occupancyTaxes}</span>
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
