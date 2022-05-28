import * as React from "react";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

export default function Loading(props: any) {
  return (
    <Backdrop
      open
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mb: 2,
            textAlign: "center",
            display: "block",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
        <Box>
          <Typography>Nothing to see here</Typography>
        </Box>
      </Box>
    </Backdrop>
  );
}
