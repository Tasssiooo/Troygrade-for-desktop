import troygradeIcon from "../../../../assets/images/troygrade-icon.png";

const LogoFrame = () => {
  return (
    <div className="flex flex-col" style={{ borderBottom: "1px solid" }}>
      <div className="flex items-center min-h-[55px] py-5 pl-2 relative left-0 w-52">
        <img
          src={troygradeIcon}
          width={42}
          height={42}
          className="absolute overflow-hidden rounded-[50%] border-2 border-transparent box-border left-[0.80rem] top-[0.75rem]"
          alt="troygrade icon"
        />
        <div
          className="bg-icon-ring bg-center bg-contain w-[64px] h-[64px] absolute left-0.5 top-0.5"
          id="icon-element"
        ></div>
        <div className="flex-[1] overflow-hidden" id="details">
          <div
            className="overflow-hidden text-ellipsis whitespace-nowrap tracking-[.0375em] text-[#f0e6d2] text-sm leading-[18px]"
            id="name"
          >
            <div className="flex flex-col ml-[4rem]">
              <span>Troygrade</span>
              <a href="https://github.com/Leischii" target="_blank" rel="noreferrer noopener external" className="flex flex-row items-center gap-1 cursor-pointer" style={{textDecoration: 'none'}}>
                <span className="bg-[#1e825a] static bottom-[initial] right-[initial] w-2.5 h-2.5 rounded-[50%] box-border shadow shadow-[#010a13]" style={{border: '2px solid #36d987'}}></span>
                <span className="text-[#36d987] text-xs">by Leischii</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoFrame;
