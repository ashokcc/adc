import React from "react";
import { Typography } from "@material-ui/core";
import LinkComponent from "./link";
import XYAxisSpace from "../xyAxisSpace";

export default function PrivaySecurityLinks() {
  return (
    <>
      <Typography variant="subtitle1" className="footer-title">
        PRIVACY &amp; SECURITY
      </Typography>
      <XYAxisSpace isXAxis={false} />
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Pivacy policy" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Terms and Conditions" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Cookie settings" />
      </Typography>
      <Typography variant="subtitle2">
        <LinkComponent to="/contact" name="Cookie policy" />
      </Typography>
    </>
  );
}
