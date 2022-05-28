// @ts-ignore
import * as shared from "@listingslab/shared";
import { layout, setPosition, fadeIn, remove } from "./";

export const initFlash = (clips) => {
  remove("ssr");
  for (let i = 0; i < clips.length; i++) {
    const { id, position, offset } = clips[i];
    // setPosition(id, position, offset);
    // fadeIn(id);
  }
  // layout(clips);
  return true;
};

export const onWindowResize = (clips) => {
  try {
    // layout(clips);
    console.warn("onWindowResize", Date.now());
    return true;
  } catch (error) {
    return false;
  }
};
