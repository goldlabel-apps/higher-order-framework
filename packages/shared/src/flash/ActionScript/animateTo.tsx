// @ts-ignore
import { gsap, Bounce } from "gsap";
import { getElement, getSizes } from "./";

const duration = 0.66;

export const animateTo = (divId, position, offset) => {
  try {
    const el = getElement(divId);
    if (!el) {
      console.error("No element named ", divId);
      return false;
    }
    const sizes = getSizes(divId);
    // @ts-ignore
    const { stageW, stageH, elW, elH } = sizes;
    let pos;
    if (position === `topleft`)
      pos = {
        x: 0,
        y: 0,
      };
    if (position === `topmiddle`)
      pos = {
        x: stageW / 2 - elW / 2,
        y: 0,
      };
    if (position === `topright`)
      pos = {
        x: stageW - elW,
        y: 0,
      };
    if (position === `centered`)
      pos = {
        x: stageW / 2 - elW / 2,
        y: stageH / 2 - elH / 2,
      };
    if (position === `bottomleft`)
      pos = {
        x: 0,
        y: stageH - elH,
      };
    if (position === `bottommiddle`)
      pos = {
        x: stageW / 2 - elW / 2,
        y: stageH - elH,
      };
    if (position === `bottomright`)
      pos = {
        x: stageW - elW,
        y: stageH - elH,
      };
    const { x, y } = pos;
    gsap.to(`#${divId}`, {
      x: x + offset.left,
      y: y + offset.top,
      duration,
      // ease: Bounce.easeOut,
      onComplete: () => {
        // console.warn(`animate ${divId} to ${position} complete`);
      },
    });
  } catch (error) {
    return false;
  }
};
