import * as functions from "firebase-functions";

export const startAPI = async (request): Promise<any> => {
  const pathname = request.params[0];
  functions.logger.info("startAPI", pathname);
  return JSON.stringify(pathname, null, 2);
};
