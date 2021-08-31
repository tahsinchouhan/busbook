import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import Salyimg from "../../assets/img/Saly-1.svg";
import Layer11 from "../../assets/img/hil.svg";
import Layer12 from "../../assets/img/adivash.svg";
import men1 from "../../assets/img/men.svg";
import doodle1 from "../../assets/img/doodle.png";
import "../../assets/css/saly.css";
import Inform from "./Footer";
import { NavLink, useHistory } from "react-router-dom";
import TravellerCard from "./TravellerCard";
import TravellerTicket from "./TravellerTicket";
import TravellerTicketMobile from "./TravellerTicketMobile";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import SearchFelid from "./SearchFelid";
import { toast, ToastContainer } from 'react-toastify'
import { BsSearch } from "react-icons/bs";
import manWithMobile from "../../assets/img/Saly-14@2x.png"
import manWithMobile2 from "../../assets/img/Saly-14.png"

function Saly() {
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const onButtonclick = () => {
    console.log("object");
    history.push("/select-booking");
  };
  const dmPassId = localStorage.getItem("dm_pass_id")

  const gotoTickets_sraech = () => {
    console.log("object");
    if (dmPassId) {
      history.push(`/dm-detail/${dmPassId}`);
    } else {
      toast.error("Please Create Your Ticket", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

      })
    }
  };

  useEffect(() => {
    getDestinations();
  }, []);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        setDestinations(json.data);
        console.log("datatata", json.data);
      })
      .catch((e) => console.log(e));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  const viewDetails = (value) => {
    history.push({
      pathname: `/destination_details/${value.title}`,
      id: value._id,
    });
  }

  const bookTickets = () => {
    history.push('/select-booking')
  }
  return (
    <>
      <Container
        fluid
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        <Row className="saly_div w-100 ">
          <Col xs={12} md={6}>
            <div className="rocket-image pt-3">
              <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="p-5">
              <div className="explore">
                <h2 className="explore_div">Explore</h2>
                <p>Check out the best tourism destinations around Bastar</p>
              </div>
              <div>
                <iframe
                  style={{ borderRadius: "10px" }}
                  // className="search_view"
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/V_JZZ1glvkA"
                  title="YouTube video player"
                  frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <Row className="pt-5">
                <Carousel
                  partialVisbile
                  itemClass="image-item"
                  responsive={responsive}
                >
                  {destinations.length ? (
                    destinations.map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)}>
                          <Image
                            draggable={false}
                            //  style={{ width: "150px", height: "150px" }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="packages__block-title mt-3">
                              {item.title}
                            </h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1></h1>
                  )}
                </Carousel>

                <div className="travel_home_btn pt-0">
                  <Button
                    onClick={() => history.push("/populardestinations")}
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      backgroundColor: "#0FA453",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                      padding: 15,
                      width: "186px",
                      outline: 'none',
                      border: 'none',
                      borderRadius: "10px",
                    }}
                  >
                    View all Destinations
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <div
          style={{ backgroundColor: "black", color: "white", height: "370px" }}
        >
          <div style={{ flexDirection: "row" }}>
            <Col>
              <div style={{ paddingTop: "100px", textAlign: "center" }}>
                <div className="bookings-div">
                  <h3>Bookings</h3>
                  <p>Book tickets for Bus,Location wise Tickets and Traveller Passes</p>
                </div>
                <Button
                  className="makebooking-btn"
                  // style={{ backgroundColor: "#864BD8", color: "white" }}                 
                  onClick={onButtonclick}
                >
                  Step 1 - Book Travel Pass
                </Button>

              </div>              
              {/* <div style={{position: "relative"}}>
                <div className="men-image" style={{ width: "189px", height: "413px", position:"absolute", left:"38%" }}>
                  <Image src={manWithMobile2} alt="men" />
                </div>
              </div> */}
            </Col>
            <Col></Col>


          </div>
        </div>

        {/*Tictets*/}
        <Container>
          <div className="ticket-div py-5">
            <Row>
              <Col sm={6} md={6}>
                <div>
                  <h3 className="ml-5">Book Tickets</h3>
                  <p>
                    View all part tickets and check out where you have visited
                  </p>
                </div>
              </Col>
              <Col sm={3} md={3}>
                <div className="search__inner" style={{ marginTop: "33px", width: "199px" }} onClick={gotoTickets_sraech}>
                  <div className="search__block">
                    <div className="block__location">
                      <label className="block--text code" >
                        Search Tickets
                      </label>
                    </div>
                    <button className="search__btn">
                      <BsSearch color="white" size="25px" />
                    </button>
                  </div>
                </div>
              </Col>

              <Col sm={3} md={3}>
                <div className="viewbtn">
                  <Button
                    // variant="danger"
                    style={{
                      cursor: "pointer",
                      marginTop: "32px",
                      backgroundColor: "#FF814A",
                      borderRadius: "10px",
                      border: "none",
                      width: "186px",
                      height: "53.63px"
                    }}
                    // onClick={gotoTickets_sraech}
                    onClick={bookTickets}

                  >
                    Book Tickets
                  </Button>
                </div>
              </Col>



            </Row>
            <div className="pt-4">
              <Container>
                <h4>
                  {/* <b>Recent Tickets</b> */}
                </h4>
                <TravellerTicket />
              </Container>
            </div>

          </div>
        </Container>



        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div fluid style={{ padding: 0, margin: 0 }}>
          <Row className=" saly_div pt-3 w-100">
            <Col xs={12} md={6}>
              <div className="rocket-image" style={{ textAlign: "center" }}>
                <img src={Salyimg} alt="saly" style={{ width: "80%" }} />
              </div>
            </Col>
            <Col xs={12} md={6} className="pt-0">
              <div style={{ padding: "20px" }}>
                <div className="explore">
                  <h2 className="explore_div">Explore</h2>
                  <p>Check out the best tourism destinations around Bastar</p>
                </div>
                <Carousel
                  partialVisbile
                  itemClass="image-item"
                  responsive={responsive}
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  {/* <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                  <div>Item 4</div> */}
                  {destinations.length ? (
                    destinations.map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)} >
                          <Image
                            draggable={false}
                            style={{ width: "150px", paddingRight: "10px", borderRadius: "0px" }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="mt-3" style={{ fontWeight: "bold" }}>{item.title}</h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1></h1>
                  )}
                </Carousel>
                <div className="travel_home_btn mt-4 mb-3 ">
                  <Button
                    onClick={() => history.push("/populardestinations")}
                    variant=""
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#0FA453",
                      color: "white",
                      fontSize: "16px",
                      // fontWeight: "bolder",
                      width: "258px",
                      height: "48.41px",
                      borderRadius: "10px",
                    }}
                  >
                    View all Destinations
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              height: "595px",
            }} >
            <div style={{ flexDirection: "row" }}>
              <Col>
                <div style={{ paddingTop: "100px", textAlign: "center" }}>
                  <div className="bookings-div">
                    <h3>Bookings</h3>
                    <p>Book tickets for Bus,Location wise Tickets and Traveller Passes</p>
                  </div>
                  <Button
                    className="makebooking-btn"
                    // style={{ backgroundColor: "#0FA453", color: "white" }}
                    onClick={onButtonclick}
                  >
                    Step 1 - Book Travel Pass
                  </Button>
                  <div style={{ width: "266px", height: "487px", marginLeft: "42px" }}>
                    <Image className="img-fluid" src={manWithMobile} />
                  </div>
                </div>
              </Col>
              <Col></Col>
            </div>
          </div>

          {/*Tictets*/}
          <Container>
            <div className="ticket-div py-5">
              <Row>
                <Col sm={6} md={6}>
                  <div>
                    <h3 className="ml-5">
                      <b>Book Tickets</b>
                    </h3>
                    <p>
                      Get tickets to your favourite <br />
                      destinations right from your mobile
                    </p>
                  </div>
                </Col>

                {/* <Col sm={6} md={6}>
                  <div className="viewbtn">
                    <Button
                      // variant="danger"                      
                      style={{
                        cursor: "pointer",
                        marginTop: "32px",
                        backgroundColor: "#FF814A",
                        borderRadius: "10px",
                        border: "none",
                        width: "186px",
                        height: "53.63px"
                      }}
                      onClick={gotoTickets_sraech}
                    >
                      View your Tickets
                    </Button>
                  </div>
                </Col> */}
              </Row>
              <div className="pt-4">
                <Container>
                  <h4>
                    {/* <b>Recent Tickets</b> */}
                  </h4>
                  <TravellerTicketMobile />
                </Container>
              </div>
              {/* <div className="viewbtn">
                <Button
                  // variant="danger"                      
                  style={{
                    cursor: "pointer",
                    marginTop: "32px",
                    backgroundColor: "#FF814A",
                    borderRadius: "10px",
                    border: "none",
                    width: "186px",
                    height: "53.63px"
                  }}
                  onClick={gotoTickets_sraech}
                >
                  Book Now
                </Button>
              </div> */}
            </div>
          </Container>
          <div className="py-5 " style={{ backgroundColor: "black", color: "white" }}
          >
            <Container>
              <div className="mb-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h2 className="package__title">
                      <span>Popular</span> Destinations
                    </h2>
                    <h6>
                      The best tourist loactions across Bastar, rated and curated by
                      travellers.
                    </h6>
                  </div>

                  <h6
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push("/populardestinations")}
                    className="package__title pt-5"
                  >
                    View All
                  </h6>
                </div>
              </div>
              {destinations.length > 0 ? (
                <Carousel
                  ssr
                  partialVisbile
                  itemClass="image-item"
                  responsive={responsive}
                >
                  {destinations.map((item, key) => {
                    return (
                      <div key={key} onClick={() => viewDetails(item)} >
                        <Image
                          draggable={false}
                          //  style={{ width: "150px", height: "150px", paddingRight:"10px" }}
                          src={item.upload_images}
                        />

                        <div style={{ color: "white" }} className="package__trip">
                          <h6 className="packages__block-title mt-3 mb-0">
                            {item.title}
                          </h6>
                          <small className="packages__block-subtitle">
                            {item.sub_title}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              ) : null}
            </Container>
          </div>


        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default Saly;
