import serviceAccount from "./serviceAccount.json";
import * as functions from "firebase-functions";
import {initializeApp, cert} from "firebase-admin/app";

import {render} from "./ssr";
import {startAPI} from "./api";

initializeApp({
  // @ts-ignore
  credential: cert(serviceAccount),
});

export const SSR = functions.https.onRequest( async (request, response) => {
  const html = await render(request);
  response.send(html);
});

export const API = functions.https.onRequest( async (request, response) => {
  const json = await startAPI(request);
  response.send(json);
});
