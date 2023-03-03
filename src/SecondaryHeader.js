import { Button, Grid, ButtonGroup } from "@mui/material";
import "./App.css";

function SecondaryHeader() {
  return (
    <div className="secHeader">
      <Grid container xs={12} direction="row">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button className="menuStyleFirst">About Us</Button>
          <Button className="menuStyle"> Account Types</Button>
          <Button className="menuStyle">Trading Platform</Button>
          <Button className="menuStyle">Payment Methods</Button>
          <Button className="menuStyle"> Markets</Button>
          <Button className="menuStyle">Promotions</Button>
          <Button className="menuStyle">Partnerships</Button>
          <Button className="menuStyle">Tools</Button>
          <Button className="menuStyleLast">Contact Us</Button>
        </ButtonGroup>
        {/* <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          About Us
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Account Types
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Trading Platform
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Payment Methods
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Markets
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Promotions
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Partnerships
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Tools
        </Button>
        <Button variant="outlined" className="outlinedBtnStyle mr-10 menuStyle">
          Contact Us
        </Button> */}
      </Grid>
    </div>
  );
}

export default SecondaryHeader;
