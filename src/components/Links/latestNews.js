import React from "react";
import { Typography } from "@material-ui/core";
import LinkComponent from "./link";
import XYAxisSpace from "../xyAxisSpace";

export default function LatestNewsLinks() {
  return (
    <>
      <Typography variant="subtitle1" className="footer-title">
        LATEST NEWS
      </Typography>
      <XYAxisSpace isXAxis={false} />
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Exclusive Offers" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Become a Member" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Gift Certificates" />
      </Typography>
    </>
  );
}
