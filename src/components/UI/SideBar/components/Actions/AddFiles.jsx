const AddFiles = ({ setToggleTooltip, files, handleLoadFiles }) => {
  return (
    <div
      id="add"
      onMouseEnter={() => setToggleTooltip("add")}
      onMouseLeave={() => setToggleTooltip("")}
    >
      <label
        className="bg-[#c8aa6e] hover:bg-[#f3e0bd] flex-shrink-0 h-full w-[30px] block cursor-pointer add-button"
        htmlFor="add-file"
      >
        Add files
      </label>
      <input
        disabled={files.length === 20}
        type="file"
        id="add-file"
        accept=".txt, .troybin"
        multiple
        onChange={(e) => handleLoadFiles(e.target.files)}
        hidden
      />
    </div>
  );
};

export default AddFiles;
