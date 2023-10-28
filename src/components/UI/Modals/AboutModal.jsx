import { useContext } from "react";
import { StatesContext } from "../../../App";

import CloseDialogButton from "./components/CloseDialogButton";
import RegaliaBanner from "./components/AboutModal/RegaliaBanner";

import challengerBanner from "../../../assets/images/challenger.png";
import grandmasterBanner from "../../../assets/images/grandmaster.png";
import reinforcedSoul from "../../../assets/images/reinforced-soul-pf.png";
import leischii from "../../../assets/images/leischii-pf.png";
import moonshadow from "../../../assets/images/moonshadow-pf.png";

const ConvertModal = () => {
  const { showModal } = useContext(StatesContext);
  return (
    <div
      className="fixed z-[999] flex items-center justify-center inset-0 invisible opacity-0 transition-opacity"
      style={{
        opacity: showModal === "About" && "1",
        visibility: showModal === "About" && "visible",
      }}
    >
      <section
        className="bg-[#010a13] box-border flex flex-col w-10/12 h-[392px] border border-transparent shadow-dialog p-4"
        id="dialog"
        role="dialog"
      >
        <header className="flex items-center text-center w-1/2 h-10 mx-2">
          <div className="flex flex-row absolute gap-[500px] top-11 -left-[131px] bottom-0">
            <RegaliaBanner
              image={challengerBanner}
              regalia={"bg-regalia-icon-challenger"}
              icon={leischii}
              author={"Leischii"}
              description={"Troygrade author"}
              link={"https://github.com/Leischii"}
            />
            <RegaliaBanner
              image={grandmasterBanner}
              regalia={"bg-regalia-icon-grandmaster"}
              icon={reinforcedSoul}
              author={"Tássio"}
              description={"Desktop port author"}
              link={"https://github.com/Tasssiooo"}
            />
          </div>
          <h1 className="block p-4 text-[#f0e6d2] text-lg tracking-[.05em] leading-[22px] uppercase relative w-[100%] -right-[52%] border-b-[#1e282d] border-b-[thin]">
            About
          </h1>
          <CloseDialogButton position={"-right-[106.1%]"} />
        </header>
        <div className="flex flex-col gap-2 mx-2 py-4 px-[18%] relative z-[999999]">
          <p>
            Troygrade is a tool created to help custom skin creators with bin
            files. Supports migrating troybin files, fixing outdated bin files
            and more to come in the future.
          </p>
          <p>
            If you encounter any bugs, you can let me know via the Killerskins
            Discord or by opening an issue on the Troygrade github page.
            <br />
            <a
              href="https://discord.com/invite/killerskins-v2-938447764336017509"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              Killerskins Discord
            </a>
            <span className="mx-3">-</span>
            <a
              href="https://github.com/Leischii/Leischii.github.io/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              Troygrade Github Issues Page
            </a>
          </p>
          <p>
            Troybin converter is a javascript port of moonshadows troybin
            converter from lol-pytools.
          </p>
          <div className="w-full flex flex-row justify-center">
            <div className="flex items-center min-h-[55px] py-5 pl-2 relative left-0 w-52">
              <img
                src={moonshadow}
                width={38}
                height={38}
                className="absolute overflow-hidden rounded-[50%] border-2 border-transparent box-border left-[0.95rem] top-[0.95rem]"
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
                    <a
                      href="https://github.com/moonshadow565"
                      target="_blank"
                      rel="noreferrer noopener external"
                    >
                      Moonshadow
                    </a>
                    <a
                      href="https://github.com/moonshadow565/lolpytools"
                      target="_blank"
                      rel="noreferrer noopener external"
                      className="text-blue-500 text-sm hover:text-blue-400 hover:underline"
                    >
                      Lol-Pytools Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConvertModal;
