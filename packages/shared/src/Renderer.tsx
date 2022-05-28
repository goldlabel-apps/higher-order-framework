import * as React from "react";
// import { getAuth } from "firebase/auth";
import {
  useAppDispatch,
  useAppSelector,
  selectPersona,
} from "./listingslab-shared";

export default function Renderer() {
  const dispatch = useAppDispatch();
  const persona = useAppSelector(selectPersona);

  React.useEffect(() => {
    const { ready } = persona.data;
    // console.warn("ready", ready);

    // const { loaded, loading } = fingerprint;
    // if (!started && !loading && !loaded) {
    //   dispatch(getFingerprint());
    //   dispatch(getLocation());
    //   dispatch(getDevice());
    // }
  }, [persona, dispatch]);

  return null;
}
