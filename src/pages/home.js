import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import Banner from "../assets/images/banner.jpg";
import XYAxisSpace from "../components/xyAxisSpace";
import LatestProducts from "../components/home/latestProducts";
import Subscribe from "../components/home/subscribe";

export default function Home() {
  return (
    <>
      <Box
        style={{
          position: "absolute",
          width: 350,
          left: "13%",
          top: "40%",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "3rem",
            color: "#ffffff",
            lineHeight: "53px",
          }}
        >
          Digitize your Measurements
        </Typography>
        <XYAxisSpace isXAxis={false} />
        <Button
          variant="outlined"
          style={{ color: "#ffffff", backgroundColor: "#0170fe" }}
        >
          Customize Shirts
        </Button>
      </Box>
      <img src={Banner} alt="Dress Shirts" style={{ width: "100%" }} />
      <LatestProducts />
      <Subscribe />
    </>
  );
}
