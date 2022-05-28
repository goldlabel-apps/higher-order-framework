import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  // useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import { Icon, selectPersona } from "../../listingslab-shared";

export default function Persona(props) {
  const title = "Persona";
  const { defaultExpanded } = props;
  const persona = useAppSelector(selectPersona);
  const theme = useTheme();
  const { databus, user, fingerprint } = persona.data;
  const { uid } = user;

  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<Icon icon="acc" />}
        aria-controls="fingerprintAcc"
        id="fingerprintAcc"
      >
        <Typography variant="body1" sx={{}}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        {user.firstCheck ? (
          <Typography variant="body1" sx={{}}>
            {!uid ? (
              <Box>
                <Typography variant="body1" sx={{}}>
                  Not logged in.
                </Typography>
              </Box>
            ) : null}
          </Typography>
        ) : null}

        <pre>user {JSON.stringify(user, null, 2)}</pre>
      </AccordionDetails>
    </Accordion>
  );
}

/*
<Typography variant="body1" sx={{ color: textColor }}>
  Not logged in
</Typography>

const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
*/
