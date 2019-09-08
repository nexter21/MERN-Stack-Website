import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser, getUsers } from "./actions/authActions";
import { Helmet } from "react-helmet";

import PrivateRoute from "./components/common/PrivateRoute";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import AboveNav from "./components/layout/AboveNav";
import Landing from "./components/LandingPage/Landing";
import About from "./components/Extra/About";
import Footer from "./components/layout/Footer";

import Trekking from "./components/countries/nepal/Trekking";
import ToursAndHikings from "./components/countries/nepal/ToursAndHiking";
import Climbing from "./components/countries/nepal/Climbing";
import Expedition from "./components/countries/nepal/Expedition";
import Hiking from "./components/countries/nepal/Hiking";
import Heli from "./components/countries/nepal/Heli";
import Test from "./components/Test";
import TestDestination from "./components/TestDestination";
import Trek from "./components/trekking/Trek";
import CMS from "./components/CMS/CMS";
import TibetOverview from "./components/countries/tibet/TibetOverview";

import AnnapurnaBaseCampCustomizedTrek from "./components/countries/nepal/trekking/AnnapurnaBaseCamp(Customized)Trek";
import AnnapurnaBaseCampBudgetTrek from "./components/countries/nepal/trekking/AnnapurnaBaseCampBudgetTrek";
import AnnapurnaBaseCampTrek from "./components/countries/nepal/trekking/AnnapurnaBaseCampTrek";
import AnnapurnaBaseCampTrekChitwanTour from "./components/countries/nepal/trekking/AnnapurnaBaseCampTrek+ChitwanTour";
import AnnapurnaCircuit from "./components/countries/nepal/trekking/AnnapurnaCircuit";
import AnnapurnaCircuitTrek from "./components/countries/nepal/trekking/AnnapurnaCircuitTrek";
import AnnapurnaCircuitwithTilichoLake13Days from "./components/countries/nepal/trekking/AnnapurnaCircuitwithTilichoLake-13Days";
import AnnapurnaSanctuaryTrek from "./components/countries/nepal/trekking/AnnapurnaSanctuaryTrek";

import ChisapaniNagarkotTrek from "./components/countries/nepal/trekking/ChisapaniNagarkotTrek";
import EverestBaseCampTrek from "./components/countries/nepal/trekking/EverestBaseCampTrek";
import ApiNampaBaseCampTrek from "./components/countries/nepal/trekking/ApiNampaBaseCampTrek";
import EverestBaseCampTrekBudget from "./components/countries/nepal/trekking/EverestBaseCampTrek(Budget)";
import EverestBaseCampTrekChitwanTour from "./components/countries/nepal/trekking/EverestBaseCampTrek+ChitwanTour";
import EverestHeliLuxuryTrek from "./components/countries/nepal/trekking/EverestHeliLuxuryTrek";
import EverestRapidTrek from "./components/countries/nepal/trekking/EverestRapidTrek";
import EverestHighPassesTrek from "./components/countries/nepal/trekking/EverestHighPassesTrek";
import EverestShortTrek from "./components/countries/nepal/trekking/EverestShortTrek";
import EverestviaGokyoTrek from "./components/countries/nepal/trekking/EverestviaGokyoTrek";
import EverestviaJiriTrek from "./components/countries/nepal/trekking/EverestviaJiriTrek";
import HoneyHuntingTrek from "./components/countries/nepal/trekking/HoneyHuntingTrek";
import GhorepaniPoonHillTrek from "./components/countries/nepal/trekking/Ghorepani-PoonHillTrek";
import HoneymoonTrekinNepal from "./components/countries/nepal/trekking/HoneymoonTrekinNepal";
import LangtangKyanjinGompaTrek from "./components/countries/nepal/trekking/LangtangKyanjinGompaTrek";
import LangtangTamangHeritageTrek from "./components/countries/nepal/trekking/LangtangTamangHeritageTrek";
import NarPhuValleyTrek from "./components/countries/nepal/trekking/NarPhuValleyTrek";
import PanchaseTrek from "./components/countries/nepal/trekking/PanchaseTrek";
import MuktinathHolyTrek from "./components/countries/nepal/trekking/MuktinathHolyTrek";
import TheRoyalTrek from "./components/countries/nepal/trekking/TheRoyalTrek";
import RaraLakeTrek from "./components/countries/nepal/trekking/RaraLakeTrek";
import TheDrukPathTrek from "./components/countries/nepal/trekking/TheDrukPathTrek";
import TsumValleyTrek from "./components/countries/nepal/trekking/TsumValleyTrek";
import ManangTilichoTrek from "./components/countries/nepal/trekking/ManangTilichoTrek";
import MakaluBaseCampTrek from "./components/countries/nepal/trekking/MakaluBaseCampTrek";
import ManasluCircuitTrek from "./components/countries/nepal/trekking/ManasluCircuitTrek";
import UpperMustangTrek from "./components/countries/nepal/trekking/UpperMustangTrek";
import UpperDolpoTrek from "./components/countries/nepal/trekking/UpperDolpoTrek";

import ChitwanWildlifeTour from "./components/countries/nepal/tours/ChitwanWildlifeTour";
import EverestKalaPattharHeliTour from "./components/countries/nepal/tours/Everest-KalaPattharHeliTour";
import HoneymoonTourinNepal from "./components/countries/nepal/tours/HoneymoonTourinNepal";
import Kathmandu from "./components/countries/nepal/tours/Kathmandu";
import KathmanduDhulikhelTour from "./components/countries/nepal/tours/Kathmandu&DhulikhelTour";
import KathmanduDayTour from "./components/countries/nepal/tours/KathmanduDayTour";
import KathmanduHeliSightseeingTour from "./components/countries/nepal/tours/KathmanduHeliSightseeingTour";
import KathmanduPokharaChitwanTour from "./components/countries/nepal/tours/Kathmandu,Pokhara&ChitwanTour";
import LangtangHeliTour from "./components/countries/nepal/tours/LangtangHeliTour";

import IslandPeakClimb from "./components/countries/nepal/climbs/IslandPeakClimb";
import IslandPeakClimbviaEBC from "./components/countries/nepal/climbs/IslandPeakClimbviaEBC";
import KyajoRiPeakClimb from "./components/countries/nepal/climbs/KyajoRiPeakClimb";
import LobuchePeakClimb from "./components/countries/nepal/climbs/LobuchePeakClimb";
import MeraPeakClimb from "./components/countries/nepal/climbs/MeraPeakClimb";
import PisangPeakClimb from "./components/countries/nepal/climbs/PisangPeakClimb";
import AnnapurnaCircuitChuluEast from "./components/countries/nepal/climbs/AnnapurnaCircuitChuluEast";

import AmaDablamExpedition from "./components/countries/nepal/expedition/AmaDablamExpedition";
import MtBaruntseExpedition from "./components/countries/nepal/expedition/MtBaruntseExpedition";
import MtCHOOYUEXPEDITION from "./components/countries/nepal/expedition/MtCHOOYUEXPEDITION";
import MtEVERESTEXPEDITION from "./components/countries/nepal/expedition/Mt.EVERESTEXPEDITION";
import HimlungExpedition from "./components/countries/nepal/expedition/HimlungExpedition";

import ChandragiriHiking from "./components/countries/nepal/Hiking/ChandragiriHiking";
import DahachokHiking from "./components/countries/nepal/Hiking/DahachokHiking";
import LhasaOverviewTour from "./components/countries/nepal/tours/LhasaOverviewTour";

import BhutanOverviewTour from "./components/countries/bhutan/BhutanOverviewTour";
import BhutanShortTour from "./components/countries/bhutan/BhutanShortTour";
import Essential from "./components/Extra/Essential";

import CSR from "./components/Extra/CSR";
import FAQ from "./components/Extra/FAQ";
import Agent from "./components/Extra/Agent";
import LGBT from "./components/Extra/LGBT";
import Peaks from "./components/Extra/Peaks";
import ClimbTerms from "./components/Extra/ClimbTerms";
import OurTerms from "./components/Extra/OurTerms";
import Climate from "./components/Extra/Climate";
import Difficulty from "./components/Extra/Difficulty";
import Gears from "./components/Extra/Gears";

import NotFound from "./components/NotFound";
import Conversion from "./components/Conversion";

import Nepal from "./components/countries/nepal/Nepal";
import Bhutan from "./components/countries/bhutan/Bhutan";
import Tibet from "./components/countries/tibet/Tibet";

import Icons from "./components/layout/Icons";
import PromoForm from "./components/common/Mobile/PromoForm";

import EverestBaseCamp from "./components/regions/EverestBaseCamp";
import AnnapurnaBase from "./components/LandingPages/AnnapurnaBase";

import CLanding from "./components/ConversionLP/CLanding";

import Blog from "./components/Blog/MainPage";
// import EverestHeliLuxuryTrek from "./components/countries/nepal/hiking/EverestHeliLuxuryTrek";
// import EverestKalaPattharHeliTour from "./components/countries/nepal/hiking/Everest-KalaPattharHeliTour";
// import KathmanduHeliSightseeingTour from "./components/countries/nepal/hiking/KathmanduHeliSightseeingTour";
// import LangtangHeliTour from "./components/countries/nepal/hiking/LangtangHeliTour";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" ref={this.myRef}>
            {/* <AboveNav /> */}
            <Navbar />
            <Icons />
            <Switch>
              <Route exact path="/blogs" component={Blog} />
              <Route
                onUpdate={() => window.scrollTo(0, 0)}
                exact
                path="/about"
                component={About}
              />
              <Route
                exact
                path="/essential-information"
                component={Essential}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/thank-you" component={Conversion} />
              <Route exact path="/trekking-in-nepal/" component={Trekking} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/landing" component={CLanding} />
              <Route
                exact
                path="/annapurna-base-camp-landing"
                component={AnnapurnaBase}
              />
              <Route
                exact
                path="/everest-base-camp"
                component={EverestBaseCamp}
              />
              <Route
                exact
                path="/testDestination"
                component={TestDestination}
              />
              <Route exact path="/trekking/:trek" component={Trek} />
              <Route
                exact
                path="/tours-and-hiking"
                component={ToursAndHikings}
              />
              <Route exact path="/promo-form" component={PromoForm} />
              <Route exact path="/about-nepal" component={Nepal} />
              <Route exact path="/about-bhutan" component={Bhutan} />
              <Route exact path="/about-tibet" component={Tibet} />
              <Route exact path="/climbing" component={Climbing} />
              <Route exact path="/expedition" component={Expedition} />
              <Route exact path="/hiking" component={Hiking} />
              <Route exact path="/heli-tours" component={Heli} />
              <Route exact path="/csr" component={CSR} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/agent" component={Agent} />
              <Route exact path="/lgbt" component={LGBT} />
              <Route exact path="/peaks" component={Peaks} />
              <Route exact path="/climbing-terms" component={ClimbTerms} />
              <Route exact path="/terms-and-condition" component={OurTerms} />
              <Route exact path="/climate-and-season" component={Climate} />
              <Route exact path="/trip-difficulty" component={Difficulty} />
              <Route exact path="/gears-and-equipment" component={Gears} />
              <Route
                exact
                path="/Annapurna-Base-Camp-Customized-Trek/"
                component={AnnapurnaBaseCampCustomizedTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Base-Camp-Customized-Trek/:ok"
                component={AnnapurnaBaseCampCustomizedTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Base-Camp-Budget-Trek/"
                component={AnnapurnaBaseCampBudgetTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Base-Camp-Budget-Trek/:ok"
                component={AnnapurnaBaseCampBudgetTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Base-Camp-Trek/"
                component={AnnapurnaBaseCampTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Base-Camp-Trek/:ok"
                component={AnnapurnaBaseCampTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Base-Camp-Trek+Chitwan-Tour/"
                component={AnnapurnaBaseCampTrekChitwanTour}
              />{" "}
              <Route
                exact
                path="/Annapurna-Circuit/"
                component={AnnapurnaCircuit}
              />{" "}
              <Route
                exact
                path="/Annapurna-Circuit/:ok"
                component={AnnapurnaCircuit}
              />{" "}
              <Route
                exact
                path="/Annapurna-Circuit-Trek/"
                component={AnnapurnaCircuitTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Circuit-Trek/:ok"
                component={AnnapurnaCircuitTrek}
              />{" "}
              <Route
                exact
                path="/Annapurna-Circuit-with-Tilicho--Lake--13-Day/"
                component={AnnapurnaCircuitwithTilichoLake13Days}
              />{" "}
              <Route
                exact
                path="/Api-Nampa-Base-Camp-Trek/"
                component={ApiNampaBaseCampTrek}
              />{" "}
              <Route
                exact
                path="/Chisapani-Nagarkot-Trek/"
                component={ChisapaniNagarkotTrek}
              />{" "}
              <Route
                exact
                path="/Everest-Base-Camp-Trek/"
                component={EverestBaseCampTrek}
              />{" "}
              <Route
                exact
                path="/Everest-Base-Camp-Trek/:ok"
                component={EverestBaseCampTrek}
              />{" "}
              <Route
                exact
                path="/Everest-Base-Camp-Trek-Budget/"
                component={EverestBaseCampTrekBudget}
              />{" "}
              <Route
                exact
                path="/Everest-Base-Camp-Trek+Chitwan-Tour-/"
                component={EverestBaseCampTrekChitwanTour}
              />{" "}
              <Route
                exact
                path="/Everest-High-Passes-Trek/"
                component={EverestHighPassesTrek}
              />{" "}
              <Route
                exact
                path="/Everest-Rapid-Trek/"
                component={EverestRapidTrek}
              />{" "}
              <Route
                exact
                path="/Everest-via-Gokyo-Trek/"
                component={EverestviaGokyoTrek}
              />{" "}
              <Route
                exact
                path="/Everest-Short-Trek/"
                component={EverestShortTrek}
              />{" "}
              <Route
                exact
                path="/Everest-via-Jiri-Trek/"
                component={EverestviaJiriTrek}
              />{" "}
              <Route
                exact
                path="/Langtang-Valley-Trek/"
                component={LangtangKyanjinGompaTrek}
              />{" "}
              <Route
                exact
                path="/Langtang-Tamang-Heritage-Trek/"
                component={LangtangTamangHeritageTrek}
              />{" "}
              <Route
                exact
                path="/Makalu-Base-Camp-Trek/"
                component={MakaluBaseCampTrek}
              />{" "}
              <Route
                exact
                path="/Manang-Tilicho-Trek/"
                component={ManangTilichoTrek}
              />{" "}
              <Route
                exact
                path="/Manaslu-Circuit-Trek/"
                component={ManasluCircuitTrek}
              />{" "}
              <Route
                exact
                path="/Ghorepani-Poon-Hill-Trek/"
                component={GhorepaniPoonHillTrek}
              />{" "}
              <Route
                exact
                path="/Muktinath-Holy-Trek/"
                component={MuktinathHolyTrek}
              />{" "}
              <Route
                exact
                path="/Nar-Phu-Valley-Trek/"
                component={NarPhuValleyTrek}
              />{" "}
              <Route
                exact
                path="/Honeymoon-Trek-in-Nepal/"
                component={HoneymoonTrekinNepal}
              />{" "}
              <Route exact path="/Panchase-Trek/" component={PanchaseTrek} />{" "}
              <Route exact path="/Rara-Lake-Trek/" component={RaraLakeTrek} />{" "}
              <Route
                exact
                path="/The-Druk-Path-Trek/"
                component={TheDrukPathTrek}
              />{" "}
              <Route exact path="/The-Royal-Trek/" component={TheRoyalTrek} />{" "}
              <Route
                exact
                path="/Annapurna-Sanctuary-Trek/"
                component={AnnapurnaSanctuaryTrek}
              />{" "}
              <Route
                exact
                path="/Honey-Hunting-Trek/"
                component={HoneyHuntingTrek}
              />{" "}
              <Route
                exact
                path="/Tsum-Valley-Trek/"
                component={TsumValleyTrek}
              />{" "}
              <Route
                exact
                path="/Upper-Dolpo-Trek/"
                component={UpperDolpoTrek}
              />{" "}
              <Route
                exact
                path="/Upper-Mustang-Trek/"
                component={UpperMustangTrek}
              />
              <Route
                exact
                path="/Chitwan-Wildlife-Tour/"
                component={ChitwanWildlifeTour}
              />{" "}
              <Route
                exact
                path="/Honeymoon-Tour-in-Nepal/"
                component={HoneymoonTourinNepal}
              />{" "}
              <Route exact path="/Kathmandu/" component={Kathmandu} />{" "}
              <Route
                exact
                path="/Kathmandu-&-Dhulikhel-Tour/"
                component={KathmanduDhulikhelTour}
              />{" "}
              <Route
                exact
                path="/Kathmandu-Day-Tou/"
                component={KathmanduDayTour}
              />{" "}
              <Route
                exact
                path="/Kathmandu,-Pokhara-&-Chitwan-Tour/"
                component={KathmanduPokharaChitwanTour}
              />{" "}
              <Route
                exact
                path="/Island-Peak-Climb/"
                component={IslandPeakClimb}
              />
              <Route
                exact
                path="/Island-Peak-Climb-via-EBC/"
                component={IslandPeakClimbviaEBC}
              />
              <Route
                exact
                path="/Kyajo-Ri-Peak-Climb/"
                component={KyajoRiPeakClimb}
              />
              <Route
                exact
                path="/Lobuche-Peak-Climb/"
                component={LobuchePeakClimb}
              />
              <Route exact path="/Mera-Peak-Climb/" component={MeraPeakClimb} />
              <Route
                exact
                path="/Pisang-Peak-Climb/"
                component={PisangPeakClimb}
              />
              <Route
                exact
                path="/Annapurna-Circuit-With-Chulu-East-Climb/"
                component={AnnapurnaCircuitChuluEast}
              />
              <Route
                exact
                path="/Ama-Dablam-Expedition/"
                component={AmaDablamExpedition}
              />
              <Route
                exact
                path="/Mt-Baruntse-Expedition/"
                component={MtBaruntseExpedition}
              />
              <Route
                exact
                path="/Mt-CHO-OYU-EXPEDITION/"
                component={MtCHOOYUEXPEDITION}
              />
              <Route
                exact
                path="/Mt.-EVEREST-EXPEDITION/"
                component={MtEVERESTEXPEDITION}
              />
              <Route
                exact
                path="/Himlung-Expedition/"
                component={HimlungExpedition}
              />
              <Route
                exact
                path="/Chandragiri-Hiking/"
                component={ChandragiriHiking}
              />
              <Route
                exact
                path="/Dahachok-Hiking/"
                component={DahachokHiking}
              />
              <Route
                exact
                path="/Everest-Heli-Luxury-Trek/"
                component={EverestHeliLuxuryTrek}
              />
              <Route
                exact
                path="/Kathmandu-Heli-Sightseeing-Tour/"
                component={KathmanduHeliSightseeingTour}
              />
              <Route
                exact
                path="/Langtang-Heli-Tour/"
                component={LangtangHeliTour}
              />
              <Route
                exact
                path="/Everest-Kala-Patthar-Heli-Tou/"
                component={EverestKalaPattharHeliTour}
              />
              <Route
                exact
                path="/tibet-overview-tour"
                component={TibetOverview}
              />
              <Route
                exact
                path="/lhasa-overview-tour"
                component={LhasaOverviewTour}
              />
              <Route
                exact
                path="/Bhutan-Overview-Tour/"
                component={BhutanOverviewTour}
              />
              <Route
                exact
                path="/Bhutan-Short-Tour/"
                component={BhutanShortTour}
              />
              <PrivateRoute exact path="/admin" component={CMS} />
              <Route component={NotFound} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
