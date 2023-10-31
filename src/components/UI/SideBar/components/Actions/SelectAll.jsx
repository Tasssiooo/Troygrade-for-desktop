const SelectAll = ({ checkedFiles, files, setToggleSelectAll }) => {
  return (
    <div className="flex flex-row w-full hover:text-[#dbdbdb]" id="select-all-wrapper">
      <div
        className="w-5 h-5 mr-1.5 flex-shrink-0 cursor-pointer"
        role="checkbox"
        id={
          files.length > 0 && checkedFiles.length === files.length
            ? "select-all-on"
            : "select-all"
        }
        onClick={() => setToggleSelectAll((prev) => !prev)}
      ></div>
      <label
        className="w-full text-sm cursor-pointer"
        htmlFor={
          checkedFiles.length === files.length ? "select-all-on" : "select-all"
        }
        id="select-label"
        onClick={() => setToggleSelectAll((prev) => !prev)}
      >
        Select All
      </label>
    </div>
  );
};

export default SelectAll;
