import {getFirestore} from "firebase-admin/firestore";

export const getSiteinfo = async (hostname: string) => {
  const db = getFirestore();
  const siteinfoRef = db.collection("siteinfo");
  const snap = await siteinfoRef.where("hostname", "==", hostname).get();
  // const snap = await siteinfoRef.where("hostname", "==", "listingslab.com").get();

  const siteinfo = [];
  snap.forEach((doc) => {
    siteinfo.push({
      // @ts-ignore
      id: doc.id, data: doc.data(),
    });
  });
  return siteinfo;
};
