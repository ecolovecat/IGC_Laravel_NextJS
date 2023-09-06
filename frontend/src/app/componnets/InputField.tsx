import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  type?: string;
  className?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => {
  return (
    <TextField
      type={type}
      label={placeholder}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default InputField;
