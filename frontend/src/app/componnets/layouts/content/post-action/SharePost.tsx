import React from "react";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
interface SharePostProps {}

const SharePost: React.FC<SharePostProps> = ({}) => {
  return (
    <div className="cursor-pointer">
      <ReplyRoundedIcon style={{ fontSize: 32 }} />
    </div>
  );
};

export default SharePost;
