import * as React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectSocial, navigateTo, routeTo } from "../features/system";
import {
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { 
  Icon,
  Map,
} from "../listingslab-shared";

export default function Social(props) {
  const title = "Find us";
  const { defaultExpanded } = props;
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const social = useAppSelector(selectSocial);
  return (
    <Accordion sx={{ boxShadow: "none" }} defaultExpanded={defaultExpanded}>
      <AccordionSummary id="socialAccordion" expandIcon={<Icon icon="acc" />}>
        <Typography variant="body1" sx={{}}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0, background: "white" }}>

        <Map />

        <List dense>
          {social.length ? (
            <React.Fragment>
              {social.map((item, i) => {
                const { label, icon, url } = item;
                return (
                  <React.Fragment key={`social_${i}`}>
                    <ListItem
                      button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                          navigateTo({ pathname: url, target: "_blank" })
                        );
                      }}
                    >
                      <ListItemIcon>
                        <Tooltip title={label}>
                          <IconButton sx={{ mr: 1 }} color="primary">
                            <Icon icon={icon} />
                          </IconButton>
                        </Tooltip>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography sx={{ color: "#333" }}>
                            {label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          ) : null}
        </List>
        
      </AccordionDetails>
    </Accordion>
  );
}
