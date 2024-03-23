import { ModalTitle } from "@/components/Globals/Modal";

export default function AboutText() {
  return (
    <div className="max-w-[520px] mx-auto">
      <ModalTitle className="text-center">About</ModalTitle>
      <div>
        <p>
          Troygrade is a tool created to help custom skin creators with bin
          files. Supports migrating troybin files, fixing outdated bin files and
          more to come in the future.
        </p>
        <p>
          If you encounter any bugs, you can let me know by opening an issue on
          the{" "}
          <a
            href="https://github.com/Leischii/Leischii.github.io/issues"
            target="_blank"
            rel="noopener noreferrer external"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            Troygrade github issues page
          </a>
          .
        </p>
        <p>
          Troybin converter is a javascript port of moonshadows troybin
          converter from lol-pytools.
        </p>
      </div>
      <div className="w-full mt-7">
        <div className="flex flex-row justify-center items-center space-x-7">
          <div className="flex items-center min-h-[55px] relative left-0">
            <img
              src="https://avatars.githubusercontent.com/u/7480230?v=4"
              width={64}
              height={64}
              className="rounded-[50%] border-2 border-transparent relative left-3 top-0"
              alt="Moonshadow profile icon"
            />
            <div className="bg-[url(./assets/images/social_panel_level_ring.png)] bg-center bg-contain size-[92px] absolute -left-0.5"></div>
          </div>
          <div className="flex flex-col">
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
  );
}
