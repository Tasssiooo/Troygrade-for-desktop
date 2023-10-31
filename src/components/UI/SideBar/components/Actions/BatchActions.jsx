const BatchActions = ({
  setToggleTooltip,
  setToggleActionsList,
  checkedFiles,
}) => {
  return (
    <>
      <button
        className="bg-[#c8aa6e] hover:bg-[#f3e0bd] shrink-0 h-full w-8 bg-none border-none cursor-pointer outline-none p-0 transition-opacity"
        id="batch-actions"
        style={{
          visibility: checkedFiles.length > 1 ? "visible" : "hidden",
          opacity: checkedFiles.length > 1 ? "1" : "0",
        }}
        onMouseEnter={() => setToggleTooltip("batch")}
        onMouseLeave={() => setToggleTooltip("")}
        onClick={() => setToggleActionsList((prev) => !prev)}
      ></button>
    </>
  );
};

export default BatchActions;
