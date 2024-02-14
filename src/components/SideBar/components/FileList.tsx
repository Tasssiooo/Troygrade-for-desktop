import {
  Roster,
  RosterContent,
  RosterItem,
  RosterTrigger,
} from "@/components/Globals/Roster";

export default function FileList() {
  return (
    <div className="w-full h-[calc(100%-9.2rem)]">
      <Roster type="multiple">
        <RosterItem value="troybins">
          <RosterTrigger>Troybins</RosterTrigger>
          <RosterContent>
            <div className="flex flex-row items-center *:h-12 hover:bg-neutral-500/50">
              <div className="flex justify-center items-center w-12">
                <div className="bg-white rounded-full size-8">A</div>
              </div>
              <div className="flex flex-col w-40 py-1.5">
                <span className="truncate leading-5 tracking-[0.025em]">RyzeBasicAttack_mis</span>
                <span className="text-xs">CONV_TROYBIN</span>
              </div>
            </div>
          </RosterContent>
        </RosterItem>
        <RosterItem value="bins">
          <RosterTrigger>Bins</RosterTrigger>
          <RosterContent></RosterContent>
        </RosterItem>
      </Roster>
    </div>
  );
}
