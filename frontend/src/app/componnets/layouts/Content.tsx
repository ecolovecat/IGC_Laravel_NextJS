import Image from "next/image";
import React from "react";
import AvataImg from "../../assets/images/avata.png";
import PostImg from "../../assets/images/post.jpg";
import UserStory from "./content/UserStory";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import LikePost from "./content/post-action/LikePost";
import CommentPost from "./content/post-action/CommentPost";
import SharePost from "./content/post-action/SharePost";
import SavePost from "./content/post-action/SavePost";
import Account from "./content/Account";

interface ContentProps {}

const Content: React.FC<ContentProps> = ({}) => {
  const accounts = [
    {
      username: "duonwgfinn",
      avatar:
        "https://antimatter.vn/wp-content/uploads/2023/01/hinh-anh-avatar-dep-cute-ngau-601x600.jpg",
    },
    {
      username: "lowg",
      avatar:
        "https://i.pinimg.com/originals/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg",
    },
    // Add more suggested accounts as needed
  ];

  return (
    <div className="flex space-x-12 h-full w-8/12">
      <div className="social max-w-[630px] w-5/6">
        <div className="story w-full min-h-[16px] flex space-x-4">
          <UserStory />
          <UserStory />
          <UserStory />
          <UserStory />
          <UserStory />
          <UserStory />
          <UserStory />
        </div>
        <div className="post min-h-[16px] ml-[36px] my-24">
          <div className="user-post pb-[36px]">
            <div className="post-header pl-1 flex justify-between items-center">
              <div className="post-header--left flex space-x-4 items-center">
                <div className="user-avata w-12 h-12">
                  <Image
                    src={AvataImg}
                    alt="logo"
                    width={16}
                    height={16}
                    layout="responsive"
                    className="overflow-hidden cursor-pointer rounded-full bg-red-500"
                  />
                </div>
                <div className="user-name cursor-pointer font-bold text-[14px]">
                  User Name
                </div>
                <div className="posted-time text-gray-500 cursor-pointer text-[14px] text-opacity-50">
                  1d
                </div>
              </div>
              <div className="post-header--right cursor-pointer">
                <MoreHorizOutlinedIcon />
              </div>
            </div>
            <div className="post-media py-[12px]">
              <div className="user-post w-full h-full border border-black-500">
                <Image
                  src={PostImg}
                  alt="logo"
                  width={16}
                  height={16}
                  layout="responsive"
                  className="overflow-hidden cursor-pointer"
                />
              </div>
            </div>
            <div className="post-action flex justify-between">
              <div className="post-action--left flex items-center space-x-2">
                <LikePost />
                <CommentPost />
                <SharePost />
              </div>
              <div className="post-action--right">
                <SavePost />
              </div>
            </div>
            <div className="post-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              blanditiis ea error ullam, illum eligendi natus itaque mollitia ut
              nostrum quos quia doloremque, maxime harum, qui doloribus?
              Corrupti, autem optio.
            </div>
            <div className="post-view-commment text-[14px] pt-[4px] text-gray-400">
              View 1 comment
            </div>
            <div className="post-comment">
              <div className="flex items-center border-b border-gray-200">
                <input
                  type="text"
                  className="flex-grow py-2 outline-none"
                  placeholder="Add a comment..."
                />
                <button className="text-blue-500 font-semibold">Post</button>
              </div>
            </div>
          </div>

          <div className="user-post pb-[36px]">
            <div className="post-header pl-1 flex justify-between items-center">
              <div className="post-header--left flex space-x-4 items-center">
                <div className="user-avata w-12 h-12">
                  <Image
                    src={AvataImg}
                    alt="logo"
                    width={16}
                    height={16}
                    layout="responsive"
                    className="overflow-hidden cursor-pointer rounded-full bg-red-500"
                  />
                </div>
                <div className="user-name cursor-pointer font-bold text-[14px]">
                  User Name
                </div>
                <div className="posted-time text-gray-500 cursor-pointer text-[14px] text-opacity-50">
                  1d
                </div>
              </div>
              <div className="post-header--right cursor-pointer">
                <MoreHorizOutlinedIcon />
              </div>
            </div>
            <div className="post-media py-[12px]">
              <div className="user-post w-full h-full border border-black-500">
                <Image
                  src={PostImg}
                  alt="logo"
                  width={16}
                  height={16}
                  layout="responsive"
                  className="overflow-hidden cursor-pointer"
                />
              </div>
            </div>
            <div className="post-action flex justify-between">
              <div className="post-action--left flex items-center space-x-2">
                <LikePost />
                <CommentPost />
                <SharePost />
              </div>
              <div className="post-action--right">
                <SavePost />
              </div>
            </div>
            <div className="post-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              blanditiis ea error ullam, illum eligendi natus itaque mollitia ut
              nostrum quos quia doloremque, maxime harum, qui doloribus?
              Corrupti, autem optio.
            </div>
            <div className="post-view-commment text-[14px] pt-[4px] text-gray-400">
              View 1 comment
            </div>
            <div className="post-comment">
              <div className="flex items-center border-b border-gray-200">
                <input
                  type="text"
                  className="flex-grow py-2 outline-none"
                  placeholder="Add a comment..."
                />
                <button className="text-blue-500 font-semibold">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="follow pl-14 w-5/12">
        <div>
          <Account
            username="duongwfinnn"
            descript="Nguyễn Dương Finn"
            avatar="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
          />
          <h2 className="font-bold text-gray-400 text-lg mb-4">
            Suggested Accounts
          </h2>
          {accounts.map((account) => (
            <Account
              key={account.username}
              username={account.username}
              avatar={account.avatar}
              descript="Followed by DuyChan"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
