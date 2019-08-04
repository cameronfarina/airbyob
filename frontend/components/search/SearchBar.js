import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.activateAutocomplete();
  }

  activateAutocomplete() {
    const input = document.getElementById("search-bar-field");
    const options = {
      types: ["(cities)"]
    };
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  onChange = e => {
    this.setState({
      userInput: e.currentTarget.value
    });
  };

  handleSubmit(event) {
    if (event.keyCode === "13") {
      debugger;
      event.preventDefault();
      const geocoder = new google.maps.Geocoder();
      const address = document.getElementById("search-bar-field").value;
      let formatted_address, geometry;
      geocoder.geocode({ address: address }, (results, status) => {
        if (status == "OK") {
          formatted_address = results[0].formatted_address;
          geometry = results[0].geometry;

          this.location = {
            vicinity: formatted_address,
            center: {
              lat: geometry.location.lat(),
              lng: geometry.location.lng()
            }
          };
        }
      });
    } else {
      event.preventDefault();
      this.props
        .fetchListings(this.state.userInput)
        .then(this.props.history.push(`/listings/`));
    }
  }

  render() {
    const {
      state: { userInput }
    } = this;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App-Component">
          <i className="fa fa-search search-bar-icon" />
          <input
            className="search-bar-input"
            id="search-bar-field"
            type="text"
            value={userInput}
            placeholder="Search for listings..."
            onChange={this.onChange}
          />
        </div>
      </form>
    );
  }
}

export default withRouter(SearchBar);
