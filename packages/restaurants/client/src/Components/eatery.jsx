import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Radium from "radium";
import RestaurantNavbar from "./profile-page/restaurantNavbar/restaurantNavbar";
import VenueDetails from "./profile-page/overview/VenueDetails";
import Header from "./header/header";
import PhotoHeading from "./profile-page/header/photoHeading";
import DetailsSub from "./profile-page/overview/detailsSubheading";
import Popular from "./profile-page/popular/popular";
import PhotoBase from "./profile-page/photos/photoBase";
import MenuSection from "./profile-page/menus/menuSection";
import Reviews from "./profile-page/reviews/reviews";
import Description from "./profile-page/overview/description";
import TitleHeading from "./profile-page/overview/titleHeading";
import TagsSubheading from "./profile-page/overview/tagsSubheading";
import Reservations from "./profile-page/secondary/reservations";
import Orders from "./profile-page/secondary/orders";
import Spinner from "./spinner/Spinner";
import Footer from "./footer/footer";
import axios from "axios";

class Eatery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      name: "",
      description: "",
      cuisine: "",
      menuOne: "",
      menuTwo: "",
      menuThree: "",
      menuFour: "",
      menuFive: "",
      cross_street: "",
      neighborhood: "",
      hours: "",
      style: "",
      dress: "",
      parking: "",
      transit: "",
      payment: "",
      chef: "",
      details: "",
      url: "",
      phone: "",
      parties: "",
      party_contact: "",
      special: "",
      reviewNum: "0 reviews",
      starAvg: 0,
      tags: [],
      cost: "$30 and under"
    };
  };

  componentDidMount() {
    let RESTAURANTS_API, REVIEWS_API;
    if (process.env.NODE_ENV === "development") {
      RESTAURANTS_API = process.env.DEV_RESTAURANT_URL;
      REVIEWS_API = process.env.DEV_REVIEWS_URL;
    } else {
    //  RESTAURANTS_API = process.env.PROD_RESTAURANT_URL;
    //  REVIEWS_API = process.env.PROD_REVIEWS_URL;
      RESTAURANTS_API = "https://brokentable.xyz/wild";
      REVIEWS_API = "https://brokentable.xyz/api/restaurants/";
    }

    axios
      .get(RESTAURANTS_API, { crossdomain: true })
      .then((res) => {
        var restaurantID = res.data.ID;
        this.setState({
          ID: restaurantID,
          name: res.data.name,
          description: res.data.description,
          cuisine: res.data.cuisine,  
          menuOne: res.data.menuOne,
          menuTwo: res.data.menuTwo,
          menuThree: res.data.menuThree,
          menuFour: res.data.menuFour,
          menuFive: res.data.menuFive,
          cross_street: res.data.cross_street,
          neighborhood: res.data.neighborhood,
          hours: res.data.hours,
          style: res.data.style,
          dress: res.data.dress,
          parking: res.data.parking,
          transit: res.data.transit,
          payment: res.data.payment,
          chef: res.data.chef,
          details: res.data.details,
          url: res.data.url,
          phone: res.data.phone,
          parties: res.data.parties,
          party_contact: res.data.party_contact,
          special: res.data.special,
        });
        window.history.pushState("string", "Title", `/restaurants/${restaurantID}`);
        return restaurantID;
      })
      .then(
        (restaurantID) =>
          axios.get(REVIEWS_API + restaurantID + '/reviews', {
            crossdomain: true,
          })
      )
      .then((res) => {
        var totalRev = res.data.length;
        var revText = "";
        if (totalRev === 0) {
          revText = "No reviews";
        } else if (totalRev === 1) {
          revText = "1 review";
        } else if (totalRev > 1) {
          revText = totalRev.toString() + " Reviews";
        }
        var starSum = 0;
        var tagStash = {};
        res.data.forEach((element) => {
          starSum += element.overallScore;
          let tagParse = element.tags.split(", ");
          tagParse.forEach((item) => {
            if (Object.keys(tagStash).length < 1) {
              tagStash[item] = 1;
            } else {
              if (tagStash.hasOwnProperty(item)) {
                tagStash[item] = tagStash[item] += 1;
              } else {
                tagStash[item] = 1;
              }
            }
          });
        });
        var tagsRender = [];
        if (Object.keys(tagStash).length > 0 && Object.keys(tagStash).length < 4) {
          for (var key in tagStash) {
            tagsRender.push(key);
          }
        } else if (Object.keys(tagStash).length > 3) {
          var tagSort = [];
          for (var tag in tagStash) {
            tagSort.push([tag, tagStash[tag]]);
          }
          tagSort.sort(function (a, b) {
            return a[1] - b[1];
          });
          for (var x = 0; x < 3; x++) {
            tagsRender.push(tagSort[x][0]);
          }
        }
        this.setState({
          reviewNum: revText,
          starAvg: starSum / totalRev,
          tags: tagsRender
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const minutiae = {
      cross_street: this.state.cross_street,
      neighborhood: this.state.neighborhood,
      cuisine: this.state.cuisine,
      hours: this.state.hours,
      style: this.state.style,
      dress: this.state.dress,
      parking: this.state.parking,
      transit: this.state.transit,
      payment: this.state.payment,
      chef: this.state.chef,
      details: this.state.details,
      url: this.state.url,
      phone: this.state.phone,
      parties: this.state.parties,
      party_contact: this.state.party_contact,
      special: this.state.special,
    };

    const mainPageStyles = {
      transform: "translateY(-50px)", 
      minWidth: "100%", 
      backgroundColor: "transparent", 
      display: "flex",
      justifyContent: "space-between",
      zIndex: "100",
    };

    const restaurantPageStyles = {
      width: "50%",
      flex: "1 1 50%",
      marginLeft: "7.5rem",
      marginRight: "7.5rem",
      backgroundColor: "#fff",
      backgroundAttachment: "scroll",
    };

    const venueColumnStyles = {
      flex: "1 1 25%",
      marginRight: "7.5rem",
    };

    const headerContainerStyles = {
      padding: "0 0", 
      margin: "0 0", 
      width: "100%", 
      overflowX: "hidden"
    }

    return (
      <Container fluid="true">
        <Container fluid="true" style={headerContainerStyles}>
          <Header />
          { !this.state.ID.length ? <Spinner /> : <PhotoHeading className="position-relative" /> }         
        </Container>
        <Container style={mainPageStyles} fluid="true">
          <Container style={restaurantPageStyles}>
            <RestaurantNavbar />
            <Container fluid="true" data-bs-spy="scroll" data-bs-target="#restaurant-page-nav" data-bs-offset="0" tabIndex="0">
              <Container style={{ margin: "1.6rem .8rem 1.6rem .8rem" }} fluid="true" id="overview">
                <TitleHeading name={this.state.name} />
                <DetailsSub rev={this.state.reviewNum} starz={this.state.starAvg} tagz={this.state.tags} cuisine={this.state.cuisine} />
                <TagsSubheading tagz={this.state.tags} fare={this.state.style} />
              </Container>
              <Description description={this.state.description} />
              { !this.state.ID.length ? <Spinner /> : <PhotoBase /> }
              <Popular />
              <MenuSection 
                menu1={this.state.menuOne} 
                menu2={this.state.menuTwo} 
                menu3={this.state.menuThree} 
                menu4={this.state.menuFour} 
                menu5={this.state.menuFive}   
                />
              { !this.state.ID.length ? <Spinner /> : <Reviews /> }
            </Container>
          </Container>

          <Container style={venueColumnStyles}>
            <Reservations />
            <Orders />
            <VenueDetails {...minutiae} />
          </Container>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Radium(Eatery);
