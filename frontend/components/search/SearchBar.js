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
    this.autoComplete();
  }

  autoComplete() {
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
      event.preventDefault();
      this.setState({
        userInput: document.getElementById("search-bar-field").value
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
