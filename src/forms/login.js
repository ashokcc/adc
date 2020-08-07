import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import { useFormik } from "formik";
import TextInput from "../components/formControls/text";
import XYAxisSpace from "../components/xyAxisSpace";
import AuthAPI from "../services/auth";
import { ModalContext } from "../store/contexts/modal";
import {
  LOGIN_MODAL,
  REGISTER_MODAL,
  FORGOT_PASS_MODAL,
} from "../constants/modals";
import { openModal, closeModal } from "../utils";
const Login = () => {
  const { dispatch } = React.useContext(ModalContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      AuthAPI(values)
        .then((data) => {
          console.log("SUCCESS ", data);
          closeModal(LOGIN_MODAL, dispatch);
        })
        .catch((e) => {
          console.log("ERROR ", e);
        });
    },
  });

  return (
    <>
      <Typography variant="h5">Login</Typography>
      <XYAxisSpace isXAxis={false} />
      <XYAxisSpace isXAxis={false} />
      <TextInput
        value={formik.values.email}
        onChange={formik.handleChange}
        fullWidth
        name="email"
        label="Email /Phone number"
      />
      <TextInput
        fullWidth
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex" }}>
        <Button variant="outlined" onClick={formik.handleSubmit}>
          Submit
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            right: 0,
            textTransform: "capitalize",
            color: "#0170fe",
            marginTop: 2,
          }}
          onClick={() => {
            closeModal(LOGIN_MODAL, dispatch);
            openModal(FORGOT_PASS_MODAL, dispatch);
          }}
        >
          Forgot password?
        </Button>
      </Box>
      <Typography variant="h6" style={{ margin: "10px 20px" }}>
        OR
      </Typography>
      <Box>
        <Button
          variant="outlined"
          style={{ flex: 1 }}
          onClick={() => {
            closeModal(LOGIN_MODAL, dispatch);
            openModal(REGISTER_MODAL, dispatch);
          }}
        >
          Register
        </Button>
        <Typography variant="caption" style={{ margin: "0px 5px" }}>
          for new Guest
        </Typography>
      </Box>
    </>
  );
};

export default Login;
