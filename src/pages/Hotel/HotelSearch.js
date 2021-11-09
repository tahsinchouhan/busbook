import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container, Modal } from "react-bootstrap";
import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useDispatch } from "react-redux";
import { getBookHotel } from "../../redux/actions";
import { API_PATH } from "../../Path/Path";
import hotel from "../../assets/img/hotel.png";
import { FaSearchLocation, FaTrash, FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvField from "availity-reactstrap-validation/lib/AvField";

function HotelSearch() {
  const history = useHistory();
  const [myOptions, setMyOptions] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState([]);
  const [sendlocation, setSendlocation] = useState();
  const [geolocation, setGeolocation] = useState([]);
  const [noOfGuest, setNoOfGuest] = useState(2);
  const [noOfRoom, setNoOfRoom] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const guestRoom = (act) => {
    console.log({act})
    if (act === "mainAdd"  && noOfGuest>0 &&noOfRoom>0) {
      setNoOfRoom(noOfRoom +1);
      setNoOfGuest(noOfGuest + 2);
    } else if (act === "delete" && noOfGuest>0 &&noOfRoom>0) {
      setNoOfRoom(noOfRoom -1);
      setNoOfGuest(noOfGuest - 2);
    } else if (act === "+") {
      setNoOfRoom(noOfGuest + 1);
    } else if (act === "-" ) {
      setNoOfRoom(noOfGuest - 1);
    }
    console.log(noOfRoom,noOfGuest)
  };
  const getDataFromAPI = (name) => {
    setMyOptions([]);
    fetch(`${API_PATH}/api/v2/hotelregistration/search?address=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          let str = `${res.data[i].hotel_name},${res.data[i].full_address.city}`;
          myOptions.push(str);
        }
        setMyOptions(myOptions);
      });
  };

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setGeolocation(pos.coords);
      const { latitude, longitude } = pos.coords;
      axios
        .post(API_PATH + `/api/v2/hotelregistration`, {
          lat: latitude,
          long: longitude,
        })
        .then((res) => {
          console.log("response", res.data.data);
          for (var i = 0; i < res.data.data.length; i++) {
            let str = `${res.data.data[i].hotel_name},${res.data.data[i].full_address.city}`;
            myOptions.push(str);
          }
          setMyOptions(myOptions);
          setLocation(res.data.data);
        })
        .catch((e) => console.log(e));
    });
  };
  const onDmTicketShow = () => {
    if (sendlocation !== "") {
      dispatch(getBookHotel({ sendlocation, startDate, endDate,noOfRoom,noOfGuest }));
      history.push("/hotellist");
    } else {
      toast.error("Please Select Location");
    }
  };
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        border: "none",
        background: "transparent",
        fontSize: "25px",
        color: "green",
        fontWeight: 900,
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  const getLocation = () => {
    axios
      .post(API_PATH + `/api/v2/hotelregistration`, geolocation)
      .then((res) => {
        setLocation(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <div>
        <Header />
        <div className="d-none d-md-block">
          <Container
            className="d-none d-md-block my-5"
            style={{ width: "70%" }}
          >
            <div className="select_div">
              <div className="row p-3" style={{ textAlign: "center" }}>
                <div className="col-xs-12  col-sm-12 col-md-12">
                  <div className="booking-div">
                    <div style={{ marginBottom: "15px" }}>
                      <img src={hotel} alt="logo" style={{ width: "60px" }} />
                    </div>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#FF4A68",
                        paddingTop: "50px",
                      }}
                    >
                      Hotel
                    </span>
                    <br />
                    <span style={{ fontSize: "14px", padding: "10px" }}>
                      Book Hotel Room Across City
                    </span>
                  </div>
                </div>
              </div>

              <Container
                style={{
                  width: "100%",
                  paddingTop: "28px",
                }}
              >
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Select Your Location
                      </Form.Label>
                      <Autocomplete
                        style={{ width: 200 }}
                        freeSolo
                        autoComplete
                        autoHighlight
                        onChange={(e) => {
                          setSendlocation(e.target.innerHTML.split(",")[1]);
                        }}
                        options={myOptions}
                        renderInput={(params) => (
                          <TextField
                            required="required"
                            {...params}
                            onKeyPress={(e) => getDataFromAPI(e.target.value)}
                            variant="outlined"
                            label="Search Area"
                          />
                        )}
                      />
                      <span
                        className="FaSearchLocation"
                        title="Near Me "
                        onClick={getCurrentLocation}
                      >
                        <FaSearchLocation />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">
                          Booking Date
                        </Form.Label>
                        <br />
                        <Col xs={12} md={3}>
                          <div
                            style={{
                              width: 180,
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                            }}
                          >
                            <img
                              alt="logo"
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{ width: 25, height: 25, marginTop: -8 }}
                            />
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              customInput={<ExampleCustomInput />}
                              minDate={new Date()}
                              dateFormat="dd MMM"
                            />
                          </div>
                        </Col>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">End Date</Form.Label>
                        <br />
                        <Col xs={12} md={6}>
                          <div
                            style={{
                              width: 180,
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                            }}
                          >
                            <img
                              alt="logo"
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{ width: 25, height: 25, marginTop: -8 }}
                            />
                            <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              customInput={<ExampleCustomInput />}
                              minDate={new Date()}
                              dateFormat="dd MMM"
                            />
                          </div>
                        </Col>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Number Of Guests
                      </Form.Label>
                      {/* <select
                        id="inputState"
                        className="form-control pass_input"
                        placeholder="Choose Your Area"
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          padding: "10px",
                        }}
                      >
                        <option selected>1 Room 2, Guests </option>
                        <option value="1">1 Room 2, Guests</option>
                        <option value="2">2 Room 2, Guests</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select> */}
                      <div
                        style={{
                          width: 180,
                          backgroundColor: "#f5f5f5",
                          padding: "5px",
                          paddingLeft: "20px",
                        }}
                      >
                        <input // onChange={(e) => setEmail(e.target.value)}
                          // value={email}
                          name="guestRoom"
                          type="text"
                          className="position-relative"
                          placeholder={`${noOfRoom} Room ,${noOfGuest} guest`}
                          onClick={handleShow}
                          style={{
                            border: "none",
                            outline: "none",
                            width: 155,
                            backgroundColor: "#f5f5f5",
                            padding: "5px",
                            paddingLeft: "20px",
                          }}
                          readOnly
                        />{" "}
                        <Modal
                          show={show}
                          onHide={handleClose}
                          className="guestModel"
                          style={{
                            width: "200px",
                          }}
                        >
                          <Modal.Header>
                            <b> Room Guest </b>
                          </Modal.Header>
                          <Modal.Body>
                            {" "}
                            Room {noOfRoom}{" "}
                            <button onClick={() => guestRoom("-")}>
                              -
                            </button>{" "}{noOfGuest}{" "}
                            <button onClick={() => guestRoom("+")}>+</button>{" "}
                          </Modal.Body>
                          <Modal.Footer>
                            <FaTrash
                              title=" Delete Room "
                              style={{ float: "left", marginRight: "120px" }}
                              onClick={() => guestRoom("delete")}
                            />
                            <FaPlusCircle
                              title="Add Room "
                              style={{ float: "right" }}
                              onClick={() => guestRoom("mainAdd")}
                            />
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <div
                  className="dmticket-btn"
                  style={{ textAlign: "center", marginTop: "70px" }}
                >
                  <Button
                    type="submit"
                    class="btn btn-success"
                    style={{
                      width: "200px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                      border: "none",
                    }}
                    onClick={onDmTicketShow}
                  >
                    Search Now
                  </Button>
                </div>
              </Container>
            </div>
          </Container>
          <Footer />
        </div>
      </div>

      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <div style={{ marginBottom: "15px" }}>
                  <img src={ticket} alt="" />
                </div>
                <span
                  style={{
                    fontWeight: "bolder",
                    color: "#FF4A68",
                    paddingTop: "50px",
                  }}
                >
                  Hotel
                </span>
                <br />
                <span style={{ fontSize: "14px", padding: "10px" }}>
                  Book Hotel Room Across City
                </span>
              </div>
            </div>
          </div>

          <Container
            style={{ width: "80%", paddingTop: "28px", paddingBottom: 100 }}
          >
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col
                xs={12}
                md={4}
                className="mt-2"
                style={{ marginBottom: "10px" }}
              >
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Label className="dm-ticket">
                    Select Your Location
                  </Form.Label>
                  <Autocomplete
                    style={{ width: 200 }}
                    freeSolo
                    autoComplete
                    autoHighlight
                    onChange={(e) => {
                      setSendlocation(e.target.innerHTML.split(",")[1]);
                    }}
                    options={myOptions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onKeyPress={(e) => getDataFromAPI(e.target.value)}
                        variant="outlined"
                        label="Search Area"
                      />
                    )}
                  />
                  <span
                    className="FaSearchLocation"
                    title="Near Me "
                    onClick={getCurrentLocation}
                  >
                    <FaSearchLocation />
                  </span>
                </Form.Group>
              </Col>

              <Col xs={12} md={4} className="mt-2">
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col md={4}>
                      <div
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          paddingLeft: "20px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          borderRadius: "5px",
                          marginRight: "10px",
                        }}
                      >
                        <Form.Label className="dm-ticket">
                          Journey Date
                        </Form.Label>
                        <br />
                        <img
                          alt="logo"
                          className="location-userdatas-calendar"
                          src={calendar}
                          style={{ width: 25, height: 30, marginTop: -10 }}
                        />
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          customInput={<ExampleCustomInput />}
                          dateFormat="dd MMM"
                          minDate={new Date()}
                        />
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="mt-2">
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col md={4}>
                      <div
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          paddingLeft: "20px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          borderRadius: "5px",
                          marginRight: "10px",
                        }}
                      >
                        <Form.Label className="dm-ticket">End Date</Form.Label>
                        <br />
                        <img
                          alt="logo"
                          className="location-userdatas-calendar"
                          src={calendar}
                          style={{ width: 25, height: 30, marginTop: -10 }}
                        />
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          customInput={<ExampleCustomInput />}
                          dateFormat="dd MMM"
                          minDate={new Date()}
                        />
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col
                xs={12}
                md={4}
                className="mt-2"
                style={{ marginBottom: "10px" }}
              >
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Label className="dm-ticket">No. of Guests</Form.Label>
                  {/* <select
                    id="inputState"
                    className="form-control pass_input"
                    placeholder="Choose Your Area"
                    style={{
                      backgroundColor: "#f5f5f5",
                      border: 0,
                      paddingLeft: "20px",
                    }}
                  >
                    <option selected>1 room, 2 Guests</option>
                    <option>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select> */}
                   <input // onChange={(e) => setEmail(e.target.value)}
                          // value={email}
                          name="guestRoom"
                          type="text"
                          className="position-relative"
                          placeholder={`${noOfRoom} Room ,${noOfGuest} guest`}
                          onClick={handleShow}
                          style={{
                            border: "none",
                            outline: "none",
                            width: 155,
                            backgroundColor: "#f5f5f5",
                            padding: "5px",
                            paddingLeft: "20px",
                          }}
                          readOnly
                        />{" "}
                </Form.Group>
              </Col>
            </Row>
            <div
              className="dmticket-btn"
              style={{ textAlign: "center", marginTop: "70px" }}
            >
              <Button
                type="submit"
                class="btn btn-success"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "0px",
                  backgroundColor: "#0fa453",
                  border: "none",
                  height: "86px",
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                }}
                onClick={onDmTicketShow}
              >
                Search Now
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HotelSearch;
