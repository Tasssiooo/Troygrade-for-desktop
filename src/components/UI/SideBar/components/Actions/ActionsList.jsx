import { IoArrowDownOutline, IoBuild, IoTrashBin } from "react-icons/io5";

const ActionsList = () => {
  return (
    <div className="absolute top-[6.4rem] left-[7.8rem] w-36 h-22 z-[999]">
      <ul
        className="flex flex-col relative transition-all box-border bg-[#010a13] w-full h-full border-2 border-transparent"
        style={{
          borderImage:
            "linear-gradient(to bottom, #785a28 0, #463714 50%, #463714 100%) 1 stretch",
        }}
      >
        <li className="px-[10px] m-0 h-9 flex gap-1.5 items-center whitespace-nowrap relative cursor-pointer text-[#cdbe91] hover:text-[#f0e6d2] hover:bg-[#1e2328]">
          <IoArrowDownOutline className="text-lg" />
          <p className="text-sm">Save files</p>
        </li>
        <li className="px-[10px] m-0 h-9 flex gap-2 items-center whitespace-nowrap relative cursor-pointer text-[#cdbe91] hover:text-[#f0e6d2] hover:bg-[#1e2328]">
          <IoBuild />
          <p className="text-sm">Convert files</p>
        </li>
        <li className="px-[10px] m-0 h-9 flex gap-2 items-center whitespace-nowrap relative cursor-pointer text-[#cdbe91] hover:text-[#f0e6d2] hover:bg-[#1e2328]">
          <IoTrashBin />
          <p className="text-sm">Delete files</p>
        </li>
      </ul>
    </div>
  );
};

export default ActionsList;
