import challengerBanner from "@/assets/images/challenger.png";
import wings from "@/assets/images/wings_challenger.png";

export default function ChallengerBanner() {
  return (
    <div className="shrink-0">
      <img
        src={challengerBanner}
        width={195}
        alt="challenger banner"
        className="absolute top-0 left-0 h-[380px]"
      />
      <div className="absolute top-0 left-0">
        <div className="flex flex-col items-center w-[195px] relative top-16">
          <div>
            <img
              src={wings}
              alt=""
              width={287}
              className="absolute -top-[7rem] left-0"
            />
            <img
              src="https://avatars.githubusercontent.com/u/5237500?v=4"
              alt="Leischii icon"
              width={64}
              className="rounded-[50%] relative top-1.5"
            />
          </div>
          <span className="mt-7">Leischii</span>
          <span className="text-xs">Troygrade author</span>
        </div>
      </div>
    </div>
  );
}
