import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../../components/Header";
import Footer from "../../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import mobile from "../../../assets/img/mobile.png";
import { useDispatch, useSelector } from "react-redux";

function TicketCheckOut() {
  // const { data: apiData, tripData,booking_id } = useSelector(state => state.busReducer)
  // const goHome = () => {
  //   history.push("/");
  // };
  const dispatch = useDispatch();
  const { dmData } = useSelector((state) => state.dmpassReducer);
  const { dmpass_id } = dmData;
  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <Container style={{ width: "70%", paddingTop: "20px" }}>
          <Row>
            <Col>
              <div style={{ marginTop: "-50px" }}>
                <img src={mobile} alt="" style={{ height: "500px" }} />
              </div>
            </Col>
            <Col>
              <div style={{ paddingTop: "60px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                  <span style={{ color: "black" }}>
                    Your booking has been confirmed
                  </span>

                  <h3 style={{ fontWeight: "bolder" }}>Order ID</h3>
                  <span style={{ color: "black", marginBottom: "50px" }}>
                    {dmpass_id}
                  </span>
                </div>
                <div>
                  <div>
                    <Button
                      className="btn btn-success"
                      style={{
                        width: "200px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "#0fa453",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      <FaWhatsapp
                        style={{
                          fontWeight: "bold",
                          marginLeft: "-23px",
                          fontSize: "30px",
                        }}
                      />
                      <span> Whatsapp Link</span>
                    </Button>
                  </div>
                  <div>
                    <Button
                      style={{
                        width: "208px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: " #FF4A68",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Download E-ticket
                    </Button>
                  </div>

                  <div>
                    <Button
                      style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "#864BD8",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>

      <div className="d-md-none">
        <Container style={{ width: "", paddingTop: "20px" }}>
          <Row>
            <Col>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                <span style={{ color: "black" }}>
                  Your booking has been confirmed
                </span>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: "", textAlign: "center" }}>
                <img src={mobile} alt="" style={{ height: "350px" }} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ marginBottom: "20px", paddingTop: "-10px" }}>
                <h3
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    marginBottom: "10px",
                  }}
                >
                  Transaction ID
                </h3>
                <span style={{ color: "black", marginBottom: "50px" }}>
                  {dmpass_id}
                </span>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: "center" }}>
                <div>
                  <Button
                    className="btn btn-success"
                    style={{
                      width: "200px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    <FaWhatsapp
                      style={{
                        fontWeight: "bold",
                        // marginLeft: "-23px",
                        fontSize: "30px",
                      }}
                    />
                    <span> Whatsapp Link</span>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{
                      width: "208px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: " #FF4A68",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Download E-ticket
                  </Button>
                </div>

                <div>
                  <Button
                    style={{
                      width: "186px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#864BD8",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TicketCheckOut;

{
  /* <div>
            <div style={{ paddingTop: "60px" }}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                <span style={{ color: "black" }}>
                  Your booking has been confirmed
                </span>

                <div style={{ marginTop: "", textAlign: "center" }}>
                  <img src={mobile} alt="" style={{ height: "350px" }} />
                </div>
                <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
                  Order ID
                </h3>
                <span style={{ color: "black", marginBottom: "50px" }}>
                  {dmpass_id}
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div>
                  <Button
                    className="btn btn-success"
                    style={{
                      width: "200px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    <FaWhatsapp
                      style={{
                        fontWeight: "bold",
                        marginLeft: "-23px",
                        fontSize: "30px",
                      }}
                    />
                    <span> Whatsapp Link</span>
                  </Button>
                </div>
                <div>
                  <Button
                    style={{
                      width: "208px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: " #FF4A68",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Download E-ticket
                  </Button>
                </div>

                <div>
                  <Button
                    style={{
                      width: "186px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#864BD8",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </div> */
}
