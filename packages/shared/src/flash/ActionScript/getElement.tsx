export const getElement = (divId) => {
  try {
    const el = document.getElementById(divId);
    if (!el) return false;

    let mode = "square";
    let isMobile = false;
    if (el.offsetWidth < 650) isMobile = true;
    if (el.offsetHeight < el.offsetWidth) mode = "landscape";
    if (el.offsetHeight > el.offsetWidth) mode = "portrait";

    return {
      id: `#${divId}`,
      height: el.offsetHeight,
      width: el.offsetWidth,
      mode,
      isMobile,
    };
  } catch (error) {
    return false;
  }
};
