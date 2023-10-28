import ActionsBar from "./components/ActionsBar";
import ListSection from "./components/ListSection";
import LogoFrame from "./components/LogoFrame";
import MenuBar from "./components/MenuBar";

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
