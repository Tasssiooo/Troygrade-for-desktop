import RosterGroup from "./RosterGroup";

const ListSection = () => {
  return (
    <section className="flex-[1] relative w-full h-[50%]">
      <div className="relative flex-1 h-[99.5%] overflow-y-auto overflow-x-hidden">
        <div className="relative flex flex-col">
          <RosterGroup id={"CONV_TROYBIN"} name={"troybins"}/>
          <RosterGroup id={"MIG_BIN"} name={"bins"} />
        </div>
      </div>
    </section>
  );
};

export default ListSection;
