const BigTooltip = ({ tip }) => {
  return (
    <div
      id="tooltip-wrapper"
      className="relative bottom-[84px] w-full flex justify-center h-full z-[999999]"
    >
      <div
        role="tooltip"
        className="absolute w-max h-8 box-border border-[thin] bg-[#1a1c21] p-1.5"
        style={{
          borderImage:
            "linear-gradient(to top,#785b28 0%,#c89c3c 55%,#c8a355 71%,#c8aa6e 100%) 1 stretch",
        }}
        id="tooltip-top"
      >
        <div className="relative -top-5 flex items-center justify-center box-border h-full text-sm">
          <p className="text-[#d8d8d8]">{tip}</p>
        </div>
      </div>
    </div>
  );
};

export default BigTooltip;
