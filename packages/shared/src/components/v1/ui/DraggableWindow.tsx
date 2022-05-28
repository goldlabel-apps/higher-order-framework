import * as React from "react";
import * as shared from "../../../listingslab-shared";
import Draggable from "react-draggable";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";
import { PaperProps } from "@mui/material/Paper";

export default function DraggableWindow(props: any) {
  let winTitle, winKey, winIcon, winActions;
  const { reduxKey, title, icon, children, actions } = props;

  if (reduxKey) winKey = reduxKey;
  if (title) winTitle = title;
  if (icon) winIcon = icon;
  if (actions) winActions = actions;

  const {
    Icon,
    useAppSelector,
    useAppDispatch,
    selectAppState,
    togglePersona,
    selectIsMobile,
  } = shared;

  const dispatch = useAppDispatch();
  const appState = useAppSelector(selectAppState);
  const isMobile = useAppSelector(selectIsMobile);
  const win = appState[winKey];
  let { open, fullScreen } = win;

  if (isMobile) fullScreen = true;

  const handleClose = () => {
    dispatch(togglePersona(false));
  };

  function WinTitleComponent(props: PaperProps) {
    if (fullScreen) return <Paper {...props} />;
    return (
      <Draggable
        handle="#draggable-window-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      PaperComponent={WinTitleComponent}
      aria-labelledby="draggable-window-title"
    >
      {fullScreen ? (
        <DialogTitle id="window-title">
          <Box sx={{ display: "flex" }}>
            <Box sx={{ m: 1 }}>
              <Icon icon={winIcon} />
            </Box>
            <Box sx={{ m: 0.5 }}>
              <Typography variant="h6">{winTitle}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
        </DialogTitle>
      ) : (
        <DialogTitle style={{ cursor: "move" }} id="draggable-window-title">
          <Box sx={{ display: "flex" }}>
            <Box sx={{ m: 1 }}>
              <Icon icon={winIcon} />
            </Box>
            <Box sx={{ m: 0.5 }}>
              <Typography variant="h6">{winTitle}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
        </DialogTitle>
      )}

      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mb: 2 }}>{winActions}</Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ mr: 2 }}>
            <Tooltip title={`Close ${winTitle}`}>
              <IconButton onClick={handleClose}>
                <Icon icon="close" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
