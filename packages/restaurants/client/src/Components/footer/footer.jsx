import React from "react";
import Container from "react-bootstrap/Container";
import "./footer.css";


const Footer = () => <Container className="footer" fluid="true">
    <div className="footerContainer">
      <div className="emailSectionContainer">
        <div className="footerEmailTitleContainer">
          <div className="footerEmailTitle">Become an Insider</div>
          <div className="footerEmailSubtitle">
            Gain access to exclusive offers, best-of lists, local events & more
            (you can unsubscribe any time).
          </div>
        </div>
        <div className="inputAndButton bottomBorder">
          <div className="subscribeContainer">
            <input
              className="subscribe"
              type="email"
              name="subscribe"
              id="subscribe"
              placeholder="Email"
            />
          </div>
          <div className="subscribeButtonContainer">
            <button className="subscribeButton">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="linksSectionContainer">
        <div className="seeRestaurants bottomBorder">
          <span className="seeRestaurantsLink">See Full Restaurant List</span>
        </div>
        <div className="discoverContainer linksBox">
          <h6 className="linksTitle">DISCOVER</h6>
          <ul>
            <li>
              <div className="exampleLink">Dining Rewards</div>
            </li>
            <li>
              <div className="exampleLink">Private Dining</div>
            </li>
            <li>
              <div className="exampleLink">Top 100 Restaurants</div>
            </li>
            <li>
              <div className="exampleLink">Reserve For Others</div>
            </li>
            <li>
              <div className="exampleLink">Cuisines Near Me</div>
            </li>
          </ul>
        </div>
        <div className="brokenTableContainer linksBox">
          <h6 className="linksTitle">BROKENTABLE</h6>
          <ul>
            <li>
              <div className="exampleLink">About Us</div>
            </li>
            <li>
              <div className="exampleLink">Blog</div>
            </li>
            <li>
              <div className="exampleLink">Careers</div>
            </li>
            <li>
              <div className="exampleLink">Press</div>
            </li>
          </ul>
        </div>
        <div className="moreContainer linksBox">
          <h6 className="linksTitle">MORE</h6>
          <ul>
            <li>
              <div className="exampleLink">BrokenTable for iOS</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable for Android</div>
            </li>
            <li>
              <div className="exampleLink">Affiliate Program</div>
            </li>
            <li>
              <div className="exampleLink">Contact Us</div>
            </li>
          </ul>
        </div>
        <div className="ourSitesContainer linksBox">
          <h6 className="linksTitle">OUR SITES</h6>
          <ul>
            <li>
              <div className="exampleLink">BrokenTable.jp</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable.de</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable.ca</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable.es</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable.hk</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable.ie</div>
            </li>
            <li>
              <div className="exampleLink">BrokenTable.co.uk</div>
            </li>
          </ul>
        </div>
        <div className="restauranteursContainer linksBox">
          <h6 className="linksTitle">RESTAURANTEURS</h6>
          <div className="fakeButton exampleLink">Delight more diners</div>
          <div className="fakeButton exampleLink">Open for Business Blog</div>
        </div>
      </div>
      <div className="copyrightEtcContainer bottomBorder">
        <div className="copyrightText">Copyright © 2019 The Busboys, Inc.</div>
      </div>
    </div>
  </Container>


export default Footer;