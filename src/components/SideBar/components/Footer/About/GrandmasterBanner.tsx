import grandmasterBanner from "@/assets/images/grandmaster.png";
import wings from "@/assets/images/wings_grandmaster.png";

export default function GrandmasterBanner() {
  return (
    <div className="shrink-0">
      <img
        src={grandmasterBanner}
        width={195}
        alt="grandmaster banner"
        className="absolute top-0 right-0 h-[380px]"
      />
      <div className="absolute top-0 right-0">
        <div className="flex flex-col items-center w-[195px] relative top-16">
          <div>
            <img
              src={wings}
              alt=""
              width={287}
              className="absolute -top-[7rem] left-0"
            />
            <img
              src="https://avatars.githubusercontent.com/u/141276833?v=4"
              alt="Tasssiooo icon"
              width={64}
              className="rounded-[50%] relative top-1.5 -left-0.5"
            />
          </div>
          <span className="mt-7">Tássio</span>
          <span className="text-xs">Desktop port author</span>
        </div>
      </div>
    </div>
  );
}
