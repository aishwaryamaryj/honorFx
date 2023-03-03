import { Grid } from "@mui/material";
import {
  Android,
  Apple,
  DesktopMacOutlined,
  Window,
} from "@mui/icons-material";
import "./App.css";

function PlatformSection() {
  return (
    <div className="platformContainer">
      <div className="featureCardContainer">
        <div className="accountsTextContainer pb-20">
          <h2 className="welcomeText whiteText inlineBlock">Our</h2>
          <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
            platform
          </h2>
          <div class="greyText accountTextArea">
            Trading platform, unlimited opportunities
          </div>
        </div>
        <Grid container direction="row" alignItems="center">
          <Grid item md={7}>
            <img
              src="https://www.honorfx.com/assets/images/bg-3.png"
              data-src="https://www.honorfx.com/assets/images/bg-3.png"
              className="platformImg"
              alt="Our Platforms"
            />
          </Grid>
          <Grid item md={5} textAlign="left">
            <div className="platformcard">
              <div className="orangeHeadText font600 font-42 pb-20">MT5</div>
              <div className="font-16 whiteText mb-30">
                MetaTrader 5 is an advanced version of the widely used MT4
                platform with several improvements and additional features.
              </div>
              <ul className="platformListWrap font-16 whiteText pb-20">
                <li>Suitable for experienced traders</li>
                <li>Sophisticated order managment tools</li>
                <li>Sophisticated order managment tools</li>
                <li>Easy to configure and customise your trading setup</li>
              </ul>
              <Grid
                container
                className="platformCardFooter"
                direction="row"
                justifyContent="space-between"
              >
                <Grid item md={6}>
                  <div className="font-16 orangeHeadText font600">
                    Learn More>>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  md={5}
                  alignSelf="end"
                  textAlign="end"
                  className="whiteText"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Android fontSize="large" />
                  <Apple fontSize="large" />
                  <DesktopMacOutlined fontSize="large" />
                  <Window fontSize="large" />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PlatformSection;
