import React from "react";
import SearchBar from "../search/SearchBar";

export default function IndexForm() {
  return (
    <div className="index-form-container">
      <label WHERE />
      <SearchBar />
      <div className="check-in">
        <label>CHECK IN</label>
        <label>CHECK OUT</label>
      </div>
      <label>GUESTS</label>
      <input type="number" min="1" placeholder="Guests" />
    </div>
  );
}
