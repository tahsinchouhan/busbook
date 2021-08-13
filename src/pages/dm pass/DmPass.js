import React, { useState}  from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import city from "../../assets/img/city.png";
// import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Pass from "./Pass";
// import BusPass from "./BusPass";
import { useHistory } from "react-router-dom";
// import Cab from "./Cab";
import bus from "../../assets/img/bus.png";
import cab from "../../assets/img/cab.png";
import ticket from "../../assets/img/ticket.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import calendar from "../../assets/img/calendar.png";


function DmPass() {
  const history = useHistory();

  const onDmTicketShow = () => {
    console.log('hii')
      // toast("Wow so easy!");
      history.push('/dmticket2')
  };
  return (
    <>
      <div>
<<<<<<< HEAD
        <div className="dmpass-div">
          <Container className="dm-kangervilla">
            <FaArrowLeft className="kanger-arrow" />
            <div className="kangervilla">
              <span className="kanger-valley">
                Tickets for Kanger Valley
                <br />
                30th July, 2021
              </span>
            </div>
          </Container>
        </div>
        {/*progessbar*/}
        <Container>
          <div className="rangebar">
            <div>
              <Button className=" btn-danger dmPass-rangebar">
                <br />
                <span>DM Pass</span>
              </Button>
            </div>
            <div>
              <Button
                className=" locations-rangebar"
                style={{
                  backgroundColor: "none",
                  border: "1px solid #FF814A",
                  color: "black",
                }}
                onClick={onLocationsClick}
              >
                <br />
                <span>Locations</span>
              </Button>
            </div>
            <div>
              <Button className=" btn-danger confirm-rangebar">
                <br />
                <span>Confirm</span>
              </Button>
            </div>
            <div>
              <Button className=" btn-danger checkout-rangebar">
                <span>Checkout</span>
              </Button>
            </div>
          </div>

          {/* <Form.Label>Range</Form.Label>
          <Form.Range /> */}
        </Container>

        {/*form*/}
        <Container className="dmpass-form mt-5">
          <Row className="dmpassData">
            <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
              Book your DM Pass
            </h3>
            <form>
              <div className="form-row"></div>
              <div className="form-group mt-4">
                <label htmlFor ="inputAddress">Mobile Number</label>
                <input
                  type="text"
                  className="form-control pass_input"
                  id="inputAddress"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="form-row">
                <div className="form-group mt-4 ">
                  <label htmlFor ="inputState">Number of Travellers</label>
                  <select id="inputState" className="form-control pass_input">
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="form-group mt-4 ">
                  <label htmlFor ="inputState">Days of Travel</label>
                  <select id="inputState" className="form-control pass_input">
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="form-group mt-4 ">
                  <label htmlFor ="inputState">Number of Vehicles</label>
                  <select id="inputState" className="form-control pass_input">
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div className="traveller-detail">
                <label htmlFor ="inputAddress" style={{ paddingTop: "30px" }}>
                  Vehicle Details
                </label>
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">Vehicle 1</h5>
                    <p className="card-text">
                      <div className="form-group mt-4">
                        <label htmlFor ="inputAddress">Name</label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter passenger name"
                          style={{ fontSize: "11px" }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div className="col m-2 w-50">
                          <label htmlFor ="inputAddress">Gender</label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                              }}
                              data={button_Data}
                              activeButton={activeButton}
                              trigerOnClickEmpSideBtn={onSideBtnClick}
                            />
                          </div>
                        </div>
                        <div className="col m-2 w-50">
                          <label htmlFor ="inputAddress">Age</label>
                          <br />
                          <input
                            type="text"
                            className="form-control pass_input w-70 pt-2"
                            placeholder="Enter Age"
                            style={{
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              height: "33px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-4 pt-2">
                        <label htmlFor ="inputAddress">Aadhar Card Number </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder=" Enter 12 digit Aadhar Card Number"
                          style={{ fontSize: "11px" }}
                        />
                      </div>
                    </p>
                    <Link
                      className="btn"
                      style={{ backgroundColor: "#0FA453", color: "white" }}
                    >
                      Add Vehicle
                    </Link>
=======
        <Header />
        <Container className="d-none d-md-block my-5" style={{width:"70%"}}>
          <div className="select_div">
            <div className="row p-3" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{marginBottom:"15px"}}>
                    <img src={ticket} alt=""/>
>>>>>>> f8b67f0492162b56e30f7f68b3a5085a9bfe1c03
                  </div>
                  <span style={{ fontWeight: "bolder", fontSize: "15px",color:"#0fa453",paddingTop:"50px" }}>DM Pass</span><br/>
                  <span style={{ fontWeight: "bolder", fontSize: "12px",padding:"10px" }}>
                  Get a pass for travellers, vehicles<br/> and duration of your travel
                  </span>
                </div>
              </div>
<<<<<<< HEAD
              {/*traveller Detail*/}
              <div className="traveller-detail">
                <label htmlFor ="inputAddress" style={{ paddingTop: "30px" }}>
                  Traveller Details
                </label>
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">Traveller 1</h5>
                    <p className="card-text">
                      <div className="form-group mt-4">
                        <label htmlFor ="inputAddress">Name</label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter passenger name"
                          style={{ fontSize: "11px" }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div className="col m-2 w-50">
                          <label htmlFor ="inputAddress">Gender</label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                              }}
                              data={button_Data}
                              activeButton={activeButton}
                              trigerOnClickEmpSideBtn={onSideBtnClick}
                            />
                          </div>
                        </div>
                        <div className="col m-2 w-50">
                          <label htmlFor ="inputAddress">Age</label>
                          <br />
                          <input
                            type="text"
                            className="form-control pass_input w-70 pt-2"
                            placeholder="Enter Age"
                            style={{
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              height: "33px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-4 pt-2">
                        <label htmlFor ="inputAddress">Aadhar Card Number </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder=" Enter 12 digit Aadhar Card Number"
                          style={{ fontSize: "11px" }}
                        />
                      </div>
                    </p>
                    <Link
                      className="btn"
                      style={{ backgroundColor: "#0FA453", color: "#FFFFFF" }}
                    >
                      Add Passenger
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="form-group mt-4 passengerbtn" 
            style={{backgroundColor:"#0FA453",color:"#FFFFFF"}}
            >Save & Continue
              <button type="submit" className="btn" style={{backgroundColor:"#0FA453",color:"#FFFFFF"}} >
              Save & Continue
              </button>
            </div> */}
            </form>
          </Row>
        </Container>
        <div
          className="form-group mt-4 passengerbtn"
          style={{
            backgroundColor: "#0FA453",
            color: "#FFFFFF",
            fontWeight: "600",
          }}
        >
          Save & Continue
          {/* <button type="submit" className="btn" style={{backgroundColor:"#0FA453",color:"#FFFFFF"}} >
              Save & Continue
              </button> */}
        </div>

        {/* <!-- Horizontal Steppers --> */}
        <div className = "row">
          <div className = "col-md-12">
            {/* <!-- Stepers Wrapper --> */}
            <ul className = "stepper stepper-horizontal">
              {/* <!-- First Step --> */}
              <li className = "completed">
                <a href="#!">
                  <span className = "circle">1</span>
                  <span className = "label">First step</span>
                </a>
              </li>

              {/* <!-- Second Step --> */}
              <li className = "active">
                <a href="#!">
                  <span className = "circle">2</span>
                  <span className = "label">Second step</span>
                </a>
              </li>

              {/* <-- Third Step --> */}
              <li className = "warning">
                <a href="#!">
                  <span className = "circle">
                    <i className = "fas fa-exclamation"></i>
                  </span>
                  <span className = "label">Third step</span>
                </a>
              </li>
            </ul>
            {/* <!-- /.Stepers Wrapper --> */}
=======
            </div>

            <Container style={{width:"100%",paddingTop:"28px"}}>
              <Row>
               
                <Col xs={12} md={4} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket" >Number of Vehicles</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder=" Vehicles..."
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">Number of Travellers</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder="Travellers..."
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">Days of Travel</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder="Days of Travel.."
                      />
                    </div>
                  </Form.Group>
                </Col>
               
              </Row>
              <div className="dmticket-btn" style={{textAlign:"center",marginTop:"70px"}}>
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "20%",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border:"none"
                  }}
                  onClick={onDmTicketShow}
                >
                 Continue
                </Button>
              </div>
            </Container>
>>>>>>> f8b67f0492162b56e30f7f68b3a5085a9bfe1c03
          </div>
        </Container>
      </div>
    </>
  );
}

export default DmPass;
