import * as React from "react"
import { useTheme, useMediaQuery, Box } from "@mui/material"
import {
  useAppDispatch,
  useAppSelector,
  MiniButton,
  MaxiButton,
  routeTo,
  setCore,
  selectPersona,
  unsignIn,
} from "../listingslab-shared"

export default function Navigator() {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const persona = useAppSelector(selectPersona)
  let isSignedIn = false
  let isReady = true
  // if (persona.data.user.firstCheck) isReady = true
  if (persona.data.user.uid) isSignedIn = true
  let mode = "mini"
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  if (!isMobile) mode = "maxi"
  if (mode === "hidden") return null

  const homeBtnData = {
    icon: "home",
    label: "Home",
    tooltip: "Home",
    variant: "text",
    onClick: () => {
      dispatch(routeTo({ pathname: `/` }))
    },
  }

  const signinBtnData = {
    icon: "arrowr",
    label: "Sign in",
    tooltip: "Sign in",
    variant: "text",
    onClick: () => {
      dispatch(setCore({ key: `dialogSigninOpen`, value: true }))
    },
  }

  const signoutBtnData = {
    icon: "exit",
    label: "Sign out",
    tooltip: "Sign out",
    variant: "text",
    onClick: () => {
      dispatch(unsignIn())
    },
  }

  const menuItems = [
    {
      icon: "work",
      label: "Work",
      tooltip: "Work",
      color: "primary",
      onClick: () => {
        dispatch(routeTo({ pathname: `/work` }))
      },
    },
    {
      icon: "life",
      label: "Life",
      tooltip: "Life",
      color: "primary",
      onClick: () => {
        dispatch(routeTo({ pathname: `/life` }))
      },
    },
    {
      icon: "balance",
      label: "Balance",
      tooltip: "Balance",
      color: "primary",
      onClick: () => {
        dispatch(routeTo({ pathname: `/balance` }))
      },
    },
  ]

  return (
    <Box sx={{ m: 1, display: "flex" }}>

      { isMobile ? <MiniButton data={homeBtnData} /> : <MaxiButton data={homeBtnData} /> }

      
      {menuItems.map((item, i) => {
        if (isMobile) return <MiniButton key={`menuItem_${i}`} data={item} />
        return <MaxiButton key={`menuItem_${i}`} data={item} />
      })}

      <Box sx={{ flexGrow: 1 }} />

      {isReady ? (<React.Fragment>
        { isMobile ? <MiniButton data={isSignedIn ? signoutBtnData : signinBtnData} /> 
          : <MaxiButton data={isSignedIn ? signoutBtnData : signinBtnData} /> }
        
        </React.Fragment>) : null}
    </Box>
  )
}