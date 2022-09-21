import React from "react";
import TextField from "@mui/material/TextField";

interface IInput {
  label: string | any;
  type: string | any;
}

export default function Input({ label, type }: IInput) {
  return (
    <TextField
      className="w-full"
      id="outlined-basic"
      label={label}
      type={type}
      variant="outlined"
      size="small"
    />
  );
}
