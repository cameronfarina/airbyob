import React from "react";
import Calendar from "../../components/calendar/Calendar";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapHidden: false,
      datesHidden: true,
      guestsHidden: true,
      priceHidden: true,
      moreHidden: true,
      guests: 1
    };
    this.toggleMap = this.toggleMap.bind(this);
    this.toggleFilterButtons = this.toggleFilterButtons.bind(this);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  plusOne(e) {
    e.preventDefault();
    this.setState({
      guests: this.state.guests + 1
    });
  }

  minusOne(e) {
    e.preventDefault();
    this.setState({
      guests: this.state.guests - 1
    });
  }

  toggleMap() {
    const theMap = document.getElementById("the-map");
    this.setState({
      mapHidden: !this.state.mapHidden
    });

    if (this.state.mapHidden) {
      theMap.classList.add("hide-map");
    } else {
      theMap.classList.remove("hide-map");
    }
  }

  // componentDidUpdate() {
  //   window.addEventListener("mouseup", function(e) {
  //     const box = document.getElementById("dates");
  //     if (e.target != box) {
  //       box.classList.add("hide-dropdown");
  //       this.setState({
  //         datesHidden: true
  //       });
  //     }
  //   });
  // }

  toggleFilterButtons(field) {
    let that = this;
    return () => {
      const filterButton = document.getElementById(field);
      that.setState(
        {
          [`${field}Hidden`]: !that.state[`${field}Hidden`]
        },
        () => {
          if (!that.state[`${field}Hidden`]) {
            filterButton.classList.remove("hide-dropdown");
          } else {
            filterButton.classList.add("hide-dropdown");
          }
        }
      );
    };
  }

  render() {
    return (
      <div className="filter">
        <div className="filter-button-container">
          <div className="filters">
            <button
              onClick={this.toggleFilterButtons("dates")}
              className="filter-button"
            >
              Dates
            </button>
            <div className="dates-filter-container hide-dropdown" id="dates">
              <div className="dates-filter-content">
                <Calendar />
              </div>
            </div>
            <button
              className="filter-button"
              id="filter-button"
              onClick={this.toggleFilterButtons("guests")}
            >
              Guests
            </button>
            <div className="guests-filter-container hide-dropdown" id="guests">
              <div className="guests-filter-container">
                <button className="minus" onClick={this.minusOne}>
                  -
                </button>
                {this.state.guests}
                <button className="plus" onClick={this.plusOne}>
                  +
                </button>
                <button className="save">Save</button>
              </div>
            </div>
            <button
              className="filter-button"
              id="price"
              onClick={this.toggleFilterButtons("price")}
            >
              Price
            </button>
            <div
              className="guests-filter-container hide-dropdown"
              id="price-filter"
            >
              <div className="guests-filter-container">Price Filters</div>
            </div>
            <button className="filter-button" id="filter-button">
              More filters
            </button>
            <div
              className="guests-filter-container hide-dropdown"
              id="button-filter"
            >
              <div className="guests-filter-container">More Filters</div>
            </div>
          </div>
          <div className="switch-container">
            <label className="showmap">Show Map</label>
            <label className="map-off-button">
              <input type="checkbox" onClick={this.toggleMap} />
              <span className="slider-button round" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
