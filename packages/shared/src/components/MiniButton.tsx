import * as React from "react";
// import { useAppSelector } from "../app/hooks";
import { IconButton, Box, Tooltip, Badge } from "@mui/material";
import { Icon } from "../theme";

export default function MiniButton(props: any) {
  const { data } = props;
  const { icon, label, tooltip } = data;

  let onClick = (e) => {
    e.preventDefault();
    console.warn("MaxiButton onClick");
  };
  if (data.onClick) onClick = data.onClick;

  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={onClick} color="primary">
        <Icon icon={icon} />
      </IconButton>
    </Tooltip>
  );
}
