import * as React from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
  MiniButton,
  MaxiButton,
  routeTo,
  setCore,
  selectCore,
  selectPersona,
  unsignIn,
} from "../listingslab-shared";

export default function Navigator() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const persona = useAppSelector(selectPersona);

  const core = useAppSelector(selectCore);
  // console.warn("authReady", core.data.authReady)

  let isSignedIn = false;
  let isReady = false;
  if (core.data.authReady) isReady = true;
  if (persona.data.user.uid) isSignedIn = true;
  let mode = "mini";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!isMobile) mode = "maxi";
  if (mode === "hidden") return null;

  // TODO move all these vars into redux
  const homeBtnData = {
    icon: "home",
    label: "Home",
    tooltip: "Home",
    variant: "text",
    onClick: () => {
      dispatch(routeTo({ pathname: `/` }));
    },
  };

  const signinBtnData = {
    icon: "arrowr",
    label: "Sign in",
    tooltip: "Sign in",
    variant: "text",
    onClick: () => {
      dispatch(setCore({ key: `dialogSigninOpen`, value: true }));
    },
  };

  const signoutBtnData = {
    icon: "exit",
    label: "Sign out",
    tooltip: "Sign out",
    variant: "text",
    onClick: () => {
      dispatch(unsignIn());
    },
  };

  const menuItems = [
    {
      icon: "work",
      label: "Work",
      tooltip: "Work",
      color: "primary",
      onClick: () => {
        dispatch(routeTo({ pathname: `/work` }));
      },
    },
    {
      icon: "life",
      label: "Life",
      tooltip: "Life",
      color: "primary",
      onClick: () => {
        dispatch(routeTo({ pathname: `/life` }));
      },
    },
    {
      icon: "balance",
      label: "Balance",
      tooltip: "Balance",
      color: "primary",
      onClick: () => {
        dispatch(routeTo({ pathname: `/balance` }));
      },
    },
  ];

  return (
    <Box sx={{ m: 1, display: "flex" }}>
      <Box sx={{ flexGrow: 1 }} />
      <MiniButton data={homeBtnData} />
      {menuItems.map((item, i) => {
        return <MiniButton key={`menuItem_${i}`} data={item} />;
      })}
      {isReady ? <MiniButton data={isSignedIn ? signoutBtnData : signinBtnData} /> : null}
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
}
