import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import CloseIcon from "../../../../assets/SVG/close.svg";
import Calender from "../../../../assets/SVG/calendar_today.svg";
import Person from "../../../../assets/SVG/user.svg";
import Clock from "../../../../assets/SVG/access_time.svg";
import SearchIcon from "../../../../assets/SVG/magnifying-glass.svg";
import "./restaurantSearchForm.css";


const RestaurantSearchForm = ({ closeSearch }) => {
  const [formData, setFormData] = useState({
    partySize: "",
    date: "",
    timeSlot: "",
    searchTerm: ""
  });
  
  const {
    partySize,
    date,
    timeSlot,
    searchTerm
  } = formData;
  
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
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
                <Button as="select" name='partySize' value={partySize} onChange={e => onChange(e)} aria-labelledby="party-size-label" className="selector-btn" block>
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
                <Button as="select" value="Jul 16, 2021" name='date' value={date} onChange={e => onChange(e)} aria-labelledby="reservation-date-label" className="selector-btn" block>
                  <option value="Jul 16, 2021">Jul 16, 2021</option>            
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
            <div className="selector-box time-picker">
              <Form.Group controlId="reservationSearchForm.ControlSelectTimeOfReservation" className="dtp-selector">
                <div className="form-selector-icon-box">
                  <Clock style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,0.8)" }} />
                </div>
                <Button as="select" name='timeSlot' value={timeSlot} onChange={e => onChange(e)} aria-labelledby="reservation-time-label" className="selector-btn" block>
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
            <FormControl aria-describedby="restaurant-search" className="dtp-search-formControl" placeholder="Location, Restaurant, or Cuisine" name="searchTerm" value={searchTerm} onChange={e => onChange(e)} />
          </InputGroup>
          <input type="submit" value="Find a Table" data-test="restaurant-search-in-header-submit" className="search-submit-btn" />
        </form>
      </div>
    </div>
  )
}


export default RestaurantSearchForm;