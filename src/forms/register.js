import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextInput from "../components/formControls/text";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";

import XYAxisSpace from "../components/xyAxisSpace";
import { useFormik } from "formik";
import { ModalContext } from "../store/contexts/modal";

import { LOGIN_MODAL, REGISTER_MODAL } from "../constants/modals";
import { openModal, closeModal } from "../utils";

const Register = () => {
  const { dispatch } = React.useContext(ModalContext);
  const [isGSTNumberFieldVisible, showOrHideGSTNumber] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "customer",
      gstNumber: "",
    },
    onSubmit: (values) => {
      console.log("REGISTER DETAILS ", values);
    },
  });
  return (
    <Box style={{ width: 500 }}>
      <Typography variant="h5">Register</Typography>
      <XYAxisSpace isXAxis={false} />
      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex", flexGrow: 1 }}>
        <TextInput
          fullWidth
          name="firstName"
          onChange={formik.handleChange}
          label="First Name"
        />
        <XYAxisSpace />
        <TextInput
          fullWidth
          name="lastName"
          onChange={formik.handleChange}
          label="Last Name"
        />
      </Box>
      <TextInput
        fullWidth
        name="email"
        onChange={formik.handleChange}
        label="Email/Phone number"
      />
      <Box style={{ display: "flex" }}>
        <TextInput
          fullWidth
          type="password"
          onChange={formik.handleChange}
          name="password"
          label="Password"
        />
        <XYAxisSpace />
        <TextInput
          fullWidth
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          label="Confirm your password"
        />
      </Box>
      <Box style={{ marginTop: 15 }}>
        <FormLabel component="legend">Custmer Role</FormLabel>
        <RadioGroup
          name="role"
          value={formik.values.role}
          onChange={(e) => {
            if (e.currentTarget.value === "customer") {
              showOrHideGSTNumber(false);
            } else {
              showOrHideGSTNumber(true);
            }
            formik.setFieldValue("role", e.currentTarget.value);
          }}
          style={{ flexDirection: "row" }}
        >
          <FormControlLabel
            value="customer"
            control={<Radio />}
            label="Customer"
          />
          <FormControlLabel value="seller" control={<Radio />} label="Seller" />
          <FormControlLabel value="tailor" control={<Radio />} label="Tailor" />
        </RadioGroup>
      </Box>
      {isGSTNumberFieldVisible ? (
        <TextInput
          fullWidth
          name="gstNumber"
          onChange={formik.handleChange}
          label="GST Number"
        />
      ) : (
        ""
      )}
      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex" }}>
        <Button variant="outlined" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Box>
      <Typography variant="h6" style={{ margin: "10px 21px" }}>
        OR
      </Typography>
      <Box>
        <Button
          variant="outlined"
          style={{ flex: 1 }}
          onClick={() => {
            closeModal(REGISTER_MODAL, dispatch);
            openModal(LOGIN_MODAL, dispatch);
          }}
        >
          Login
        </Button>
        <Typography variant="caption" style={{ margin: "0px 5px" }}>
          for existing customer
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
