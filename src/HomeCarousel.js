import { Button, Grid } from "@mui/material";
import Slider from "react-slick";
import "./App.css";

function HomeCarousel() {
  return (
    <div className="carouselLayout">
      <Slider
        autoplay={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        accessibility={true}
      >
        <div className="featureCardContainer carouselLayoutWrapper">
          <Grid
            container
            className=""
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <img
                src="https://www.honorfx.com/assets/images/slider/slide4.png"
                alt="logo"
                className="carouselImgStyle"
              />
            </Grid>
            <Grid item xs={12} md={4} textAlign="left">
              <div className="carouselTextWrap">
                <div className="mb-10 ">
                  <h3 className="welcomeText orangeHeadText inlineBlock">
                    Metatrader
                  </h3>
                  <h3 className="welcomeText inlineBlock ml-10">5</h3>
                </div>
                <Grid container>
                  <Grid
                    item
                    className="blueText font-20 font500"
                    textAlign="left"
                  >
                    Download the next generation trading platform MT5 and start
                    trading through our Standard, ECN or Premium account.
                  </Grid>
                  <Button
                    variant="contained"
                    className="contained200BtnStyle mt-20"
                  >
                    Download MTS
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="featureCardContainer carouselLayoutWrapper">
          <Grid
            container
            className=""
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <img
                src="https://www.honorfx.com/assets/images/slider/slider-3main.webp"
                alt="logo"
                className="carouselImgStyle"
              />
            </Grid>
            <Grid item xs={12} md={4} textAlign="left">
              <div className="carouselTextWrap">
                <div className="mb-10">
                  <h3 className="welcomeText m-0 orangeHeadText">
                    Multi-Assets
                  </h3>
                  <h3 className="font-42 font700 m-0 pb-0">To Diversify</h3>
                  <h3 className="font-42 font700 m-0 pb-0">Your Portfolio</h3>
                </div>
                <Grid container>
                  <Grid
                    item
                    className="blueText font-20 font500"
                    textAlign="left"
                  >
                    Download the next generation trading platform MT5 and start
                    trading through our Standard, ECN or Premium account.
                  </Grid>
                  <Button
                    variant="contained"
                    className="contained200BtnStyle mt-20"
                  >
                    View our instruments
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </div>
  );
}

export default HomeCarousel;
