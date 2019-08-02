import React, { Component, Fragment } from "react";

class Autocomplete extends Component {
  componentDidMount() {
    this.props.fetchSuggestions();
  }

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    let allSuggestions = [];
    let filteredSuggestions = [];
    for (let i = 0; i < suggestions.length; i++) {
      if (suggestions[i][0].includes(userInput)) {
        if (suggestions[i][2] === "null") {
          allSuggestions.push(`${suggestions[i][0]}, ${suggestions[i][1]}`);
        } else {
          allSuggestions.push(`${suggestions[i][0]}, ${suggestions[i][2]}`);
        }
      } else if (suggestions[i][1].includes(userInput)) {
        allSuggestions.push(suggestions[i][1]);
      } else if (suggestions[i][1] !== "United States") {
        continue;
      } else if (suggestions[i][2].includes(userInput)) {
        allSuggestions.push(suggestions[i][2], suggestions[i][1]);
      }
    }

    allSuggestions.map(suggestion => {
      if (!filteredSuggestions.includes(suggestion)) {
        filteredSuggestions.push(suggestion);
      }
    });

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsList;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsList = (
          <ul className="suggestions-list">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={index} onClick={this.onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      }
    }

    return (
      <form>
        <div className="App-Component">
          <div className="App-Component">
            <i className="fa fa-search" />
            <input
              id="search-bar-field"
              className="search-bar-input"
              type="text"
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              value={userInput}
              placeholder='Try "Los Angeles"'
            />
            {suggestionsList}
          </div>
        </div>
      </form>
    );
  }
}

export default Autocomplete;
