import { DefaultButton } from "@/components/Globals/DefaultButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";
import { Modal, ModalContent, ModalTrigger } from "@/components/Globals/Modal";
import { InfoSign } from "@/components/Globals/Icons";

import ChallengerBanner from "./About/ChallengerBanner";
import AboutText from "./About/AboutText";
import GrandmasterBanner from "./About/GrandmasterBanner";

export default function About() {
  return (
    <Modal>
      <TooltipProvider delayDuration={250}>
        <Tooltip>
          <TooltipTrigger asChild>
            <ModalTrigger asChild>
              <DefaultButton size="icon">
                <InfoSign />
              </DefaultButton>
            </ModalTrigger>
          </TooltipTrigger>
          <TooltipContent>About</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Modal content */}
      <ModalContent className="w-full max-w-[920px] h-96">
        <div>
          <ChallengerBanner />
          <AboutText />
          <GrandmasterBanner />
        </div>
      </ModalContent>
    </Modal>
  );
}
