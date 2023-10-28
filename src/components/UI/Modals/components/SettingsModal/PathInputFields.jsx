const PathInputFields = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="flex flex-col shrink-0 my-[5px] overflow-hidden"
        id="assets-path-input-container"
      >
        <span className="text-[#d7d7d7] text-sm">Assets path</span>
        <div
          className="flex items-center gap-1 flex-row grow justify-start overflow-hidden"
          id="input-container-assets"
        >
          <input
            className="border border-[hsla(45,10%,59%,.4)] bg-transparent w-full outline-none px-1 py-0.5"
            name="assets"
            id="assets"
            aria-label="assets path"
          />
          <label
            htmlFor="assets"
            className="w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-[50%] bg-[url(./assets/images/icon-edit.png)]"
          ></label>
        </div>
      </div>
      <div
        className="flex flex-col shrink-0 my-[5px] overflow-hidden"
        id="file-path-input-container"
      >
        <span className="text-[#d7d7d7] text-sm">File path</span>
        <div
          className="flex items-center gap-1 flex-row grow justify-start overflow-hidden"
          id="input-container-file"
        >
          <input
            className="border border-[hsla(45,10%,59%,.4)] bg-transparent w-full outline-none px-1 py-0.5"
            name="file"
            id="file"
            aria-label="file path"
          />
          <label
            htmlFor="file"
            className="w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-[50%] bg-[url(./assets/images/icon-edit.png)]"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default PathInputFields;
