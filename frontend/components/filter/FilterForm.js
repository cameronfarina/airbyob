import React from "react";

const handleChange = (filter, updateFilter) => e =>
  updateFilter(filter, parseInt(e.currentTarget.value));

const FilterForm = ({
  minPrice,
  maxPrice,
  minBeds,
  maxBeds,
  minBathrooms,
  maxBathrooms,
  updateFilter
}) => (
  <div>
    <span className="filter">Filter results:</span>
    <br />
    <label>Minimum Price</label>
    <input
      type="number"
      value={minPrice}
      onChange={handleChange("minPrice", updateFilter)}
    />
    <br />
    <label>Maximum Price</label>
    <input
      type="number"
      value={maxPrice}
      onChange={handleChange("maxPrice", updateFilter)}
    />
    <label>Minimum Beds</label>
    <input
      type="number"
      value={minBeds}
      onChange={handleChange("minBeds", updateFilter)}
    />
    <label>Maximum Beds</label>
    <input
      type="number"
      value={maxBeds}
      onChange={handleChange("maxBeds", updateFilter)}
    />
    <label>Minimum Bathrooms</label>
    <input
      type="number"
      value={minBathrooms}
      onChange={handleChange("minBathrooms", updateFilter)}
    />
    <label>Maximum Bathrooms</label>
    <input
      type="number"
      value={maxBathrooms}
      onChange={handleChange("maxBathrooms", updateFilter)}
    />
  </div>
);

export default FilterForm;
