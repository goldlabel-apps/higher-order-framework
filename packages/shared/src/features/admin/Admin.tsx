import * as React from "react";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import { selectSocial, navigateTo, routeTo } from "../features/system";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { 
  Icon,
} from "../../listingslab-shared";

export default function Admin(props) {
  const title = "Admin";
  const { defaultExpanded } = props;

  return (
    <Accordion sx={{ boxShadow: "none" }} defaultExpanded={defaultExpanded}>
      <AccordionSummary id="socialAccordion" expandIcon={<Icon icon="acc" />}>
        <Typography variant="body1" sx={{}}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0, background: "white" }}>


        Admin
        
      </AccordionDetails>
    </Accordion>
  );
}
