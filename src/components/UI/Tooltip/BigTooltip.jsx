const BigTooltip = ({ tip }) => {
  return (
    <div
      id="tooltip-wrapper"
      className="relative bottom-[132px] w-full flex justify-center h-full z-[999999]"
    >
      <div
        role="tooltip"
        className="absolute min-w-max max-w-xs min-h-max max-h-[80px] box-border border-[thin] bg-[#1a1c21] p-2"
        style={{
          borderImage:
            "linear-gradient(to top,#785b28 0%,#c89c3c 55%,#c8a355 71%,#c8aa6e 100%) 1 stretch",
        }}
        id="tooltip-top-big"
      >
        <div className="relative -top-5 box-border w-full text-sm text-[#d8d8d8]">
          {tip}
        </div>
      </div>
    </div>
  );
};

export default BigTooltip;
