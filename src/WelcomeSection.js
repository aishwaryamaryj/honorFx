import { Grid } from "@mui/material";
import "./App.css";

function WelcomeSection() {
  const featuresList = [
    {
      feature: "SPREAD",
      spec: "AS LOW AS",
      value: "0.2",
    },
    {
      feature: "FINANCIAL",
      spec: "REGULATORS",
      value: "2",
    },
    {
      feature: "FEES ON",
      spec: "WITHDRAWAL & DEPOSIT",
      value: "0",
    },
    {
      feature: "INSTRUMENTS",
      spec: "TO TRADE",
      value: "275+",
    },
    {
      feature: "PAYMENT",
      spec: "METHODS",
      value: "16",
    },
    {
      feature: "CUSTOMER",
      spec: "SERVICE",
      value: "24/5",
    },
  ];

  return (
    <div className="secHeader">
      <div className="welcomeContainer">
        <h2 className="welcomeText inlineBlock">Welcome to </h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
          HonorFx
        </h2>
        <div class="greyText">
          Explore the world of financial markets with us
        </div>
      </div>
      <div className="featuresContainer">
        <div className="featureCardContainer">
          <Grid
            className="featureCardWrapper"
            container
            direction="row"
            justifyContent="space-between"
          >
            {featuresList.map((featureData, index) => (
              <Grid
                item
                key={`featureCard${index + 1}`}
                className="featureCard"
                display="flex"
                alignItems="center"
                direction="column"
                md={2}
              >
                <div className="featureValueCircle">{featureData.value}</div>
                <div className="featureTextWrap">
                  <div className="featureText">{featureData.feature}</div>
                  <div className="featureTextSmall">{featureData.spec}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
