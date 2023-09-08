import React from "react";
import Button from "@mui/material/Button";

interface PrimaryButtonProps {
  text: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  type,
  onClick,
}) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      type={type}
      fullWidth
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
