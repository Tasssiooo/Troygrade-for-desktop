import { cn } from "@/lib/utils";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { filter } from "@/redux/reducers/appSlice";

import { useEffect } from "react";

export default function Filter() {
  const value = useAppSelector((state) => state.app.filter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    document.getElementById("filter")?.focus();
  }, [value])

  return (
    <div
      className={cn(
        !value.show
          ? "sr-only"
          : "flex flex-row py-1 pr-1.5 mb-1 border border-transparent w-full h-[30px] transition-all bg-[linear-gradient(180deg,rgba(7,16,25,.7),rgba(32,39,44,.7))] [border-image:linear-gradient(180deg,#785a28,#c8aa6e)_1_stretch]"
      )}
    >
      <label
        className="bg-[#c8aa6e] flex-shrink-0 h-full w-[30px] [mask:url(./assets/images/search_mask.png)_no-repeat_center] [mask-size:20px]"
        htmlFor="filter"
      ></label>
      <input
        type="search"
        name="search"
        id="filter"
        placeholder="Filter"
        autoComplete="off"
        value={value.content}
        onChange={(e) => dispatch(filter({ ...value, content: e.target.value }))}
        onBlur={() => dispatch(filter({ show: false, content: "" }))}
        className="bg-transparent w-full outline-none text-[#f0e6d2] text-sm"
      />
    </div>
  );
}
