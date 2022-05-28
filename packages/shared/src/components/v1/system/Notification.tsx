import * as React from "react";
import {
  useAppSelector,
  useAppDispatch,
  selectNotification,
  notify,
} from "../../../listingslab-shared";

import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import { Icon } from "../theme";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const notification = useAppSelector(selectNotification);
  const dispatch = useAppDispatch();
  let open = true;
  if (!notification) return null;

  const { code, message, severity } = notification;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    console.warn("dispatch close notification");
    dispatch(notify(null));
  };

  return (
    <Snackbar
      open
      sx={{ zIndex: 12345678 }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {code} {message}
      </Alert>
    </Snackbar>
  );
}
