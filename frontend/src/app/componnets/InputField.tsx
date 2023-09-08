import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  type?: string;
  className?: string;
  placeholder?: string;
  errors?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  className,
  errors,
}) => {
  return (
    <>
      <TextField
        type={type}
        label={placeholder}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <p className="text-red-500">{errors}</p>
    </>
  );
};

export default InputField;
