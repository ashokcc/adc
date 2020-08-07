import React from "react";
import { Typography } from "@material-ui/core";
import XYAxisSpace from "../xyAxisSpace";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";

export default function FollowUsLinks() {
  return (
    <>
      <Typography variant="subtitle1" className="footer-title">
        FOLLOW US
      </Typography>
      <XYAxisSpace isXAxis={false} />
      <Button
        variant="text"
        startIcon={<TwitterIcon style={{ color: "#00acee", fontSize: 25 }} />}
        className="follow-us-text"
        fullWidth
      >
        Twitter
      </Button>
      <Button
        variant="text"
        startIcon={
          <FacebookIcon
            color="secondary"
            style={{ color: "#3b5998", fontSize: 25 }}
          />
        }
        className="follow-us-text"
        fullWidth
      >
        Facebook
      </Button>
      <Button
        variant="text"
        startIcon={<InstagramIcon style={{ color: "#3f729b", fontSize: 25 }} />}
        className="follow-us-text"
        style={{}}
        fullWidth
      >
        Instagram
      </Button>
    </>
  );
}
