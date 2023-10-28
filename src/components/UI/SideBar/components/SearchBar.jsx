import { useContext } from "react";
import { StatesContext } from "../../../../App";

const SearchBar = ({ toggleFilter, setToggleFilter }) => {
  const { search, setSearch } = useContext(StatesContext);
  return (
    <div
      className="flex flex-row justify-center items-center py-1 border-[thin] border-transparent box-border w-full h-[30px] absolute z-50 transition-all"
      style={{
        background:
          "linear-gradient(180deg,rgba(7,16,25,.7),rgba(32,39,44,.7))",
        borderImage: "linear-gradient(180deg,#785a28,#c8aa6e) 1 stretch",
        opacity: toggleFilter ? "1" : "0",
        visibility: toggleFilter ? "visible" : "hidden",
      }}
      id="search-container"
    >
      <label
        className="bg-[#c8aa6e] flex-shrink-0 h-full w-[30px] cursor-pointer filter-button"
        htmlFor="filter"
      ></label>
      <input
        type="search"
        name="search"
        id="filter"
        placeholder="Filter"
        autoComplete="off"
        autoFocus
        value={search}
        className="bg-transparent w-full outline-none text-[#f0e6d2] text-sm"
        onBlur={() => setToggleFilter(false)}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
