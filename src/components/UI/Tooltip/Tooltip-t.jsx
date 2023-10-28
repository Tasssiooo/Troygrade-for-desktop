const TooltipTop = () => {
  return (
    <div
      id="tooltip-wrapper-top"
      className="absolute top-[250px] z-[999] flex flex-col"
    >
      <div
        role="tooltip"
        className="min-w-[100px] h-8 box-border border-[thin] bg-[#1a1c21]"
        style={{
          borderImage:
            "linear-gradient(to top,#785b28 0%,#c89c3c 55%,#c8a355 71%,#c8aa6e 100%) 1 stretch",
        }}
        id="tooltip"
      >
        <div className="relative flex items-center justify-center box-border h-full text-sm">
          <p style={{ fontFamily: "beaufortforlol-regular" }}>Tooltip</p>
        </div>
      </div>
    </div>
  );
};

export default TooltipTop;
