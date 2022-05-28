import * as React from "react";
import { Button } from "@mui/material";
import { Icon } from "../../../theme";

export default function InputSubmit(props: any) {
  const { label, disabled, onSubmit } = props;

  return (
    <Button
      fullWidth
      variant="text"
      disabled={disabled}
      sx={{ m: 0 }}
      color="primary"
      onClick={onSubmit}
    >
      {label || "Submit"}
    </Button>
  );
}
