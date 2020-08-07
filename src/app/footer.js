import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PrivaySecurityLinks from "../components/Links/privacyLinks";
import ContactUsLinks from "../components/Links/contactUs";
import FollowUsLinks from "../components/Links/follow";
import LatestNewsLinks from "../components/Links/latestNews";

export default function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(-180deg, #fbfbfb, #e5e5e5)",
        width: "100%",
        paddingTop: 15,
      }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "15px 0",
        }}
      >
        <Grid container>
          <Grid item sm={3}>
            <ContactUsLinks />
          </Grid>
          <Grid item sm={3}>
            <PrivaySecurityLinks />
          </Grid>
          <Grid item sm={3}>
            <LatestNewsLinks />
          </Grid>
          <Grid item sm={3}>
            <FollowUsLinks />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" className="copyright">
              Copyright &copy; 2020-2021 Angel Digital Clothing Store India. All
              rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
