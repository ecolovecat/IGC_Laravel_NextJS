import React from "react";
import Logo from "../../assets/images/Logo-Instagram.png";
import AvataImg from "../../assets/images/avata.png";
import Image from "next/image"; // Import the next/image component
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SideBarItem from "./sidebar/SideBarItem";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <div className="w-133 px-[12px]  fixed py-[8px] h-screen grow flex-col border border-gray-300 bg-white min-w-0">
      <div className="logo px-[12px] h-1/6 flex items-center max-h-[92px] min-h-[92px] justify-start">
        <Image src={Logo} alt="logo" width={103} height={29} />
      </div>
      <div className="item h-4/6">
        <SideBarItem
          icon={<HomeOutlinedIcon style={{ fontSize: 27 }} />}
          text="Home"
        />
        <SideBarItem
          icon={<SearchIcon style={{ fontSize: 27 }} />}
          text="Search"
        />
        <SideBarItem
          icon={<ExploreOutlinedIcon style={{ fontSize: 27 }} />}
          text="Explore"
        />
        <SideBarItem
          icon={<VideoLibraryOutlinedIcon style={{ fontSize: 27 }} />}
          text="Reels"
        />
        <SideBarItem
          icon={<SmsOutlinedIcon style={{ fontSize: 27 }} />}
          text="Messages"
        />
        <SideBarItem
          icon={<FavoriteBorderOutlinedIcon style={{ fontSize: 27 }} />}
          text="Notifications"
        />
        <SideBarItem
          icon={<AddBoxOutlinedIcon style={{ fontSize: 27 }} />}
          text="Create"
        />
        <SideBarItem
          icon={
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src={AvataImg}
                alt="logo"
                width={103}
                height={29}
                layout="responsive"
              />
            </div>
          }
          text="Create"
        />
      </div>
      <div className="more h-1/6 flex-1 flex-col relative">
        <div className="absolute bottom-0 right-0 left-0">
          <SideBarItem
            icon={<MenuOutlinedIcon style={{ fontSize: 27 }} />}
            text="Learn more"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
