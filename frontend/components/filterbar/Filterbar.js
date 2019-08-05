import React from "react";
import Calendar from "react-calendar/dist/entry.nostyle";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapHidden: "false",
      filterButtonHidden: "true"
    };
    this.toggleMap = this.toggleMap.bind(this);
    this.toggleFilterButtons = this.toggleFilterButtons.bind(this);
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

  toggleFilterButtons() {
    const filterButton = document.getElementById("filter-button");
    this.setState({
      filterButtonHidden: !this.state.filterButtonHidden
    });

    // if (this.state.filterButtonHidden) {
    //   filterButton.classList.remove("show-button");
    // } else {
    //   filterButton.classList.add("show-button");
    // }
  }

  render() {
    return (
      <div className="filter">
        <div className="filter-button-container">
          <div className="filters">
            <button
              onClick={this.toggleFilterButtons}
              className="filter-button"
            >
              Dates
            </button>
            <button
              onClick={this.toggleFilterButtons}
              className="filter-button"
              id="filter-button"
            >
              Guests
            </button>
            <button
              onClick={this.toggleFilterButtons}
              className="filter-button"
              id="filter-button"
            >
              Price
            </button>
            <button
              onClick={this.toggleFilterButtons}
              className="filter-button"
              id="filter-button"
            >
              More filters
            </button>
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
