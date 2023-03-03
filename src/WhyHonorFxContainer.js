import { Button, Grid } from "@mui/material";
import "./App.css";

function WhyHonorFxContainer() {
  const tradeDetails = [
    {
      key: "Forex",
      value:
        "Trade 40 currency pairs including major, minor and crosses with ultra-low spreads and immediate execution",
    },
    {
      key: "Futures",
      value:
        "Trade on Metals (Gold, Silver & Copper) and Energy (Crude, Brent & Natural gas)",
    },
    {
      key: "Stocks",
      value:
        "Take position over 65+ shares across UK, US and European markets on popular shares including Amazon, Boeing, Facebook and Netflix",
    },
    {
      key: "Indices",
      value:
        "Trade on basket of top shares representing the performance of a country’s economy",
    },
  ];
  return (
    <div className="whyHonorFxSec featureCardContainer mb-50">
      <div className="whyHonorFxContainer">
        <h2 className="welcomeText inlineBlock">Why</h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
          HonorFx
        </h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">?</h2>
        <div class="greyText">Trade with Honor</div>
      </div>
      <Grid
        container
        justifyContent="space-between"
        className="honorSpecsWrapper pb-20"
        flex={1}
      >
        <Grid item className="specsCard" md={4}>
          <img
            className="specsImageStyle"
            src="https://www.honorfx.com/assets/images/icons/why-bg-1.svg"
            data-src="https://www.honorfx.com/assets/images/icons/why-bg-1.svg"
            alt="Swap-Free Account"
          />
          <div className="font-24 blueText font700">Swap-Free Account </div>
        </Grid>
        <Grid item className="specsCard" md={4}>
          <img
            className="specsImageStyle"
            src="https://www.honorfx.com/assets/images/icons/why-bg-2.svg"
            data-src="https://www.honorfx.com/assets/images/icons/why-bg-2.svg"
            alt="Swap-Free Account"
          />
          <div className="font-24 blueText font700">Swap-Free Account </div>
        </Grid>
        <Grid item className="specsCard" md={4}>
          <img
            className="specsImageStyle"
            src="https://www.honorfx.com/assets/images/icons/why-bg-3.svg"
            data-src="https://www.honorfx.com/assets/images/icons/why-bg-3.svg"
            alt="Swap-Free Account"
          />
          <div className="font-24 blueText font700">Swap-Free Account </div>
        </Grid>
      </Grid>
      <div className="whyHonorFxContainer mb-80">
        <h2 className="welcomeText inlineBlock">What can you</h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">Trade</h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">?</h2>
        <div class="greyText">
          With HonorFX, You can trade on major markets across 4 assets classes
          including FX, Indices, Shares, Spot Metals and CFDs
        </div>
        <Button variant="contained" className="containedBtnStyle mt-20">
          Open Live Account
        </Button>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className="tradeCardWrapper"
        textAlign="left"
      >
        {tradeDetails.map((tradeData, index) => (
          <Grid item md={3} className="tradeCard">
            <Grid
              container
              item
              className="tradeCardHead"
              justifyContent="space-between"
              direction="column"
            >
              <Grid item>
                <div className="font-32 font800 mb-20 blueText">
                  {tradeData.key}
                </div>
                <div className="blueText">{tradeData.value}</div>
              </Grid>
              <Grid item md="auto" alignSelf="end">
                <Button variant="outlined" className="outlinedBlueBtnStyle">
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default WhyHonorFxContainer;
