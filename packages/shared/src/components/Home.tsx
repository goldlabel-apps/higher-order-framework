import * as React from "react";
import { Box } from "@mui/material";
import { useAppSelector, selectContent } from "../listingslab-shared";

export default function Home() {
  const content = useAppSelector(selectContent);

  React.useEffect(() => {
    // console.warn("Home useEffect")
  }, [content]);

  return (
    <React.Fragment>
      <Box>
      </Box>
    </React.Fragment>
  );
}


/*
<pre>{JSON.stringify(content, null, 2)}</pre>
*/