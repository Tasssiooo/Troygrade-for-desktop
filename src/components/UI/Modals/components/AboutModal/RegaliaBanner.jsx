const RegaliaBanner = ({ image, regalia, icon, author, description, link }) => {
  return (
    <div
      className="flex-shrink-0 h-full relative w-[194px]"
      id="regalia-banner-root"
    >
      <div className="flex w-full h-full">
        <div className="absolute w-[592px] h-[196px]">
          <div className="flex relative w-full h-full justify-center">
            <div className="flex w-full h-full justify-center">
              <img
                src={image}
                alt="author-banner"
                className="absolute top-[25%] w-[35%] h-[200%]"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute flex justify-center w-full h-full"
          id="icon-container"
        >
          <div className="pointer-events-auto flex relative w-fit h-fit top-[235px]">
            <div className="w-[100px] h-[100px]">
              <div className="w-[192px] h-[192px] rounded-[50%] absolute left-1/2 top-1/2">
                <div className="w-full h-full">
                  <div
                    className={`absolute w-[85%] h-[100%] -top-[120%] left-[61.5%] bg-cover ${regalia}`}
                    id="regalia-banner-icon"
                  >
                    <img
                      src={icon}
                      alt="profile icon"
                      width={52}
                      className="relative left-[55px] bg-[#1e2328] top-[100px] rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full left-[85%] relative z-[9999999] top-0 text-center">
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener external"
                className="text-xl block w-max h-max"
                id="author-name"
              >
                {author}
              </a>
              <span className="text-sm" id="author-description">
                {description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegaliaBanner;
