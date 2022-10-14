import { AvField, AvForm } from "availity-reactstrap-validation";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSpinner } from "react-icons/fa";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../../assets/css/buspass.css";
import bus from "../../assets/img/bus.png";
import Header from "../../components/Header";
import Message from "../../components/Message";
import LoginModal from "../../components/modal/LoginModal";
import { fetchStart, getOtp, verifyOtp } from "../../redux/actions";
import SeoData from "../../SeoData.json";
import Footer from "../travesaly/Footer";

function BusDetail({ loading }) {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const [otp, setOtp] = useState("");
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { error, message } = useSelector((state) => state.commonReducer);
  const { user_data, send_otp_error, verify_otp_error } = useSelector((state) => state.loginReducer);
  const { mobile } = useSelector((state) => state.busReducer);
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
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

  const fetchOtp = (mobile) => {
    setShowSignUpModal(false);
    dispatch(getOtp(number));

  };

  useEffect(() => {
    if(send_otp_error.code == 401){
      toast.error("USER not registered? Signup First");
      setShowSignUpModal(true);
    }
  }, [send_otp_error]);

  useEffect(() => {
    if(verify_otp_error == "OTP verification failed!!"){
      toast.error("OTP verification failed!!");
    }
  }, [verify_otp_error]);

  const onClickMonsoon = () => {
    console.log("object", `91${mobile}`, otp);
    if (otp.length === 6) {
      dispatch(fetchStart());
      dispatch(verifyOtp(number, otp));
    }
  };
  const modalHadler = () => {
    setModalShow(true);
  };
  const handleLoginClose = () => {
    setModalShow(false);
  };
  const handleSignupOpen = () => {
    console.log("here");
  };
  return (
    <>
      <Header showSignUpModal={showSignUpModal}/>
      <ToastContainer limit={1} />
      {message ? <Message msg={message} type="success" /> : null}
      {error ? <Message msg={error} type="error" /> : null}
      {user_data !== null ? <Redirect to="/busdetail" /> : null}
      <div className="d-none d-md-block">
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ margin: "10px" }}>
            <img src={bus} alt="bus" />
            <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
          </div>
          <span>
            Book bus ticket for route
            <br />
            Tamda Ghumar- Mendri Ghumar- Chitrakoot etc
          </span>
        </div>
        <Container style={{ width: "70%" }}>
          <AvForm>
            <Row className="row justify-content-center">
              <Col xs={12} md={4} className="">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label
                    className="formbus"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      color: "black",
                    }}
                  >
                    Enter mobile number
                  </Form.Label>
                  <AvField
                    style={{ height: "50px", fontSize: "12px" }}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    name="Mobile Number"
                    type="number"
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter mobile number"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your mobile number",
                      },
                      pattern: {
                        value: "^[0-9]",
                        errorMessage: "Your Number only be 10 numbers",
                      },
                      minLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number",
                      },
                      maxLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number",
                      },
                    }}
                  />
                </Form.Group>
                <Button
                  onClick={fetchOtp}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#FF4A68",
                    float: "right",
                    fontSize: "12px",
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FaSpinner style={{ marginRight: "5px" }} />
                      Sending...
                    </>
                  ) : (
                    <>Send OTP</>
                  )}
                </Button>
              </Col>
              <Col xs={12} md={4} className="">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label
                    className="formbus"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      color: "black",
                    }}
                  >
                    Enter OTP
                  </Form.Label>
                  <AvField
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    name="OTP"
                    type="number"
                    style={{ height: "50px", fontSize: "12px" }}
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter the 6 digit OTP"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter the 6 digit OTP",
                      },
                      pattern: {
                        value: "^[0-6]",
                        errorMessage: "Your OTP only be 6 numbers",
                      },
                      maxLength: {
                        value: 6,
                        errorMessage: "Only 6 digit OTP",
                      },
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="location-btn my-5">
              <Button
                className="locationpass-btn"
                type="submit"
                onClick={onClickMonsoon}
              >
                Continue
              </Button>
            </div>
          </AvForm>
        </Container>

        <Footer />
      </div>

      {/*mobile-view*/}
      <div fluid className="d-md-none">
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
        <Container>
          <div style={{ textAlign: "center" }}>
            First Time User? Signup here{" "}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              className="offset-md-2"
              onClick={() => modalHadler()}
              style={{
                width: "40%",
                textAlign: "center",
                height: "50px",
                borderRadius: "0px",
                backgroundColor: "#0fa453",
                border: "none",
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Sign Up Here
            </Button>
          </div>
          <p className="pt-2" style={{ textAlign: "center" }}>
            Or Login Here
          </p>
          <AvForm>
            <Row className="row justify-content-center">
              <Col xs={12} md={4} className="" style={{ width: "100%" }}>
                <Form.Group
                  className="formbus"
                  style={{ fontWeight: "bolder" }}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label
                    className="formselect"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      color: "black",
                    }}
                  >
                    Enter mobile number
                  </Form.Label>
                  <AvField
                    style={{ height: "50px", fontSize: "12px" }}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    name="Mobile Number"
                    type="number"
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter mobile number"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your mobile number",
                      },
                      pattern: {
                        value: "^[0-9]",
                        errorMessage: "Your Number only be 10 numbers",
                      },
                      maxLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number",
                      },
                    }}
                  />

                  <Button
                    onClick={fetchOtp}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#FF4A68",
                      float: "right",
                      fontSize: "12px",
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <FaSpinner style={{ marginRight: "5px" }} />
                        Sending...
                      </>
                    ) : (
                      <>Send OTP</>
                    )}
                  </Button>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="" style={{ width: "100%" }}>
                <Form.Group
                  className="formbus"
                  style={{ fontWeight: "bolder" }}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label
                    className="formselect"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      color: "black",
                    }}
                  >
                    Enter OTP
                  </Form.Label>
                  <AvField
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    name="OTP"
                    type="number"
                    style={{ height: "50px", fontSize: "12px" }}
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter the 6 digit OTP"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter the 6 digit OTP",
                      },
                      pattern: {
                        value: "^[0-6]",
                        errorMessage: "Your OTP only be 6 numbers",
                      },
                      maxLength: {
                        value: 6,
                        errorMessage: "Only 6 digit OTP",
                      },
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div>
              <Button
                style={{
                  width: "100%",
                  textAlign: "center",
                  height: "80px",
                  borderRadius: "0px",
                  backgroundColor: "#0fa453",
                  border: "none",
                  fontWeight: "600",
                  marginTop: 20,
                }}
                onClick={onClickMonsoon}
              >
                Continue
              </Button>
            </div>
          </AvForm>
        </Container>
      </div>
      <LoginModal
        show={modalShow}
        handleClose={handleLoginClose}
      />
    </>
  );
}

const mapStateToProps = ({ loginReducer }) => {
  const { loading } = loginReducer;
  return { loading };
};
export default connect(mapStateToProps)(BusDetail);
