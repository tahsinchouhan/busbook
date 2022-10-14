import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/buspass.css";
import bus from "../../assets/img/bus.png";
import calendar from "../../assets/img/calendar.png";
import Header from "../../components/Header";
import { API_PATH } from "../../Path/Path";
import { setRouteData, setRouteId } from "../../redux/actions";
import SeoData from "../../SeoData.json";
import Footer from "../travesaly/Footer";

function BusPass() {
  const history = useHistory();
  const [routes, setRoutes] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title =
      SeoData.bus_ticket_booking_system.page_title || "Travel Bastar";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        SeoData.bus_ticket_booking_system.meta_description || ""
      );
    document
      .querySelector("meta[name='keywords']")
      .setAttribute(
        "content",
        SeoData.bus_ticket_booking_system.meta_keywords || ""
      );
  }, []);

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        border: "none",
        background: "transparent",
        fontSize: "25px",
        color: "#a5a5a5",
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  useEffect(() => {
    getRoutes();
  }, []);

  const getRoutes = () => {
    fetch(API_PATH + `/api/v1/routes/list`)
      .then((response) => response.json())
      .then((res) => {
        setRoutes(res.data);
      })
      .catch((e) => console.log(e));
  };

  const onSubmit = () => {
    if (selected !== "") {
      dispatch(setRouteId(selected, startDate));
      dispatch(
        setRouteData({
          ...routes[routes.findIndex((x) => x._id == selected)],
          startDate,
        })
      );
      history.push("/busmonsoon");
    }
  };

  return (
    <div>
      <ToastContainer />
      <Header />

      <div className="d-none d-md-block">
        <Container className="d-none d-md-block">
          <div style={{ textAlign: "center", margin: "50px" }}>
            <div style={{ margin: "10px" }}>
              <img src={bus} alt="bus" />
              <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
            </div>
            <span>
              Book bus ticket for route
              <br />
              Tamda Ghumar- Mendri
              <br />
              Ghumar- Chitrakoot etc
            </span>
          </div>
          <Container style={{ width: "70%" }}>
            <Row className="row justify-content-center">
              <Col xs={12} md={4} className="">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label
                    className="formselect"
                    style={{
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      fontSize: "12px",
                      color: "black",
                    }}
                  >
                    Select Route
                  </Form.Label>
                  <Form.Select
                    className="location-userdatas"
                    style={{ border: "none", fontSize: "12px" }}
                    defaultValue="Choose..."
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    isInvalid={!selected}
                    isValid={selected}
                  >
                    <option value="" hidden>
                      Choose your preferred route
                    </option>
                    {routes.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.routename}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label
                    className="formselect"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      color: "black",
                    }}
                  >
                    Journey Date
                  </Form.Label>
                  <div
                    className="location-userdatas"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      className="location-userdatas-calendar"
                      src={calendar}
                      style={{ width: 25, height: 30 }}
                    />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      customInput={<ExampleCustomInput />}
                      dateFormat="dd MMM"
                      minDate={new Date()}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <div
            className="location-btn"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button className="locationpass-btn" onClick={onSubmit}>
              Continue
            </Button>
          </div>
        </Container>
        <div className="mt-5">
          <Footer />
        </div>
      </div>

      {/* Mobile View */}

      <div className="d-md-none">
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ margin: "10px" }}>
            <img src={bus} alt="bus" />
            <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
          </div>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
            Book bus ticket for route
            <br />
            Tamda Ghumar- Mendri
            <br />
            Ghumar- Chitrakoot etc
          </span>
        </div>
        <Container style={{ width: "100%" }}>
          <Row className="row justify-content-center">
            <Col xs={12} md={4} className="">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label
                  className="formselect"
                  style={{
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    fontSize: "12px",
                    color: "black",
                  }}
                >
                  Select Route
                </Form.Label>
                <Form.Select
                  className="location-userdatas"
                  style={{ border: "none", fontSize: "12px" }}
                  defaultValue="Choose..."
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  isInvalid={!selected}
                  isValid={selected}
                >
                  Please choose a username.
                  <option>Choose your preferred route</option>
                  {routes.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.routename}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={4} className="">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label
                  className="formselect"
                  style={{
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    fontSize: "12px",
                    color: "black",
                  }}
                >
                  Journey Date
                </Form.Label>
                <div
                  className="location-userdatas"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflow: "hidden",
                  }}
                >
                  <img
                    className="location-userdatas-calendar"
                    src={calendar}
                    style={{ width: 25, height: 30 }}
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    dateFormat="dd MMM"
                    minDate={new Date()}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Button
          className="locationpass-btn"
          onClick={onSubmit}
          style={{ position: "fixed", bottom: "0px" }}
        >
          Continue
        </Button>
        <div className="" style={{ paddingBottom: "85px" }}>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
export default BusPass;
