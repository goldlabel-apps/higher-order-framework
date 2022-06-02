import {getPartOne} from "./parts";

export const startAPI = async (req): Promise<any> => {
  const pathname = req.params[0];
  const partOne = await getPartOne(req);
  const res = {
    partOne,
    pathname,
  };

  return JSON.stringify(res, null, 2);
};
