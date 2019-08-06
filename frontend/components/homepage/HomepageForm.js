import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import { withRouter } from "react-router-dom";

class HomepageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      start_date: null,
      end_date: null,
      guests: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    this.autoComplete();
  }

  autoComplete() {
    const input = document.getElementById("location-input");

    this.autocomplete = new google.maps.places.Autocomplete(input);
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(
      {
        location: document.getElementById("location-input").value
      },
      () => {
        return this.props
          .fetchListings(this.state.location)
          .then(this.props.history.push(`/listings/`));
      }
    );
  }

  render() {
    console.log(this.props);

    return (
      <section className="splash-form">
        <h1>Find your next place to call home</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="splash-form-field">
            <label>WHERE</label>
            <input
              id="location-input"
              type="text"
              placeholder="Anywhere"
              onChange={this.updateInput("location")}
            />
          </div>

          <div className="splash-form-field inline">
            <div className="splash-form-inline-field">
              <label>CHECK-IN</label>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={"mm/dd/yyy"}
              />
            </div>

            <div className="splash-form-inline-field">
              <label>CHECKOUT</label>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={"mm/dd/yyy"}
              />
            </div>
          </div>

          <div className="splash-form-field">
            <label>GUESTS</label>
            <input
              type="number"
              placeholder="Guests"
              min="1"
              onChange={this.updateInput("guests")}
            />
          </div>

          <div className="splash-form-button">
            <button>Search</button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(HomepageForm);
