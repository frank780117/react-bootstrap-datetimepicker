import React, { Component, PropTypes } from "react";
import DateTimePickerSeconds from "./DateTimePickerSeconds";
import DateTimePickerMinutes from "./DateTimePickerMinutes";
import DateTimePickerHours from "./DateTimePickerHours";
import Constants from "./Constants.js";

export default class DateTimePickerTime extends Component {
  static propTypes = {
    setSelectedHour: PropTypes.func.isRequired,
    setSelectedMinute: PropTypes.func.isRequired,
    setSelectedSecond: PropTypes.func.isRequired,
    subtractHour: PropTypes.func.isRequired,
    addHour: PropTypes.func.isRequired,
    subtractMinute: PropTypes.func.isRequired,
    addMinute: PropTypes.func.isRequired,
    subtractSecond: PropTypes.func.isRequired,
    addSecond: PropTypes.func.isRequired,
    viewDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object.isRequired,
    togglePeriod: PropTypes.func.isRequired,
    mode: PropTypes.oneOf([Constants.MODE_DATE, Constants.MODE_DATETIME, Constants.MODE_TIME])
  }

  state = {
    secondsDisplayed: false,
    minutesDisplayed: false,
    hoursDisplayed: false
  }

  goBack = () => {
    return this.setState({
      secondsDisplayed: false,
      minutesDisplayed: false,
      hoursDisplayed: false
    });
  }

  showSeconds = () => {
    return this.setState({
      secondsDisplayed: true
    });
  }

  showMinutes = () => {
    return this.setState({
      minutesDisplayed: true
    });
  }

  showHours = () => {
    return this.setState({
      hoursDisplayed: true
    });
  }

  renderSeconds = () => {
    if (this.state.secondsDisplayed) {
      return <DateTimePickerSeconds {...this.props} onSwitch={this.goBack} />;
    } else {
      return null;
    }
  }

  renderMinutes = () => {
    if (this.state.minutesDisplayed) {
      return <DateTimePickerMinutes {...this.props} onSwitch={this.goBack} />;
    } else {
      return null;
    }
  }

  renderHours = () => {
    if (this.state.hoursDisplayed) {
      return <DateTimePickerHours {...this.props} onSwitch={this.goBack} />;
    } else {
      return null;
    }
  }

  renderPicker = () => {
    if (!this.state.minutesDisplayed && !this.state.hoursDisplayed) {
      return (
      <div className="timepicker-picker">
        <table className="table-condensed">
          <tbody>
            <tr>
              <td><a className="btn" onClick={this.props.addHour}><span className="glyphicon glyphicon-chevron-up" /></a></td>

              <td className="separator"></td>

              <td><a className="btn" onClick={this.props.addMinute}><span className="glyphicon glyphicon-chevron-up" /></a></td>

              <td className="separator"></td>

              <td><a className="btn" onClick={this.props.addSecond}><span className="glyphicon glyphicon-chevron-up" /></a></td>

              <td className="separator"></td>
            </tr>

            <tr>
              <td><span className="timepicker-hour" onClick={this.showHours}>{this.props.selectedDate.format("H")}</span></td>

              <td className="separator">:</td>

              <td><span className="timepicker-minute" onClick={this.showMinutes}>{this.props.selectedDate.format("mm")}</span></td>

              <td className="separator"></td>

              <td><span className="timepicker-second" onClick={this.showSeconds}>{this.props.selectedDate.format("ss")}</span></td>

            </tr>

            <tr>
              <td><a className="btn" onClick={this.props.subtractHour}><span className="glyphicon glyphicon-chevron-down" /></a></td>

              <td className="separator"></td>

              <td><a className="btn" onClick={this.props.subtractMinute}><span className="glyphicon glyphicon-chevron-down" /></a></td>

              <td className="separator"></td>

              <td><a className="btn" onClick={this.props.subtractSecond}><span className="glyphicon glyphicon-chevron-down" /></a></td>

              <td className="separator"></td>
            </tr>
          </tbody>
        </table>
      </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
        <div className="timepicker">
          {this.renderPicker()}

          {this.renderHours()}

          {this.renderMinutes()}

          {this.renderSeconds()}
        </div>
    );
  }
}

module.exports = DateTimePickerTime;
