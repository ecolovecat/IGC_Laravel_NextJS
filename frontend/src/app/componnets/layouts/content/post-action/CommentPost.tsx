import React from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
interface CommentPostProps {}

const CommentPost: React.FC<CommentPostProps> = ({}) => {
  return (
    <div className="cursor-pointer">
      <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 28 }} />
    </div>
  );
};

export default CommentPost;
