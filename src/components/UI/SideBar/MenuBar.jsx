import { IoBug, IoLogoGithub, IoInformationCircle } from "react-icons/io5";

const MenuBar = () => {
  return (
    <div
      role="menubar"
      className="relative z-50 left-[1px] bottom-[1px] flex gap-0.5 w-52 h-8 text-[#3c3c41] items-center text-[11px] tracking-[.1em]"
      style={{ borderTop: "thin solid #1e282d" }}
      id="menu-panel"
    >
      <button
        className="relative z-10 bg-[#010a13] cursor-pointer border-none p-0 outline-none"
        aria-label="about"
        id="about"
      >
        <div className="menu-bar-btn">
          <IoInformationCircle role="img" className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]" />
        </div>
      </button>
      <button
        className="relative z-10 bg-[#010a13] cursor-pointer border-none p-0 outline-none"
        aria-label="report a bug"
        id="bug"
      >
        <div className="menu-bar-btn">
          <IoBug role="img" className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]" />
        </div>
      </button>
      <div
        className="flex-[1] overflow-hidden text-center whitespace-nowrap"
        id="app-version"
      >
        v0.0.1
      </div>
      <button
        className="relative z-10 bg-[#010a13] cursor-pointer border-none p-0 outline-none"
        aria-label="Github repository"
        id="github"
      >
        <div className="menu-bar-btn">
          <IoLogoGithub role="img" className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]" />
        </div>
      </button>
    </div>
  );
};

export default MenuBar;
