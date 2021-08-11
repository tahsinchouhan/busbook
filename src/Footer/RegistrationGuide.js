import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../pages/travesaly/Footer";

const Operators = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="operator">
          <h1 className="header__title text__dark">
            <span className="text__dark">For Operators</span>
          </h1>
          <br />
          <Container>
            <div className="block">
              <h4 className="block__title">
                <span>Registration</span> Guide
              </h4>
              <p className="operator__text pt-3">
                Get Featured, Showcase your products/Services to Travelers.
                Also, Increase Your Booking Your products get discovered by
                travellers who use Amcho bastar to plan their trips.
              </p>
              <p className="operator__text">
                For registration, please mail your full name and address along
                with your WhatsApp number to support@nbdigitech.com and also
                forward details to this WhatsApp No.7987300407
              </p>
              <p className="operator__text">
                Once we receive your details, an admin with login credentials
                will be provided from admin panel you can enter all your package
                details along with photos
              </p>
            </div>
          </Container>
          <Container>
            <div className="block">
              <h4 className="block__title">
                <span>Booking </span> details
              </h4>
              <div className="pb-4">
                <p className="pt-3">Easy Listing and Booking Process. </p>
                <p>
                  You can simply create your package form dashboard you need
                  following details to enter{" "}
                </p>

                <ol>
                  <li>Full description with package price </li>
                  <li>Location map - Latitude and Langitude </li>
                  <li>Photos</li>
                  <li>WhatsApp contact and phone number </li>
                </ol>
                <p>
                  Once you submit all details it be reviewed by backend team and
                  listing will be live as soon as possible
                </p>

                <p>
                  Every operator should strictly adhere to these these 5
                  principle guidelines
                </p>

                <ul>
                  <li>
                    Value every traveller as you will be representing the bastar
                    community
                  </li>
                  <li>
                    Ensure COVID-19 protocols are being followed by all the
                    tourists
                  </li>
                  <li>Providing good hospitality and guides for travellers</li>
                  <li>
                    Timely arrangements of all the amenities, travels and other
                    activities as promised at the time of booking
                  </li>
                  <li>
                    Ensuring security and safety of travellers during their time
                    of visit
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Operators;
