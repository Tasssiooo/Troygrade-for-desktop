const Checkbox = ({ forAll, setForAll }) => {
  return (
    <div className="flex gap-1 items-center my-2" id="checkbox-container">
      <label
        className={`w-[14px] h-[14px] cursor-pointer shrink-0 bg-[url(./assets/images/checkbox-spritesheet.png)] ${
          forAll && "bg-[0px_-28px]"
        } hover:${forAll ? "bg-[0px_-42px]" : "bg-[0px_-14px]"}`}
        id="checkbox"
        htmlFor="setForAll"
      >
        <span className="absolute cursor-pointer -mt-[1px] ml-[17px] text-xs text-[#d7d7d7]">
          Set paths for all files
        </span>
      </label>
      <input
        type="checkbox"
        name="setForAll"
        id="setForAll"
        value={forAll}
        onChange={() => setForAll((prev) => !prev)}
        className="opacity-0 pointer-events-none"
        hidden
      />
    </div>
  );
};

export default Checkbox;
