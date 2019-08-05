import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.autoComplete();
  }

  autoComplete() {
    const input = document.getElementById("search-bar-field");

    this.autocomplete = new google.maps.places.Autocomplete(input);
  }

  onChange = e => {
    this.setState({
      userInput: e.currentTarget.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        userInput: document.getElementById("search-bar-field").value
      },
      () =>
        this.props
          .fetchListings(this.state.userInput)
          .then(this.props.history.push(`/listings/`))
    );
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
