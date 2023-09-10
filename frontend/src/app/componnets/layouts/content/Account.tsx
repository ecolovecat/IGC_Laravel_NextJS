import React from "react";

const Account = ({ username, avatar, descript }: any) => {
  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={avatar}
          alt={`${username}'s avatar`}
        />
        <div>
          <div className="font-semibold text-[16px]">{username}</div>
          <div className="text-gray-500 text-[12px]">{descript}</div>
        </div>
      </div>
      <button className="text-blue-500 font-semibold">Follow</button>
    </div>
  );
};

export default Account;
