import {getFirestore} from "firebase-admin/firestore";

export const getLinks = async () => {
  const db = getFirestore();
  const ref = db.collection("links");
  const snap = await ref.orderBy("order").get();
  const result = [];
  snap.forEach((doc) => {
    result.push({
      // @ts-ignore
      id: doc.id, data: doc.data(),
    });
  });
  return result;
};
