import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import loadingGif from '../../assets/img/balls_loading.gif'
import { BsShopWindow } from "react-icons/bs";
import bus1 from "../../assets/img/bus.png";
import hotel from "../../assets/img/hotel.png";
import city1 from "../../assets/img/city.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Room from "../../assets/img/hotelRoom.jpeg";
import { Carousel } from "antd";
import hotelotherimage from "../../assets/img/hotelotherimage.jpg";
import { FiWifi } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function ListCard(props) {
  // console.log({props})
  const history = useHistory();
  const {
    getHotelList: hotels,
    getStartData,
    isLoading,
  } = useSelector((state) => state.hotelReducer);
  const viewDetails = (HotelId) => {
    history.push(`/hotelDetails/${HotelId}`);
  };
  const bookNow = (HotelId) => {
    history.push(`/hotelconfirmation/${HotelId}`);
  };
  const [view, setView] = useState(false)
  return (
    <>
      {isLoading ?
        <div className="loader">
          <img src={loadingGif} alt="Loading..." height="150px" />
        </div>
        : <></>}

      {hotels?.length > 0 ? (
        <div>
          {" "}
          <h5
            style={{
              marginLeft: "12px",
              fontFamily: "poppins",
              fontWeight: "bolder",
            }}
          >
            {hotels?.length} Hotels in{" "}
            {getStartData?.sendlocation === undefined
              ? "Jagdalpur"
              : getStartData?.sendlocation}{" "}
          </h5>
        </div>
      ) : (
        <center>
          <label className="text-danger">
            Hotel Service is available in Jagdalpur City Only.{" "}
          </label>
        </center>
      )}

      {hotels?.map((item, index) => {
        return (
          <div
            className="d-none d-md-block p-0"
            style={{ float: "left" }}
            key={index}
          >
            <div
              style={{
                backgroundColor: "white",
                // paddingInline: "10%",
                // maxWidth: "900",
                // margin: "40px auto",
              }}
            >
              <div className="p-0">
                {/* <Row style={{ paddingBottom: "20px" }}>
                  <Col md={12}>
                    {/* <h3
                      className="fontweight"
                      style={{
                        fontSize: "19px",
                        color: "#0FA453",
                        fontWeight: 900,
                      }}
                    >
                      {item?.full_address?.street}, {item?.full_address?.city}{" "}
                      C.G
                    </h3> */}
                {/* <span
                      style={{
                        color: "black",
                        fontWeight: 900,
                        fontSize: "17px",
                      }}
                      onClick={() => {
                        history.push("/hotelsearch");
                      }}
                    >
                      Change
                    </span> */}
                {/* </Col>
                  <Col>
                    <Form.Label
                      className=""
                      style={{
                        fontSize: "33px",
                        fontWeight: 900,
                        marginLeft: "4px",
                        color: "#a5a5a5",
                        float: "right",
                        paddingRight: "20px",
                      }}
                    ></Form.Label>
                  </Col>
                </Row> */}

                <React.Fragment>
                  <Container style={{ cursor: "pointer" }}>
                    <Row>
                      <div md={4} className="col-sm-4 m-0 p-0">
                        <Carousel
                        // autoplay
                        >
                          <div>
                            <img
                              src={item?.room_data?.image !== "" ? Room : Room}
                              alt="room img"
                              style={{
                                width: "500px",
                                height: "253px",
                                marginTop: "10px",
                                // marginRight: "25px",
                              }}
                            />
                          </div>
                          <div>
                            <img
                              src={
                                item?.room_data?.image !== ""
                                  ? hotelotherimage
                                  : hotelotherimage
                              }
                              alt="room img"
                              style={{
                                width: "500px",
                                height: "250px",
                                marginTop: "10px",
                                // marginRight: "25px",
                              }}
                            />
                          </div>
                        </Carousel>
                      </div>
                      <div
                        className="col-sm-1 p-0"
                        style={{ marginLeft: "2px", marginRight: "-20px" }}
                      >
                        <img
                          src={item?.room_data?.image !== "" ? Room : Room}
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        />
                        <br />
                        <img
                          src={
                            item?.room_data?.image !== ""
                              ? hotelotherimage
                              : hotelotherimage
                          }
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                            marginTop: "1px",
                          }}
                        />
                        <br />
                        <img
                          src={item?.room_data?.image !== "" ? Room : Room}
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                            marginTop: "1px",
                          }}
                        />
                        <br />
                        <img
                          src={
                            item?.room_data?.image !== ""
                              ? hotelotherimage
                              : hotelotherimage
                          }
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                            marginTop: "1px",
                          }}
                        />
                        <br />
                        <img
                          src={item?.room_data?.image !== "" ? Room : Room}
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                            marginTop: "1px",
                          }}
                        />
                      </div>
                      <div
                        md={5}
                        className="col-sm-6 p-0 m-0"
                      >
                        <div className="rajratan-train" style={{}}>
                          <div className="d-flex p-1">
                            <h3
                              style={{
                                fontWeight: "bolder",
                                fontFamily: "poppins",
                                fontSize: "24px",
                                marginTop: "3px"
                              }}
                            >
                              {/* <img
                                src={hotel}
                                alt="hotel"
                                style={{ height: "20px", paddingRight: "10px" }}
                              /> */}
                              {item?.hotel_name}
                              {/* {""} 00601 */}
                            </h3>
                          </div>
                          <span style={{ fontFamily: "poppins", fontSize: "85" }}>
                            {console.log("object", item)}
                            <span style={{ fontSize: "14px" }}>&nbsp;{item.address}</span>  <br />

                            <span>
                              <HiOutlineLocationMarker
                                style={{ color: "red", fontSize: "20px" }}
                              /><b>{item.city}</b>
                            </span>
                          </span>
                          <div style={{ display: "flex" }}>
                            {item?.room_data?.amenities?.includes("FreeWiFi") ? (
                              <span
                                style={{
                                  display: "flex",
                                  // alignItems: "center",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;  <FiWifi style={{ fontSize: "20px" }} />
                                &nbsp;    Free Wifi
                              </span>
                            ) : (
                              ""
                            )}
                            {item?.room_data?.amenities?.includes("Window") ? (
                              <span
                                style={{
                                  display: "flex",
                                  // alignItems: "center",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp; &nbsp;  <BsShopWindow style={{ fontSize: "20px" }} />
                                &nbsp;  Window
                              </span>
                            ) : (
                              ""
                            )}

                            {item?.room_data?.amenities?.includes("AC") ? (
                              <span
                                style={{
                                  display: "flex",
                                  // alignItems: "center",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;  <BiCheckCircle style={{ fontSize: "20px" }} />
                                &nbsp;  AC
                              </span>
                            ) : (
                              ""
                            )}
                            {/* {console.log("item?.room_data?.amenities",item?.room_data?.amenities)} */}
                            {item?.room_data?.amenities?.includes("TV") ? (
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;  <FaTv style={{ fontSize: "20px" }} />
                                &nbsp;    TV
                              </span>
                            ) : (
                              ""
                            )}

                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#0FA453",
                                padding: "13px",
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                              }}
                              onClick={() => viewDetails(item.room_data._id)}
                            >
                              View More
                            </span>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row" style={{ marginTop: "20px" }}>
                          <div className=" col-sm-4 pt-2">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                lineHeight: "10px",
                                // justifyContent: "end",
                                // paddingRight: "30px",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "700",
                                  color: "red",
                                  fontSize: "24px",
                                }}
                              >
                                ₹{item?.room_data?.price?.final_price}
                              </span>
                              <span
                                style={{
                                  fontWeight: "500",
                                  textDecoration: "line-through",
                                  fontSize: "16px",
                                  marginLeft: "10px",
                                  color: "#6d787d"
                                }}
                              >
                                <strike>
                                  {" "}
                                  {/* {console.log("object",item.room_data.price.base_price)} */}
                                  ₹{item?.room_data?.price?.base_price}
                                </strike>{" "}
                              </span>
                              <span
                                style={{
                                  fontWeight: "600",
                                  fontSize: "14px",
                                  color: "#F5A623",
                                  marginLeft: "10px",
                                  // lineHeight:"25px"
                                }}
                              >
                                {parseInt(((item?.room_data?.price?.base_price -
                                  item?.room_data?.price?.final_price) /
                                  item?.room_data?.price?.base_price) *
                                  100)}
                                %off
                              </span>
                              <br />
                              <br />
                            </div>
                            <div className="col-sm-12">
                              <span
                                style={{
                                  color: "grey",
                                  fontFamily: "sans-serif",
                                  fontSize: "15px",
                                }}
                              >
                                per room per night
                              </span>
                            </div>
                          </div>
                          <div
                            className="col-sm-6 d-flex justify-content-center flex-row"
                            style={{
                              // lineHeight: "12px",
                              float: "right",
                              // marginTop: "36px",
                            }}
                          >
                            <div
                              onClick={() => viewDetails(item.room_data._id)}
                              className=" d-flex justify-content-center"
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "118px",
                                height: "40px",
                                alignItems: "center",
                                border: "1px solid #0FA453",
                                // borderRadius: "4px",
                                color: "#0FA453",
                                marginRight: "20px",
                              }}
                            >
                              View Details
                            </div>
                            <div
                              className="train-seats  d-flex justify-content-center "
                              onClick={() => bookNow(item.room_data._id)}
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "118px",
                                height: "40px",
                                alignItems: "center",
                                marginBottom: "10px",
                                backgroundColor: "#0FA453",
                                color: "white",
                              }}
                            >
                              Book Now
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Container>
                  <hr />
                </React.Fragment>
              </div>
            </div>
          </div>
        );
      })}

      {/*mobile View*/}
      <div>
        <div fluid className="d-md-none">

          <div>
            {hotels.map((item, index) => {
              return (
                <>
                  <div>
                    {console.log("hotels", item.room_data.image[0])}
                    {console.log("hotels", item.room_data)}
                    {console.log("IMG", item.gst_upload)}
                    <Container >
                      <Row>
                        <Col>
                          <img
                            // src={item.room_data?.image[0]}
                            src={Room}
                            alt="room img"
                            style={{
                              width: "330px",
                              height: "180px",
                              margin: "10px 0",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Row className="row d-flex">
                          <Col
                            xs={6}
                          // className="rajratan-train col-xs-6"
                          // style={{ border: "2px solid black" }}
                          >
                            <div style={{ display: "flex" }}>
                              <div>
                                {/* <img
                                  src={hotel}
                                  alt="hotel"
                                  style={{
                                    paddingRight: "10px",
                                    height: "20px",
                                  }}
                                /> */}
                              </div>
                              <div>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  {item.hotel_name}
                                </span>
                                <br />
                                <span style={{ marginLeft: "-2px" }}>
                                  <HiOutlineLocationMarker
                                    style={{ color: "red" }}
                                  /><b style={{ fontSize: "12px" }}> {item.city}</b><br />
                                </span>
                                <span
                                  style={{
                                    color: "grey",
                                    fontSize: "12px",
                                  }}
                                >

                                  {/* &nbsp;... */}
                                  {!view ?<> {item.address.substring(0, 30)}... <span onClick={() => setView(!view)} style={{ color: "red" }}>View more</span></>
                                    : <>{item.address} <span onClick={() => setView(!view)} style={{ color: "red" }}>View Less</span> </>}
                                </span>

                              </div>
                            </div>

                            <div style={{ display: "flex" }}>
                              {item?.room_data?.amenities?.includes("FreeWifi") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",
                                    // padding: "20px",
                                    fontSize: "10px",
                                    // fontFamily: "sans-serif",
                                  }}
                                >
                                  <FiWifi /> &nbsp;Free Wifi
                                </span>
                              ) : (
                                ""
                              )}

                              {item?.room_data?.amenities?.includes("AC") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",
                                    // padding: "20px",
                                    fontSize: "12px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  <BiCheckCircle style={{ fontSize: "15px" }} />
                                  &nbsp;AC
                                </span>
                              ) : (
                                ""
                              )}
                              {item?.room_data?.amenities?.includes("TV") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",
                                    // padding: "20px",
                                    fontSize: "16px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  <FaTv style={{ fontSize: "20px" }} />
                                  &nbsp;TV
                                </span>
                              ) : (
                                ""
                              )}
                              {/* <small
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  color: "#0FA453",
                                  padding: "10px",
                                  // fontSize: "16px",
                                }}
                                onClick={() => viewDetails(item.room_data._id)}
                              >
                                View More
                              </small> */}
                            </div>
                          </Col>

                          <Col
                            xs={6}
                          // className="m-0 p-0 col-xs-6"
                          // style={{ float: "right", padding: "10px" }}
                          >
                            {/* <Container> */}
                            <Row >
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    // alignItems: "flex-end",
                                    flexDirection: "column",
                                    float: "right",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "10px",
                                      color: "#F5A623",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    {parseInt(((item?.room_data?.price?.base_price -
                                      item?.room_data?.price?.final_price) /
                                      item?.room_data?.price?.base_price) *
                                      100)}
                                    %off


                                  </span>
                                  <span>
                                    <strike
                                      style={{
                                        float: "right",
                                        color: "grey",
                                        fontFamily: "sans-serif",
                                        fontSize: "14px"
                                      }}
                                    >

                                      ₹{item?.room_data?.price?.base_price}
                                    </strike>{" "}
                                  </span>
                                  <span
                                    style={{
                                      fontWeight: "700",
                                      color: "red",
                                      fontSize: "16px",
                                      // fontSize: "18px",
                                      // fontWeight: "bolder",
                                      // fontFamily: "sans-serif",
                                      float: "right",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    ₹ {item?.room_data?.price?.final_price}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      color: "grey",
                                      fontFamily: "sans-serif",
                                      float: "right",
                                      display: "flex",
                                    }}
                                  >
                                    per room per night
                                  </span>
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </Row>

                        <div
                          className=" d-flex "
                          style={{
                            lineHeight: "12px",
                            marginTop: "12px",
                            marginBottom: "12px",
                            justifyContent: "space-evenly",
                          }}
                        >

                          <span
                            className=" d-flex justify-content-center"
                            onClick={() => viewDetails(item.room_data._id)}
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              width: "150px",
                              height: "40px",
                              alignItems: "center",
                              border: "1px solid #0FA453",
                              borderRadius: "4px",
                              color: "#0FA453",
                            }}
                          >
                            View Details
                          </span>
                          <span
                            className="train-seats  d-flex justify-content-center "
                            onClick={() => bookNow(item.room_data._id)}
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              width: "150px",
                              height: "40px",
                              alignItems: "center",
                            }}
                          >
                            Book Now
                          </span>
                        </div>
                        {/* <br />
                        <hr /> */}

                      </Row>
                    </Container>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;
