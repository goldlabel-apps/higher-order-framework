import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
  useAppSelector,
  selectContent,
} from "../listingslab-shared"

export default function MainContent() {
  const content = useAppSelector(selectContent)

  React.useEffect(() => {
    console.warn("Home useEffect")
  }, [content])

  return (
    <React.Fragment>
      <Box>
        Home
      </Box>
    </React.Fragment>
  )
}
