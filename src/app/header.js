import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
  Avatar,
} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import XYAxisSpace from "../components/xyAxisSpace";
import ModalComponent from "../modal";
import Login from "../forms/login";
import Register from "../forms/register";
import { ModalContext } from "../store/contexts/modal";
import {
  LOGIN_MODAL,
  REGISTER_MODAL,
  FORGOT_PASS_MODAL,
} from "../constants/modals";
import { MODAL_CLOSE, MODAL_OPEN } from "../constants/actions";
import ForgotPassModal from "../forms/forgotpassword";

const Header = () => {
  const history = useHistory();
  const { dispatch } = React.useContext(ModalContext);
  const [isLoggedIn, setLogin] = React.useState(false);
  const navigateHome = () => {
    history.push("/");
  };

  return (
    <AppBar position="sticky" style={{ height: 50 }}>
      <Toolbar style={{ minHeight: 48 }}>
        <Typography
          variant="subtitle1"
          style={{ cursor: "pointer" }}
          onClick={navigateHome}
        >
          <EcoIcon
            color="secondary"
            style={{
              position: "relative",
              top: 6,
            }}
          />
          Angel Digital Clothing
        </Typography>
        <Box style={{ marginLeft: "10%", display: "flex", flex: 1 }}>
          <Box style={{ flex: 1 }}>
            <TextField
              placeholder="Search by product names"
              style={{
                width: "58%",
                border: "1px solid #888ed9",
                borderRadius: 20,
                padding: "0px 10px",
              }}
              className="search-bar"
            />
            <SearchIcon
              color="secondary"
              style={{
                position: "relative",
                right: 33,
                top: 6,
              }}
            />
          </Box>
          <ShoppingCartIcon
            color="secondary"
            style={{ position: "relative", top: 6 }}
          />
          <XYAxisSpace />
          {isLoggedIn ? (
            <Avatar />
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={() =>
                  dispatch({
                    type: MODAL_OPEN,
                    payload: { id: LOGIN_MODAL },
                  })
                }
              >
                SIGN IN
              </Button>
              <ModalComponent
                body={<Login />}
                id={LOGIN_MODAL}
                handleClose={() =>
                  dispatch({
                    type: MODAL_CLOSE,
                    payload: { id: LOGIN_MODAL },
                  })
                }
              />
              <ModalComponent
                body={<Register />}
                id={REGISTER_MODAL}
                handleClose={() =>
                  dispatch({
                    type: MODAL_CLOSE,
                    payload: { id: REGISTER_MODAL },
                  })
                }
              />
              <ModalComponent
                body={<ForgotPassModal />}
                id={FORGOT_PASS_MODAL}
                handleClose={() =>
                  dispatch({
                    type: MODAL_CLOSE,
                    payload: { id: FORGOT_PASS_MODAL },
                  })
                }
              />
              <XYAxisSpace />
              <Button
                variant="contained"
                onClick={() =>
                  dispatch({
                    type: MODAL_OPEN,
                    payload: { id: REGISTER_MODAL },
                  })
                }
              >
                SIGN UP
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
