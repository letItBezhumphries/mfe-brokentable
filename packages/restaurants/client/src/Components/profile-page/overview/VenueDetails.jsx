import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StreetIcon from "../../../assets/SVG/add_road.svg";
import NeighborhoodIcon from "../../../assets/SVG/office.svg";
import ClockIcon from "../../../assets/SVG/clock.svg";
import CuisineIcon from "../../../assets/SVG/restaurant.svg";
import StyleIcon from "../../../assets/SVG/room_service.svg";
import DressIcon from "../../../assets/icons8-wedding-dress-16.png";
import ParkIcon from "../../../assets/SVG/local_parking.svg";
import TransitIcon from "../../../assets/SVG/directions_train.svg";
import PaymentIcon from "../../../assets/SVG/credit_card.svg";
import ChefIcon from "../../../assets/icons8-chef-hat-16.png";
import SpecialIcon from "../../../assets/SVG/tag.svg";
import UrlIcon from "../../../assets/SVG/external-link.svg";
import PhoneIcon from "../../../assets/SVG/phone.svg";
import DetailsIcon from "../../../assets/SVG/brunch_dining.svg";
import PartiesIcon from "../../../assets/SVG/beverage.svg";
import PartyContactIcon from "../../../assets/SVG/local_bar.svg";

function VenueDetails({
  cross_street,
  neighborhood,
  hours,
  cuisine,
  style,
  dress,
  parking,
  transit,
  payment,
  chef,
  special,
  url,
  phone,
  details,
  parties,
  party_contact,
}) {

  const detailCardStyles = {
    border: "none",
    marginBottom: "16px",
  }

  const detailBodyStyles = {
    display: "flex",
    width: "100%",
    paddingLeft: "4px",
    textOverflow: "ellipsis",
  };

  const iconBoxStyles = {
    width: "1fr",
    flexShrink: "0",
    marginTop: "-1.99px",
  };

  const iconStyles = {
    margin: "0 auto",
    height: "24px",
    width: "24px",
    fill: "rgb(0,0,0)",
  };

  const textBoxStyles = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "6px",
    alignSelf: "center",
  };

  const detailHeaderStyles = {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
  };

  const detailStyles = { 
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "18.4px",
  }

  return (
    <Container fluid="true">
      <Row fluid="true">
        <Col fluid="true">
          { cross_street.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <StreetIcon style={iconStyles}/>
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Cross street</Card.Title>
                  <Card.Text style={detailStyles}>{cross_street}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { neighborhood.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <NeighborhoodIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Neighborhood</Card.Title>
                  <Card.Text style={detailStyles}>{neighborhood}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { hours.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <ClockIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Hours of operation</Card.Title>
                  <Card.Text style={detailStyles}>{hours}</Card.Text>
                </div>
              </div>
            </Card> 
          ) : null }
          { cuisine.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <CuisineIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Cuisines</Card.Title>
                  <Card.Text style={detailStyles}>{cuisine}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { payment.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <PaymentIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Payment options</Card.Title>
                  <Card.Text style={detailStyles}>{payment}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { style.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <StyleIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Dining Style</Card.Title>
                  <Card.Text style={detailStyles}>{style}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { dress.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>
                <div style={iconBoxStyles}>
                  <img src={DressIcon} height="20" width="20" style={{ color: "black" }} alt=''/>
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Dress Code</Card.Title>
                  <Card.Text style={detailStyles}>{dress}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { parking.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <ParkIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Parking</Card.Title>
                  <Card.Text style={detailStyles}>{parking}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { transit.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <TransitIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Transit</Card.Title>
                  <Card.Text style={detailStyles}>{transit}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { chef.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <img src={ChefIcon} height="20" width="20" style={{ color: "black" }} alt=''/>
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Executive chef</Card.Title>
                  <Card.Text style={detailStyles}>{chef}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { special.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <SpecialIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Additional</Card.Title>
                  <Card.Text style={detailStyles}>{special}</Card.Text>
                </div>
              </div>
            </Card>
          ) : null }
          { url.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <UrlIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Website</Card.Title>
                  <Card.Text style={detailStyles}>{url}</Card.Text>
                </div>
              </div>           
            </Card>
          ) : null }
          { phone.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <PhoneIcon style={iconStyles} />
                </div>          
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Phone number</Card.Title> 
                  <Card.Text style={detailStyles}>{phone}</Card.Text>                 
                </div>
              </div>             
            </Card>
          ) : null }
          { details.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <DetailsIcon style={iconStyles} />
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Catering</Card.Title>
                  <Card.Text style={detailStyles}>{details}</Card.Text>                   
                </div>
              </div>            
            </Card>
          ) : null }
          { parties.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>   
                <div style={iconBoxStyles}>
                  <PartiesIcon style={iconStyles} />
                </div>             
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Private party facilities</Card.Title>
                  <Card.Text style={detailStyles}>{parties}</Card.Text>                   
                </div>
              </div>            
            </Card>
          ) : null }
          { party_contact.length ? (
            <Card style={detailCardStyles}>
              <div style={detailBodyStyles}>                
                <div style={iconBoxStyles}>
                  <PartyContactIcon style={iconStyles}/>
                </div>
                <div style={textBoxStyles}>
                  <Card.Title style={detailHeaderStyles}>Private party contact</Card.Title>
                  <Card.Text style={detailStyles}>{party_contact}</Card.Text>                   
                </div>
              </div>            
            </Card>
          ) : null }
        </Col>
      </Row>
    </Container>
  );
}

export default VenueDetails;
