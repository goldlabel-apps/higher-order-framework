// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Box } from "@mui/material";
import React from "react";
import { Sky, getSizes } from "./";

export default function Stage() {
  // const { useAppSelector, selectAppState } = shared;
  // const appState = useAppSelector(selectAppState);
  // const ticking = useAppSelector(selectTicking);
  // console.warn("ticking", ticking);
  // const { flash } = appState;

  const stage = getSizes("flashStage");
  if (!stage) return null;
  const { stageW, stageH } = stage;

  return <React.Fragment></React.Fragment>;
}
