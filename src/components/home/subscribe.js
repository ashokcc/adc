import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextInput from "../formControls/text";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import XYAxisSpace from "../xyAxisSpace";

const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <Box
      style={{
        textAlign: "center",
        padding: "30px 0",
        background: "linear-gradient(90deg, #fbfbfb, #f9f8f1)",
      }}
    >
      <Typography variant="h5">Be the First to know! </Typography>
      <Typography variant="body2">
        Join our mailing list for exclusive access to the latest fashion trends,
        tips, and more.
      </Typography>
      <XYAxisSpace isXAxis={false} />
      <TextInput
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        label="Enter your Email"
        variant="outlined"
      />
      <Button
        variant="contained"
        style={{
          margin: "6px 12px",
          height: 55,
          borderRadius: 5,
          textTransform: "capitalize",
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default Subscribe;
