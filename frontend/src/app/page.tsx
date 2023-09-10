import React from "react";
import SideBar from "./componnets/layouts/SideBar";
import Content from "./componnets/layouts/Content";

const App = () => {
  return (
    <div className="w-screen h-full min-h-screen flex">
      <SideBar />
      <Content />
    </div>
  );
};

export default App;
