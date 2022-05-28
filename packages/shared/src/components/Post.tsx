import * as React from "react";
import { getById, useAppSelector } from "../listingslab-shared";
import {
  selectLayout,
  selectPosts,
  selectCurrentPostId,
} from "../features/system";
import { Box } from "@mui/material";

export interface PostShape {
  id: string;
  title: string;
}

export default function Post() {
  const id = "postClip";
  const layout = useAppSelector(selectLayout);
  const currentPostId = useAppSelector(selectCurrentPostId);
  const posts = useAppSelector(selectPosts);
  const post = getById(currentPostId, posts);
  if (!layout) return null;
  const { colWidth } = layout;

  return (
    <Box
      id={id}
      sx={{ width: colWidth, opacity: 0, zIndex: 300, position: "absolute" }}
    >
      Post
    </Box>
  );
}
