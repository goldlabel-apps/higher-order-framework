import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { 
  selectAdmin,
  setAdmin,
  Icon,
} from "../../listingslab-shared";
import {
  Dialog,
  Typography,
  DialogTitle,
  Grid,
  Box,
  IconButton,
} from "@mui/material";


export default function CMS() {
  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)
  const { cmsIsOpen } = admin.data

  const onCmsClose = () => {
    dispatch(setAdmin({ key:"cmsIsOpen", value: false }))
  }

  return (
    <Dialog 
      open={cmsIsOpen} 
      fullScreen
      onClose={ onCmsClose }  
    >


      <DialogTitle>
        <Grid container>
          <Grid item>
            <Box sx={{ mt: 1, mr: 2 }}>
              <Icon icon="docs" />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ mt: 1.25 }}>
              Content Management System
            </Typography>
          </Grid>
          <Grid item sx={{ flexGrow: 1 }} />
          <Grid item>
            <IconButton onClick={ onCmsClose }>
              <Icon icon="close" />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>

    </Dialog>
  );
}
