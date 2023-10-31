const Search = ({ setToggleTooltip, setToggleFilter }) => {
  const searchInput = document.getElementById("filter");
  return (
    <div
      className="bg-[#c8aa6e] hover:bg-[#f3e0bd] flex-shrink-0 h-full w-[30px] cursor-pointer filter-button"
      role="button"
      aria-label="Look for files in the list"
      id="search-button"
      onClick={() => {
        setToggleFilter(true);
        setTimeout(() => {
          searchInput.focus();
        }, 200);
      }}
      onMouseEnter={() => setToggleTooltip("search")}
      onMouseLeave={() => setToggleTooltip("")}
    ></div>
  );
};

export default Search;
