import React from "react";
import { Typography } from "@material-ui/core";
import LinkComponent from "./link";
import XYAxisSpace from "../xyAxisSpace";

export default function ContactUsLinks() {
  return (
    <>
      <Typography variant="subtitle1" className="footer-title">
        CONTACT US
      </Typography>
      <XYAxisSpace isXAxis={false} />
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Contact Form" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Store" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Shipping Information" />
      </Typography>
    </>
  );
}
