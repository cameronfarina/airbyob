import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

class HomepageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      start_date: null,
      end_date: null,
      guests: 1
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  componentDidMount() {
    this.autoComplete();
  }

  autoComplete() {
    const input = document.getElementById("location-input");
    const options = {
      types: ["(cities)"]
    };
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  getNewDate(date) {
    let dateObject = date;
    return (
      dateObject.getFullYear() +
      "-" +
      (dateObject.getMonth() + 1) +
      "-" +
      dateObject.getDate()
    );
  }

  handleStartDateChange(day) {
    this.setState({ start_date: this.getNewDate(day) });
  }

  handleEndDateChange(day) {
    this.setState({ end_date: this.getNewDate(day) });
  }

  nextDay(day) {
    const nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    return nextDay;
  }

  render() {
    const today = new Date();
    const start = this.state.start_date
      ? this.nextDay(new Date(this.state.start_date))
      : this.nextDay(today);

    return (
      <section className="splash-form">
        <h1>Find your next place to call home</h1>
        <form>
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
                dayPickerProps={{
                  disabledDays: {
                    before: today
                  }
                }}
                onDayChange={this.handleStartDateChange}
              />
            </div>

            <div className="splash-form-inline-field">
              <label>CHECKOUT</label>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={"mm/dd/yyy"}
                dayPickerProps={{
                  month: start,
                  disabledDays: {
                    before: start
                  }
                }}
                onDayChange={this.handleEndDateChange}
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

export default HomepageForm;
