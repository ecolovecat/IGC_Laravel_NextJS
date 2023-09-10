import React from "react";

interface SideBarItemProps {
  icon: any;
  text: any;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ icon, text }) => {
  return (
    <div className="item-icon px-[12px] flex space-x-4 py-[12px] my-[4px] cursor-pointer active:text-opacity active:bg-opacity-50 hover:bg-[#f2f2f2] rounded-lg">
      {icon}
      <div className="flex items-center justify-center ">{text}</div>
    </div>
  );
};

export default SideBarItem;
