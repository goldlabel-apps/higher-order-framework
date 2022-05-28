import * as React from "react";
import {
  useTheme,
  Box,
  // CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import {
  useAppSelector,
  selectContent,
  FeaturedImage,
} from "../listingslab-shared";

export default function MainContent() {
  const content = useAppSelector(selectContent);
  const theme = useTheme();
  const currentContent = content.data.list[0];
  const { title, excerpt, body, image } = currentContent;
  const showImage = true;
  const showBody = false;

  React.useEffect(() => {
    // console.warn("effect for MainContent");
  }, [content]);

  return (
    <React.Fragment>
      <Box>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ fontWeight: "lighter" }}>
              {title}
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{}}>
              {excerpt}
            </Typography>
          }
        />

        {image && showImage ? (
          <FeaturedImage data={{ src: image, alt: excerpt }} />
        ) : null}
        {showBody ? (
          <Typography variant="body2" sx={{ mt: 3 }}>
            {body}
          </Typography>
        ) : null}
      </Box>
    </React.Fragment>
  );
}

/* 
<CardContent></CardContent>
 
<pre>{JSON.stringify(mainContent, null, 2)}</pre>

<pre>
  {JSON.stringify(mainContent, null, 2)}
</pre>

<Grid container>
  <Grid xs={12} sm={4} item>
    <MetaButton data={mainContent.data.list[1]} />
  </Grid>
  <Grid xs={12} sm={4} item>
    <MetaButton data={mainContent.data.list[2]} />
  </Grid>
  <Grid xs={12} sm={4} item>
    <MetaButton data={mainContent.data.list[3]} />
  </Grid>
</Grid>

*/
