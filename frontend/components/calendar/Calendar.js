import React from "react";
import Helmet from "react-helmet";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default class Calendar extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DayPicker
          numberOfMonths={this.props.numberOfMonths}
          // disabledDays={this.props.bookedDates.map(date => {
          //   new Date(date);
          // })}
        />
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #26c4bcce !important;
    color: black;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}
