// @ts-ignore
import { gsap, Power1 } from "gsap";
import { getElement } from "./";

const duration = 1.66;

export const fadeOut = (divId: string) => {
  try {
    const el = getElement(divId);
    if (!el) {
      console.warn("fadeIn fail;", divId);
      return false;
    }
    gsap.to(`#${divId}`, {
      opacity: 0,
      ease: Power1.easeOut,
      duration,
      onComplete: () => {
        return true;
      },
    });
  } catch (error) {
    return false;
  }
};
