import { Button, Grid } from "@mui/material";
import "./App.css";

function AccountsSection() {
  const accountTypes = {
    STANDARD: {
      Leverage: "1:500",
      "Min.Deposit": "$100",
      "Spread from": 1.5,
      Commission: "No",
      SWAPS: "Yes",
      Platform: "MT5",
    },
    PREMIUM: {
      Leverage: "1:500",
      "Min.Deposit": "$100",
      "Spread from": 1.8,
      Commission: "No",
      SWAPS: "No",
      Platform: "MT5",
    },
    ECN: {
      Leverage: "1:200",
      "Min.Deposit": " $10,000",
      "Spread from": 0.2,
      Commission: "$7 per lot",
      SWAPS: "Yes",
      Platform: "MT5",
    },
  };

  return (
    <div className="featureCardContainer accountSecContainer">
      <div className="accountsTextContainer">
        <h2 className="welcomeText inlineBlock">Accounts</h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
          We Provide
        </h2>
        <div class="greyText accountTextArea">
          HonorFX provides true ECN connectivity, so our clients have direct
          access to other participants in equity and currency markets using best
          conditions for their trading experience. Choose a trading account that
          suits your trading style
        </div>
      </div>
      <div className="accountsCardContainer">
        <Grid
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          container
        >
          {Object.keys(accountTypes).map((keyValue) => (
            <Grid item className="pb-30 accountCard">
              <div
                className={
                  keyValue === "STANDARD"
                    ? "accountCardHead standard"
                    : keyValue === "PREMIUM"
                    ? "accountCardHead premium"
                    : "accountCardHead ecn"
                }
              >
                <span className="upperAccountText">ACCOUNT</span>
                <span>{keyValue}</span>
              </div>
              <div className="accountDetailWrapper">
                {Object.keys(accountTypes[keyValue]).map((accountKey) => (
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyItems="flex-start"
                    className="accountRowWrap pb-10"
                  >
                    <Grid item className="font-16" md={7} textAlign="left">
                      {accountKey}
                    </Grid>
                    <Grid
                      item
                      className="font-16 font600"
                      md={5}
                      textAlign="left"
                    >
                      {accountTypes[keyValue][accountKey]}
                    </Grid>
                  </Grid>
                ))}
              </div>
              <Button variant="outlined" className="outlinedBlueBtnStyle mt-10">
                Open Account
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      <Button variant="contained" className="containedBigBtnStyle">
        Compare Accounts
      </Button>
    </div>
  );
}

export default AccountsSection;
