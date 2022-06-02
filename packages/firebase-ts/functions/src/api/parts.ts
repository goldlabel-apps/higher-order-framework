export const getPartOne = async (req): Promise<any> => {
  const pathname = req.params[0];
  return {
    title: "getPartOne",
    pathname,
  };
};
