import React, { useState,useEffect } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import ListCard from "./ListCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookHotel} from '../../redux/actions'
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { FaSearchLocation } from "react-icons/fa";


function HotelList() {
  const history = useHistory();
  const dispatch = useDispatch()
  const [myOptions, setMyOptions] = useState([]);

  const { getHotelList: hotels} = useSelector(state => state.hotelReducer)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState([]);
  const [sendlocation, setSendlocation] = useState();
  const [geolocation, setGeolocation] = useState([]);

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

  const getLocation = () => {
    axios
      .post(API_PATH + `/api/v2/hotelregistration`, geolocation)
      .then((res) => {
        setLocation(res.data.data);
      })
      .catch((e) => console.log(e));
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
    console.log({ sendlocation });
    dispatch(getBookHotel({ sendlocation, startDate, endDate }));
    history.push("/hotellist");
  };
  useEffect(() => {
    getLocation();
    
  }, [])
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

  return (
    <>
      <div>
        <Header />
        <div className="d-none d-md-block">
          <Container className="d-none d-md-block " style={{ width: "90%" }}>
            <div className="select_div">
              <Container
                style={{
                  width: "100%",
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
                            {...params}
                            value={sendlocation?sendlocation:''}
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

                  <Col xs={12} md={2} className="mt-2">
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
                              width: 280,
                              height: "47px",
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
                  </Col> <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">
                          End  Date
                        </Form.Label>
                        <br />
                        <Col xs={12} md={2}>
                          <div
                            style={{
                              width: 280,
                              height: "47px",
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

                  <Col xs={12} md={2} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Number Of Guests
                      </Form.Label>
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        placeholder="Choose Your Area"
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          height: "47px",
                          padding: "10px",
                        }}
                      >
                        <option selected>1 Room 2, Guests </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col
                    md={2}
                    className="mt-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      className="dmticket-btn"
                      //   style={{ textAlign: "center" }}
                    >
                      <Button
                        type="submit"
                        // class="btn btn-success"
                        style={{
                          width: "138px",
                          textAlign: "center",
                          height: "47px",
                          borderRadius: "5px",
                          backgroundColor: "#0fa453",
                          border: "none",
                        }}
                        onClick={onDmTicketShow}
                      >
                        Search Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
          <div style={{ marginBottom: "200px" }}>
            <ListCard />
            {/* <ListCard /> */}
          </div>
          <Footer />
        </div>
        <div className="d-md-none">
          <ListCard sendlocation={sendlocation} startDate={startDate} endDate={endDate}/>
          {/* <ListCard /> */}
        </div>
      </div>
    </>
  );
}

export default HotelList;