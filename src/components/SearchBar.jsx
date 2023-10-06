import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";

const SearchBar = () => {
  useEffect(() => {
    const input = document.getElementById("myInput");
    input.setAttribute("size", input.getAttribute("placeholder").length);
  }, []);

  return (
    <div className="flex items-center gap-4 mt-[30px] w-fit px-1">
      <FiSearch className="text-xl text-white" />
      <input
        id="myInput"
        type="text"
        placeholder="Search for movies or TV series"
        className="placeholder-gray-500 place text-xl bg-mainBgColor text-white outline-none"
      />
    </div>
  );
};

export default SearchBar;
