import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import { useFormik } from "formik";
import TextInput from "../components/formControls/text";
import XYAxisSpace from "../components/xyAxisSpace";
import AuthAPI from "../services/auth";
import { ModalContext } from "../store/contexts/modal";
import { FORGOT_PASS_MODAL } from "../constants/modals";
import { MODAL_CLOSE } from "../constants/actions";

const ForgotPassModal = () => {
  const { dispatch } = React.useContext(ModalContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      AuthAPI(values)
        .then((data) => {
          console.log("SUCCESS ", data);
          dispatch({
            type: MODAL_CLOSE,
            payload: { id: FORGOT_PASS_MODAL },
          });
        })
        .catch((e) => {
          console.log("ERROR ", e);
        });
    },
  });
  return (
    <>
      <Typography variant="h5">Reset your password</Typography>
      <XYAxisSpace isXAxis={false} />
      <XYAxisSpace isXAxis={false} />
      <TextInput
        value={formik.values.email}
        onChange={formik.handleChange}
        fullWidth
        name="email"
        label="Email /Phone number"
      />
      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex" }}>
        <Button variant="outlined" onClick={formik.handleSubmit}>
          Send password reset email
        </Button>
      </Box>
    </>
  );
};

export default ForgotPassModal;
