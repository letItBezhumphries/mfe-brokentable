import React, { useState } from "react";
import NavTabs from "./navTabs";

const restaurantNavbar = () => {  
  return (
    <NavTabs>
      <div label="Overview" href="#overview" eventkey="1">Overview</div>
      <div label="Photos" href="#photos" eventkey="2">Photos</div>
      <div label="Popular dishes" href="#popular" eventkey="3">Popular dishes</div>
      <div label="Menu" href="#menu" eventkey="4">Menu</div>
      <div label="Reviews" href="#reviews" eventkey="5">Reviews</div>   
    </NavTabs>
  )
}

export default restaurantNavbar;