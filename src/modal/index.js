import React from "react";
import { Modal, Fade, Backdrop, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { ModalContext } from "../store/contexts/modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    minWidth: 400,
    minHeight: 400,
    padding: 15,
    position: "relative",
    backgroundColor: "#ffffff",
    outline: "none !important",
  },
}));
const ModalComponent = ({ id, handleClose, body }) => {
  const classes = useStyles();
  const context = React.useContext(ModalContext);
  const open = context.modals[id];
  return (
    <>
      <Modal
        open={open}
        disableEnforceFocus
        disableAutoFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={handleClose}
        className={classes.modal}
      >
        <Fade in={open}>
          <Box className={classes.container}>
            <CloseIcon
              onClick={handleClose}
              style={{
                position: "absolute",
                right: 12,
                top: 5,
                cursor: "pointer",
              }}
            />
            {body}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalComponent;
