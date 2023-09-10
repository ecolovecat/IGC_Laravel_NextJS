import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
interface LikePostProps {}

const LikePost: React.FC<LikePostProps> = ({}) => {
  return (
    <div className="cursor-pointer">
      <FavoriteBorderRoundedIcon style={{ fontSize: 32 }} />
    </div>
  );
};

export default LikePost;
