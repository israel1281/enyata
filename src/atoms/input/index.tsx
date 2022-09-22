import React from "react";
import TextField from "@mui/material/TextField";

interface IInput {
  label?: string | any;
  type?: string | any;
  error?: boolean | any;
  helperText?: string | any;
  value?: string | any;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): any | void;
  name?: string | any;
}

export default function Input({
  label,
  type,
  error,
  helperText,
  value,
  onChange,
  name,
}: IInput) {
  return (
    <TextField
      error={error}
      required
      className="w-full"
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={onChange}
      size="small"
      helperText={helperText}
      name={name}
    />
  );
}
