import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/app.css";

import "./assets/css/mediaQuery.css";
import TicketCheckOut from "./pages/booking/tickets/TicketCheckOut";
import TicketsSraech from "./pages/booking/tickets/TicketsSreach";
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

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
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
            <Route exact path="/bus-detail/:id" component={BusTicketDetail} />
            <Route
              exact
              path="/packages-detail/:id"
              component={PackageTicketDetail}
            />
            <Route exact path="/tickets_sraech" component={TicketsSraech} />
            <Route exact path="/ ticket_checkout" component={TicketCheckOut} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/hpayment" component={hPayment} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
