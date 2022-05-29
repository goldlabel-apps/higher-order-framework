import * as React from "react";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { useAppSelector, selectCore } from "../listingslab-shared";

export default function Blocked() {
  const core = useAppSelector(selectCore);
  const { blocked } = core.data;
  // console.warn('core.data', core.data)
  if (!blocked) return null;

  return (
    <Backdrop
      open
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10000 }}
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
