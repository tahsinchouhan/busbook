import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Badal from "./pages/badal";
import BastarArt from "./pages/bastarArt";

import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/app.css";

import "./assets/css/mediaQuery.css";
import SteperDmpass from "./pages/booking/tickets/SteperDmpass";
import TicketCheckOut from "./pages/booking/tickets/TicketCheckOut";
import Tickets1 from "./pages/booking/tickets/Tickets1";
import TicketsSraech from "./pages/booking/tickets/TicketsSreach";
import DmCongratulate from "./pages/dm pass/dmtickets/DmCongratulate";
import DmDetail from "./pages/dm pass/dmtickets/DmDetail";
import TravelTicket from "./pages/dm pass/dmtickets/TravelTicket";
import Interest from "./pages/explore/Interest";
import Boarding from "./pages/selectbooking/Boarding";
import BusCard from "./pages/selectbooking/BusCard";
import BusConfirmation from "./pages/selectbooking/BusConfirmation";
import BusDetail from "./pages/selectbooking/BusDetail";
import BusDropoff from "./pages/selectbooking/BusDropoff";
import BusMonsoon from "./pages/selectbooking/BusMonsoon";
import CheckoutPage from "./pages/selectbooking/CheckoutPage";
import CongratulationPage from "./pages/selectbooking/CongratulationPage";
import HCheckoutPage from "./pages/selectbooking/hotelcheckout";
import RatanCard from "./pages/selectbooking/RatanCard";
import viewticket from "./pages/selectbooking/ViewTicket";

import Payment from "./pages/selectbooking/Payment";

import hPayment from "./pages/selectbooking/hPayment";
// import DmTicket from './pages/dm pass/dmtickets/DmTicket';

import BusTicketDetail from "./pages/selectbooking/BusTicketDetail";
import PackageTicketDetail from "./pages/selectbooking/PackageTicketDetail";

/// imports Hotel Details
import "./assets/css/hotellist.css";
import HotelDetails from "./pages/Hotel/HotelDetails";
import HotelList from "./pages/Hotel/HotelList";
import HotelSearch from "./pages/Hotel/HotelSearch";
import HotelSingleDetails from "./pages/hotelBooking/HotelSingleDetails";
import HotelTicketPay from "./pages/selectbooking/AtHotelPay";
import Hcongratulations from "./pages/selectbooking/hCongratulations";
import HotelConfirmation from "./pages/selectbooking/HotelConfirmation";
import HotelTicketDetail from "./pages/selectbooking/HotelTicketDetail";

import CabConfirmation from "./pages/Cab/CabConfirmation";
import CabList from "./pages/Cab/CabList";
import Cab from "./pages/Cab/CabSearch";

import AudioJourney from "./pages/audioJourney/AudioJourney";
import AudioJourneyDetail from "./pages/audioJourneyDeatil/AudioJourneyDetail";
import PromotionalContent from "./pages/promotionalContent";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={PreHome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/bookingprofile" component={BookProfile} />
            <Route exact path="/explore" component={Explores} />
            <Route exact path="/explore/:id" component={Explores} />
            <Route
              path="/destination_details/:name"
              component={DestinationDetails}
            />
            <Route path="/bookpass" component={BookPass} />
            <Route path="/bookingdetail" component={BookingDetails} />
            <Route
              path="/bookingconfirmation"
              component={BookingConformation}
            />
            <Route path="/checkoutbooking" component={CheckOutBook} />
            <Route path="/bookpayement" component={BookingPayment} />
            <Route path="/packages_details/:name" component={PackagesDetails} />
            <Route path="/covidresponse" component={CovidResponse} />
            <Route path="/tour-operator" component={TourOperator} />
            <Route path="/cab-operator" component={CabOperator} />
            <Route path="/registrationguide" component={RegistrationGuide} />
            <Route path="/registration" component={Registration} />
            <Route exact path="/booking" component={BusPass} />
            <Route exact path="/populardestinations" component={Destination} />
            <Route exact path="/curatedexperiences" component={Packages} />
            <Route
              exact
              path="/homestaysinbastar"
              component={HomestaysInBastar}
            />
            <Route
              exact
              path="/tourpackagesinbastar"
              component={TourPackagesinBastar}
            />
            <Route exact path="/taxiinbastar" component={TaxiInBastar} />
            <Route
              exact
              path="/tourguidesinbastar"
              component={TourGuidesInBastar}
            />
            <Route
              exact
              path="/touroperatorsinbastar"
              component={TourOperatorsInBastar}
            />
            <Route exact path="/select-booking" component={SelectBooking} />
            <Route exact path="/plan" component={PlanHomeStays} />
            <Route exact path="/planTourGuides" component={PlanTourGuides} />
            <Route
              exact
              path="/planTourPackages"
              component={PlanTourPackages}
            />
            <Route exact path="/planTaxis" component={PlanTaxis} />
            <Route
              exact
              path="/bastarEventsAndActivities"
              component={EventsAndActivities}
            />
            <Route exact path="/traveller_card" component={TravellerCard} />
            <Route exact path="/traveller_ticket" component={TravellerTicket} />
            <Route exact path="/dmpass" component={DmTicket2} />
            <Route exact path="/dmticket" component={DmPass} />
            <Route exact path="/pass" component={Pass} /> */}
            <Route exact path="/" component={BusDetail} />
            <Route exact path="/busdetail" component={BusDetail} />
            <Route exact path="/busmonsoon" component={BusMonsoon} />
            <Route exact path="/boarding" component={Boarding} />
            <Route exact path="/viewticket" component={viewticket} />
            <Route exact path="/busdropoff" component={BusDropoff} />
            <Route exact path="/busconfirmation" component={BusConfirmation} />
            <Route exact path="/ buscard" component={BusCard} />
            <Route exact path="/checkoutpage" component={CheckoutPage} />
            <Route exact path="/hcheckoutpage" component={HCheckoutPage} />
            <Route
              exact
              path="/congratulation-page"
              component={CongratulationPage}
            />
            <Route
              exact
              path="/CongratulationPage"
              component={CongratulationPage}
            />
            <Route exact path="/ratancard" component={RatanCard} />
            <Route exact path="/travelticket" component={TravelTicket} />
            <Route exact path="/dm-detail/:id" component={DmDetail} />
            <Route exact path="/bus-detail/:id" component={BusTicketDetail} />
            <Route
              exact
              path="/packages-detail/:id"
              component={PackageTicketDetail}
            />
            <Route exact path="/dm_congratulate" component={DmCongratulate} />
            <Route exact path="/tickets_sraech" component={TicketsSraech} />
            <Route exact path="/tickets" component={Tickets1} />
            <Route exact path="/steper_dmpass" component={SteperDmpass} />
            <Route exact path="/ ticket_checkout" component={TicketCheckOut} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/hpayment" component={hPayment} />
            <Route exact path="/interest" component={Interest} />
            {/* For Hotel Details */}
            <Route exact path="/hotelsearch" component={HotelSearch} />
            <Route
              exact
              path="/hotelDetails/:name/:startDate/:endDate"
              component={HotelDetails}
            />
            <Route exact path="/hotelList" component={HotelList} />
            <Route
              exact
              path="/hotelSingleDetails/:name"
              component={HotelSingleDetails}
            />
            <Route
              exact
              path="/Hcongratulation-page"
              component={Hcongratulations}
            />
            <Route
              exact
              path="/hotel-details-book/:id"
              component={HotelTicketDetail}
            />
            <Route
              exact
              path="/hotel-details-pay/:id"
              component={HotelTicketPay}
            />
            <Route
              exact
              path="/hotelconfirmation/:id"
              component={HotelConfirmation}
            />
            <Route exact path="/cabconfirmation" component={CabConfirmation} />
            <Route exact path="/checkoutpage" component={CheckoutPage} />
            <Route exact path="/cab" component={Cab} />
            <Route exact path="/cablist" component={CabList} />
            <Route exact path="/audioJourney" component={AudioJourney} />
            <Route
              exact
              path="/audioJourney/:id"
              component={AudioJourneyDetail}
            />
            <Route exact path="/badal" component={Badal} />
            <Route exact path="/kalagudi" component={BastarArt} />
            <Route
              exact
              path="/promotionalContent"
              component={PromotionalContent}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
