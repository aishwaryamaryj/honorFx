import { Button, Grid } from "@mui/material";
import SecondaryHeader from "./SecondaryHeader";
import HomeCarousel from "./HomeCarousel";
import WelcomeSection from "./WelcomeSection";
import StartTradingSection from "./StartTradingSection";
import AccountsSection from "./AccountsSection";
import PlatformSection from "./PlatformSection";
import WhyHonorFxContainer from "./WhyHonorFxContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="mainHeader">
        <div className="headerContainer">
          <Grid container xs={12} direction="row">
            <Grid item container xs={12} md={6} direction="row">
              <a href="/" class="header_logo">
                <img
                  src="https://www.honorfx.com/assets/images/honorfx_logo.svg"
                  alt="logo"
                />
              </a>
            </Grid>
            <Grid
              item
              container
              xs={12}
              md={6}
              direction="row"
              justifyContent="flex-end"
            >
              <Grid item>
                <Button variant="outlined" className="outlinedBtnStyle mr-10">
                  Login
                </Button>
                <Button variant="contained" className="containedBtnStyle">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </header>
      <header className="secondaryHeader">
        <div className="headerContainer">
          <SecondaryHeader />
        </div>
      </header>
      <div className="homeBanner">
        <HomeCarousel />
      </div>
      <div className="homeWelcomeSec">
        <WelcomeSection />
      </div>
      <div className="startTradingSec">
        <StartTradingSection />
      </div>
      <div className="accountsSec">
        <AccountsSection />
      </div>
      <div className="plarformSec">
        <PlatformSection />
      </div>
      <div className="honorFxSpecsSec">
        <WhyHonorFxContainer />
      </div>
    </div>
  );
}

export default App;
