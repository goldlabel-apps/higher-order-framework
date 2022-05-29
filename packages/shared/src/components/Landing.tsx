import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector, selectContent } from "../listingslab-shared";

export default function Landing() {
  const content = useAppSelector(selectContent);

  React.useEffect(() => {
    // console.warn("Landing useEffect")
  }, [content]);

  return (
    <React.Fragment>
      <Box>
        <Typography>
          Landing
          </Typography>
      </Box>
    </React.Fragment>
  );
}

/*
<pre>{JSON.stringify(content, null, 2)}</pre>
*/
