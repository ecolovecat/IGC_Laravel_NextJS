import React from "react";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
interface SavePostProps {}

const SavePost: React.FC<SavePostProps> = ({}) => {
  return (
    <div className="cursor-pointer">
      <TurnedInNotOutlinedIcon style={{ fontSize: 32 }} />
    </div>
  );
};

export default SavePost;
