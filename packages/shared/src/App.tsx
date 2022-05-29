import React from "react";
import { Box, Grid, CardMedia } from "@mui/material";
import {
  DialogSignin,
  Social,
  Navigator,
  Blocked,
  selectPersona,
  useAppSelector,
} from "./listingslab-shared";

export default function App() {
  const id = "app";

  return (
    <Box id={id}>
      <Blocked />
      <DialogSignin />
      <Box sx={{ width: "98vw" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Navigator />
          </Grid>

          <Grid sm={8} xs={12} item>
            <Box sx={{ ml: 1, mt: 4 }}>
              <CardMedia
                alt="listingslab"
                component="img"
                height="216"
                image="https://listingslab.com/svg/featured/team.svg"
              />
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
