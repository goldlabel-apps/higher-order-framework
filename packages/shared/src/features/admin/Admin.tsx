import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { 
  Icon,
  CMS,
  setAdmin,
  useAppSelector,
  useAppDispatch,
} from "../../listingslab-shared";

export default function Admin(props) {
  const title = "Admin";
  const { defaultExpanded } = props;
  const dispatch = useAppDispatch()

  const onCmsClick = () => {
    dispatch(setAdmin({ key:"cmsIsOpen", value: true }))
  }

  return (
    <Accordion sx={{ boxShadow: "none" }} defaultExpanded={defaultExpanded}>
      <AccordionSummary id="socialAccordion" expandIcon={<Icon icon="acc" />}>
        <Typography variant="body1" sx={{}}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0, background: "white" }}>
        <CardContent>
          <CMS />
          <List dense>
            <ListItem button onClick={ onCmsClick }>
              <ListItemIcon>
                <Icon icon="doc" />
              </ListItemIcon>
              <ListItemText 
                primary="CMS"
                secondary="Content Management System" />
            </ListItem>
          </List>
        </CardContent>
      </AccordionDetails>
    </Accordion>
  );
}
