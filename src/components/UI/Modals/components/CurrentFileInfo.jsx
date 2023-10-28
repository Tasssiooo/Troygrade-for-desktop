const CurrentFileInfo = ({ file }) => {
  return (
    <div className="flex flex-col w-2/5">
      <div className="text-[#cdbe91] w-full text-lg bg-[#cdbe9136] text-left h-auto min-h-[24px] leading-4 border-l-[3px] border-l-[#c89b3c] p-1 indent-1">
        <h2>Current file</h2>
      </div>
      <ul className="flex flex-col gap-0.5 py-2 text-sm text-[#e8e1d3] w-full h-full whitespace-nowrap border-r border-r-[#cdbe9136]">
        <li>
          ID: <span className="text-[#cdbe91]">{file?.id}</span>
        </li>
        <li>
          Name: <span className="text-[#cdbe91]">{file?.fileName}</span>
        </li>
        <li>
          Type:{" "}
          <span className="text-[#cdbe91]">
            {file?.type === "CONV_TROYBIN" ? "Troybin" : "Bin"}
          </span>
        </li>
        <li>Position:</li>
      </ul>
    </div>
  );
};

export default CurrentFileInfo;
