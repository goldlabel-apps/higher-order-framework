import React from "react";
import { Box, Grid } from "@mui/material";
import {
  DialogSignin,
  Social,
  Post,
  Navigator,
  Home,
} from "./listingslab-shared";

export default function App() {
  const id = "app";
  return (
    <Box id={id}>
      <DialogSignin />
      <Box sx={{ width: "98vw" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Navigator />
          </Grid>
          <Grid sm={8} xs={12} item>
            <Box sx={{ ml: 1 }}>
              <Home />
            </Box>
          </Grid>
          <Grid sm={4} xs={12} item>
            <Box sx={{ ml: 1 }}>
              <Social defaultExpanded={true} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
/*
<Persona defaultExpanded={true} />

*/
