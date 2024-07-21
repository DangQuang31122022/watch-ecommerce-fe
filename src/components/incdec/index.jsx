import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { clamp } from "./clamp";
import { Colors } from "../../styles/theme";

export default function IncDec({ onValueChange }) {
  const clampV = clamp(1, 10);
  const [value, setValue] = useState(1);

  return (
    <Box display="flex">
      <IconButton
        sx={{
          borderRadius: 0,
          background: `${Colors.secondary}`,
        }}
        onClick={() => {
          const newValue = clampV(value - 1);
          setValue(clampV(value - 1));
          onValueChange(newValue);
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          border: `1px solid ${Colors.secondary}`,
          p: 2,
        }}
      >
        {value}
      </Typography>
      <IconButton
        sx={{
          borderRadius: 0,
          background: `${Colors.secondary}`,
        }}
        onClick={() => {
          const newValue = clampV(value + 1);
          setValue(clampV(value + 1));
          onValueChange(newValue);
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
