import React from "react";
import Image from "next/image";
import AvataImg from "../../../assets/images/avata.png";
interface UserStoryprops {}

const UserStory: React.FC<UserStoryprops> = ({}) => {
  return (
    <div className="w-16 h-16">
      <Image
        src={AvataImg}
        alt="logo"
        width={103}
        height={29}
        layout="responsive"
        className="overflow-hidden rounded-full bg-red-500"
      />
      <div className="flex justify-center conten-center">Name</div>
    </div>
  );
};

export default UserStory;
