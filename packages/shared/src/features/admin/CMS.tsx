import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectAdmin, setAdmin, Icon } from "../../listingslab-shared";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  DialogTitle,
  Grid,
  Box,
  IconButton,
} from "@mui/material";

export default function CMS() {
  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);
  const { cmsIsOpen } = admin.data;

  const cmsClose = () => {
    dispatch(setAdmin({ key: "cmsIsOpen", value: false }));
  };

  return (
    <Dialog open={cmsIsOpen} fullScreen onClose={cmsClose}>
      <DialogTitle>
        <Grid container>
          <Grid item>
            <Box sx={{ mt: 1, mr: 2 }}>
              <Icon icon="cms" />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ mt: 1.25 }}>
              Content Management System
            </Typography>
          </Grid>
          <Grid item sx={{ flexGrow: 1 }} />
          <Grid item>
            <IconButton onClick={cmsClose}>
              <Icon icon="close" />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent>list the items in the content collection</DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={cmsClose}>
          Finished
        </Button>
      </DialogActions>
    </Dialog>
  );
}
