"use client";

import Image from "next/image";
import AvataImg from "../assets/images/avata.png";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Grid4x4OutlinedIcon from "@mui/icons-material/Grid4x4Outlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { useState } from "react";

const UserProfile = ({ params }: { params: { username: string } }) => {
  let bio =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis, ipsam libero facilis dolorem molestiae officiis natus hic deleniti, nobis dolores ipsum itaque odit. Fugiat ipsa possimus sint reprehenderit enim.";
  let [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className="mx-auto pt-[30px] px-[20px] w-7/12 h-full">
      <div className="profile-header flex flex-row space-x-24">
        <div className="profile-avata">
          <div
            style={{
              minWidth: "150px",
              minHeight: "150px",
              maxWidth: "150px",
              maxHeight: "150px",
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
        </div>
        <div className="profile-header--right flex-col space-y-8">
          <div className="profile-header-right1 flex items-center  space-x-6">
            <div className="username text-[18px]">{params.username}</div>
            <div className="profile-action flex space-x-2 items-center">
              <div className="follow-button rounded-lg cursor-pointer px-4 hover:bg-blue-500 py-1 bg-blue-400 text-white">
                Follow
              </div>
              <div className="add-button cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg p-1">
                <PersonAddOutlinedIcon />
              </div>
            </div>
            <div className="profile-more cursor-pointer">
              <MoreHorizRoundedIcon />
            </div>
          </div>
          <div className="profile-header-right2 flex items-center flex-nowrap space-x-6">
            <div className="profile-num-posts">
              <span className="bold">8 </span>
              posts
            </div>
            <div className="profile-num-followers">
              <span className="bold">95 </span>followers
            </div>
            <div className="profile-num-following">
              <span className="bold">56 </span>
              following
            </div>
          </div>
          <div className="profile-header-right3">
            {bio.length > 10 && !showFullBio ? (
              <>
                <div className="w-80 text-ellipsis overflow-hidden whitespace-nowrap">
                  {bio}
                </div>{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={toggleBio}
                >
                  (more)
                </span>
              </>
            ) : (
              <>
                {bio}{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={toggleBio}
                >
                  (less)
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="profile-story flex space-x-16 mt-12 w-full">
        <div className="highlight flex-col  justify-center items-center">
          <div
            style={{
              maxWidth: "90px",
              maxHeight: "90px",
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
          <div className="mt-2 text-center">Name</div>
        </div>
        <div className="highlight flex-col justify-center items-center">
          <div
            style={{
              maxWidth: "90px",
              maxHeight: "90px",
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
          <div className="mt-2 text-center">Name</div>
        </div>
      </div>
      <div className="border-t mt-12 "></div>
      <div className="profile-post-option flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center space-x-1 p-4 border-t border-black">
          <Grid4x4OutlinedIcon style={{ fontSize: 20 }} />
          <div className="post-option bold text-[13px]">POSTS</div>
        </div>
        <div className="flex items-center justify-center space-x-1 p-4 ">
          <AlternateEmailOutlinedIcon style={{ fontSize: 20 }} />
          <div className="post-option bold text-[13px]">TAGGED</div>
        </div>
      </div>
      <div className="profile-post flex flex-wrap gap-2">
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
        <Image
          src={AvataImg}
          alt="logo"
          style={{
            maxWidth: "30%",
            minWidth: "30%",
            overflow: "hidden",
          }}
          width={103}
          height={29}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default UserProfile;
