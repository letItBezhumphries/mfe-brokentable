import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import CloseIcon from "../../../../assets/SVG/close.svg";
import Calender from "../../../../assets/SVG/calendar_today.svg";
import Person from "../../../../assets/SVG/user.svg";
import Clock from "../../../../assets/SVG/access_time.svg";
import SearchIcon from "../../../../assets/SVG/magnifying-glass.svg";
import SelectIcon from "../../../../assets/SVG/chevron-small-down.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./restaurantSearchForm.css";

const RestaurantSearchForm = ({ closeSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    partySize: "",
    date: "",
    timeSlot: "",
    searchTerm: "",
  });

  const { partySize, date, timeSlot, searchTerm } = formData;
  var day = String(startDate.getDate()).padStart(2, "0");
  var month = String(startDate).split(" ")[1];
  var year = startDate.getFullYear();
  var currentDate = `${month} ${day}, ${year}`;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="restaurant-searchform-container">
      <div className="close-btn-box">
        <div className="icon-box" onClick={closeSearch}>
          <CloseIcon style={{ height: "20px", width: "20px", fill: "rgba(0,0,0,0.6)" }} />
        </div>
      </div>
      <div className="searchform-header-box">
        <p className="searchform-header">Find your table for any occasion</p>
      </div>
      <div className="searchform-box">
        <form className="restaurant-searchform">
          <div className="selectors-container">
            <div className="selector-box party-size-picker">
              <Form.Group controlId="reservationSearchForm.ControlSelectPartySize" className="dtp-selector">
                <div className="form-selector-icon-box">
                  <Person style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,0.8)" }} />
                </div>
                <Button as="select" name="partySize" value={partySize} onChange={(e) => onChange(e)} aria-labelledby="party-size-label" className="selector-btn" block>
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7">7 people</option>
                  <option value="8">8 people</option>
                  <option value="9">9 people</option>
                  <option value="10">10 people</option>
                  <option value="11">11 people</option>
                  <option value="12">12 people</option>
                  <option value="13">13 people</option>
                  <option value="14">14 people</option>
                  <option value="15">15 people</option>
                </Button>
              </Form.Group>
            </div>
            <div className="selector-box date-picker">
              <Form.Group controlId="reservationSearchForm.ControlSelectDayOfReservation" className="dtp-selector">
                <div className="form-selector-icon-box">
                  <Calender style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,0.8)" }} />
                </div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="selector-btn date" name="date" value={date} placeholderText={currentDate} />
                <div className="icon-box">
                  <SelectIcon style={{ height: "18px", width: "18px", fill: "rgba(0,0,0,0.8)" }} />
                </div>
              </Form.Group>
            </div>
            <div className="selector-box time-picker">
              <Form.Group controlId="reservationSearchForm.ControlSelectTimeOfReservation" className="dtp-selector">
                <div className="form-selector-icon-box">
                  <Clock style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,0.8)" }} />
                </div>
                <Button as="select" name="timeSlot" value={timeSlot} onChange={(e) => onChange(e)} aria-labelledby="reservation-time-label" className="selector-btn" block>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </Button>
              </Form.Group>
            </div>
          </div>
          <InputGroup className="dtp-search-input">
            <InputGroup.Prepend>
              <div className="form-selector-icon-box">
                <SearchIcon style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,0.8)" }} />
              </div>
            </InputGroup.Prepend>
            <FormControl
              aria-describedby="restaurant-search"
              className="dtp-search-formControl"
              placeholder="Location, Restaurant, or Cuisine"
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => onChange(e)}
            />
          </InputGroup>
          <input type="submit" value="Find a Table" data-test="restaurant-search-in-header-submit" className="search-submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default RestaurantSearchForm;
