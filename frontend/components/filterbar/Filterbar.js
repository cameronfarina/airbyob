import React from "react";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="filter">
        <div className="filter-button-container">
          <div className="filters">
            <button className="filter-button">Dates</button>
            <button className="filter-button">Guests</button>
            <button className="filter-button">Home type</button>
            <button className="filter-button">Price</button>
            <button className="filter-button">More filters</button>
          </div>
          <div className="switches">
            <label className="showmap">Show Map</label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;