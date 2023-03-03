import { Button } from "@mui/material";
import "./App.css";

function StartTradingSection() {
  return (
    <div className="startTradeSec">
      <div className="featureCardContainer">
        <h2 class="whiteHeadText mb-20">
          Start Trading Now or Try Demo Account
        </h2>
        <div>
          <Button variant="contained" className="containedBtnStyle mr-10">
            Open Live Account
          </Button>
          <Button variant="outlined" className="outlinedBtnStyle">
            Open Demo Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartTradingSection;
