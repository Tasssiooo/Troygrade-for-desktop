import React from "react";
import ActionsBar from "./ActionsBar";
import ListSection from "./ListSection";
import LogoFrame from "./LogoFrame";
import MenuBar from "./MenuBar";

const Sidebar = () => {
  return (
    <section className="relative z-50 w-52 h-screen bg-sidebar">
      <div className="text-[#a09b8c] cursor-default flex flex-col h-full relative select-none w-full">
        <LogoFrame />
        <ActionsBar />
        <ListSection />
        <MenuBar />
      </div>
    </section>
  );
};

export default Sidebar;
