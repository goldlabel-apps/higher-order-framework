import * as React from "react";
import { CardMedia } from "@mui/material";

export default function FeaturedImage(props: any) {
  const { data } = props;
  const { src, alt } = data;
  return <CardMedia component="img" image={src} alt={alt} />;
}
