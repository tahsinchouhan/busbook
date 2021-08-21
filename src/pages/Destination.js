import React, { useEffect, useState } from "react";
import { Container, Col, Form, Row, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Footer from "../pages/travesaly/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../Path/Path";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const history = useHistory();
  const [location, setLoation] = useState([]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setLoation(pos.coords);
    });
  };

  useEffect(() => {
    getDestinations();
    window.scrollTo(0, 0);
  }, [location]);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) {
          console.log(json.data)
          setDestinations(json.data);
        }
      })
      .catch((e) => console.log(e));
  };

  const searchingData = (value) => {
    fetch(API_PATH + `/api/v1/search/destination?searchvalue=${value}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) {
          console.log(json.data.destinations);
          setDestinations(json.data.destinations)
        };
      })
      .catch((e) => console.log(e));
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className="mt-5 mb-5">
          <div className="explore-search">
            <form className="d-flex" style={{ position: "relative" }}>
              <Form.Control
                type="text"
                name="search"
                placeholder="search...."
                style={{ marginTop: "-10px" }}
                onChange={(e) => searchingData(e.target.value)}
              />
              <div
                className="form__search-btn"
                type="button"
                style={{
                  position: "absolute",
                  top: 6,
                  right: 10,
                  background: "none",
                  border: "none",
                }}
              >
                <BsSearch style={{ marginTop: -20 }} color="grey" size="25px" />
              </div>
            </form>
          </div>
        </div>
        <>
          <h2 className="package__title mb-5">
            <span>Destinations</span>{" "}
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 100,
              marginTop: -100,
            }}
          >
            {destinations.map((item) => {
              return (
                <div
                  onClick={() =>
                    history.push({
                      pathname: `/destination_details/${item.title}`,
                      id: item._id,
                    })
                  }
                  style={{
                    width: 300,
                    height: 200,
                    marginRight: 15,
                    marginTop: 100,
                  }}
                >
                  <Image
                    draggable={false}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    src={item.upload_images}
                  />
                  <div style={{ color: "black" }} className="package__trip">
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
          </div>
        </>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Destination;
