import { DefaultButton } from "@/components/Globals/DefaultButton";

import LinkButtons from "./Footer/LinkButtons";
import AppVersion from "./Footer/AppVersion";

export default function Footer() {
  return (
    <div className="flex flex-row w-full h-8">
      <LinkButtons />
      <AppVersion />
      <DefaultButton size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 7v2h2V7zm3 10v-2h-1v-4h-3v2h1v2h-1v2zm8-5c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"
          />
        </svg>
      </DefaultButton>
    </div>
  );
}
