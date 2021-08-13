import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../../components/Header";
import bus1 from "../../../assets/img/bus.png";
import ticket from "../../../assets/img/ticket.png";
import city1 from "../../../assets/img/city.png";
import barcode from "../../../assets/img/barcode.png";
import Footer from "../../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getTripByRouteId, setRouteId, setTripData } from "../../../redux/actions";
import '../../../assets/css/dmdetail.css'
import { API_PATH } from "../../../Path/Path";

function DmDetail() {
    const history = useHistory();
    const [apiData, setApiData] = useState([]);
    const { tripList: trips, route_id } = useSelector(state => state.busReducer)

    const dispatch = useDispatch()


    useEffect(() => {
        console.log("rd", apiData);
        getTrips();
    }, []);
    const goHome = () => {
        history.push("/");
    };

    const getTrips = () => {
        fetch(`${API_PATH}/api/v1/dmpass/list?dm_pass_id=DM13082021001001001`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.data);
                setApiData(res.data);
            })
            .catch((e) => console.log(e));
    };

    const onClickTrain = (id) => {
        console.log("object");
        dispatch(setTripData(trips[trips.findIndex(x => x._id == id)]))
        // history.push("/boarding");
        console.log(trips.findIndex(x => x._id == id));
        history.push("/busconfirmation");
    };

    const onClickBoarding = () => {
        console.log("object");
        history.push("/booking");
    };

    return (
        <>
            <div className="d-none d-md-block">
                <Header />
                <div style={{ backgroundColor: "white" }}>
                    <Row className="p-3">
                        <Col xs={5} sm={5} className="p-0 dm__barcode">
                            <div className="booking-div">
                                <img src={barcode} alt="" width={250} />
                            </div>
                        </Col>
                        <Col xs={5} sm={5}>
                            <Row className="p-0" style={{ textAlign: "center" }}>
                                <Col xs={6} sm={6}>
                                    <div className="booking-div" style={{ marginBottom: "2rem" }}>
                                        <div style={{ marginBottom: "15px" }}>
                                            <img src={ticket} alt="" />
                                        </div>
                                        <span style={{ fontWeight: "bolder", fontSize: "15px", color: "#0fa453", paddingTop: "50px" }}>TICKET</span><br />
                                        <span style={{ fontWeight: "400", fontSize: "12px", padding: "10px" }}>
                                            Get a pass for travellers, vehicles<br /> and duration of your travel
                                        </span>
                                    </div>
                                </Col>
                                <Col className="dm__card" xs={9} sm={9} style={{ marginLeft: "-10%" }}>
                                    <div className="dm__card_title">
                                        <div className="left">
                                            PASS DETAIL
                                        </div>
                                        <div className="right">
                                            PASS ID
                                        </div>
                                    </div>
                                    <div className="dm__card_body">
                                        <div className="left">
                                            DM PASS ID
                                        </div>
                                        <div className="right">
                                            {apiData[0]?.dm_pass_id}
                                        </div>
                                    </div>
                                    <div className="dm__card_body">
                                        <div className="left">
                                            TRAVELLERS PASS ID
                                        </div>
                                        <div className="right">
                                            {apiData[0]?.tp_id?.travelpass_id}
                                        </div>
                                    </div>
                                    <div className="dm__card_body">
                                        <div className="left">
                                            VEHICLE PASS ID
                                        </div>
                                        <div className="right">
                                            {apiData[0]?.vp_id?.vehicalpass_id}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="dm__title" xs={12}>TRAVELLER DETAILS</Col>
                        <Col className="dm__traveller_div" xs={12}>
                            {
                                (apiData?.length > 0)
                                    ?
                                    apiData[0]?.tp_id?.basic_details?.map((item, i) => (
                                        <div key={i} className="dm__trav_card" >
                                            <div className="dm__trav_card_title">
                                                {item?.name}
                                            </div>
                                            <div className="dm__trav_card_body">
                                                <div className="top">
                                                    {item?.gender}, {item?.age}
                                                </div>
                                                <div className="bottom">
                                                    Adhaar:  {item?.adhaar}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="dm__title" xs={12}>ENTRY TICKET DETAILS</Col>
                        <Col className="dm__entry_div" xs={12}>
                            {
                                (apiData?.length > 0)
                                    ?
                                    apiData[0]?.ep_id?.locations?.map((item, i) => (
                                        <div key={i} className="dm__entry_card">
                                            <div className="dm__entry_card_title">
                                                <div className="left">
                                                    Tamdaghumar
                                                </div>
                                                <div className="right">
                                                    Change
                                                </div>
                                            </div>
                                            {
                                                item?.services?.map((service, key) => (
                                                    <div key={key} className="dm__entry_card_body">
                                                        <div className="left">
                                                            {service?.service_id?.service_name} x {service?.service_id?.unit}
                                                        </div>
                                                        <div className="right">
                                                            {service?.service_id?.price}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                    :
                                    null
                            }
                            {/* <div className="dm__entry_card">
                                <div className="dm__entry_card_title">
                                    <div className="left">
                                        Tamdaghumar
                                    </div>
                                    <div className="right">
                                        Change
                                    </div>
                                </div>
                                <div className="dm__entry_card_body">
                                    <div className="left">
                                        Car Parking x 2
                                    </div>
                                    <div className="right">
                                        40
                                    </div>
                                </div>
                                <div className="dm__entry_card_body">
                                    <div className="left">
                                        Trekking x 2
                                    </div>
                                    <div className="right">
                                        40
                                    </div>
                                </div>
                                <div className="dm__entry_card_body">
                                    <div className="left">
                                        Boating x 2
                                    </div>
                                    <div className="right">
                                        40
                                    </div>
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="dm__footer_div" xs={12}>
                            <div className="dm__footer_card" >
                                <div className="dm__footer_card_title">
                                    BUS BOOKING
                                </div>
                                <Button className="dm__footer_card_body">
                                    VIEW
                                </Button>
                            </div>
                            <div className="dm__footer_card" >
                                <div className="dm__footer_card_title">
                                    CAB BOOKING
                                </div>
                                <Button className="dm__footer_card_body">
                                    VIEW
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>

            {/*mobile View*/}
            <div className="m-0 d-md-none" style={{ backgroundColor: "#E5E5E5" }} >
                <Row className="m-0">
                    <Col className="m-0 dmpass__mob_header" xs={12}>
                        <FaArrowLeft style={{ width: "30px", height: "30px" }} onClick={goHome} />
                        <div className="dmpass__mob_header_title">
                            Your Details
                        </div>
                    </Col>
                </Row>
                <Row className="m-0">
                    <Col xs={12}>
                        <div className="text-center">
                            <img src={barcode} alt="" width={130} />
                        </div>
                    </Col>
                    <Col className="px-4 d-flex justify-content-center mt-3 " xs={12} sm={12} >
                        <div className="dm__card mobile" >
                            <div className="dm__card_title">
                                <div className="left">
                                    PASS DETAIL
                                </div>
                                <div className="right">
                                    PASS ID
                                </div>
                            </div>
                            <div className="dm__card_body">
                                <div className="left">
                                    DM PASS ID
                                </div>
                                <div className="right">
                                    {apiData[0]?.dm_pass_id}
                                </div>
                            </div>
                            <div className="dm__card_body">
                                <div className="left">
                                    TRAVELLERS PASS ID
                                </div>
                                <div className="right">
                                    {apiData[0]?.tp_id?.travelpass_id}
                                </div>
                            </div>
                            <div className="dm__card_body">
                                <div className="left">
                                    VEHICLE PASS ID
                                </div>
                                <div className="right">
                                    {apiData[0]?.vp_id?.vehicalpass_id}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="dm__title mobile" xs={12}>TRAVELLER DETAILS</Col>
                    <Col className="dm__traveller_div mobile" xs={12}>
                        {
                            (apiData?.length > 0)
                                ?
                                apiData[0]?.tp_id?.basic_details?.map((item, i) => (
                                    <div key={i} className="dm__trav_card mobile" >
                                        <div className="dm__trav_card_title">
                                            {item?.name}
                                        </div>
                                        <div className="dm__trav_card_body">
                                            <div className="top">
                                                {item?.gender}, {item?.age}
                                            </div>
                                            <div className="bottom">
                                                Adhaar:  {item?.adhaar}
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                null
                        }
                    </Col>
                    <Col className="dm__title mobile" xs={12}>ENTRY TICKET DETAILS</Col>
                    <Col className="dm__entry_div mobile" xs={12}>
                        {
                            (apiData?.length > 0)
                                ?
                                apiData[0]?.ep_id?.locations?.map((item, i) => (
                                    <div key={i} className="dm__entry_card">
                                        <div className="dm__entry_card_title">
                                            <div className="left">
                                                Tamdaghumar
                                            </div>
                                            <div className="right">
                                                Change
                                            </div>
                                        </div>
                                        {
                                            item?.services?.map((service, key) => (
                                                <div key={key} className="dm__entry_card_body">
                                                    <div className="left">
                                                        {service?.service_id?.service_name} x {service?.service_id?.unit}
                                                    </div>
                                                    <div className="right">
                                                        {service?.service_id?.price}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                                :
                                null
                        }
                    </Col>
                    <Col className="dm__footer_div mobile" xs={12}>
                        <div className="dm__footer_card" >
                            <div className="dm__footer_card_title">
                                BUS BOOKING
                            </div>
                            <Button className="dm__footer_card_body">
                                VIEW
                            </Button>
                        </div>
                        <div className="dm__footer_card" >
                            <div className="dm__footer_card_title">
                                CAB BOOKING
                            </div>
                            <Button className="dm__footer_card_body">
                                VIEW
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default DmDetail;