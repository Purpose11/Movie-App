import sidebarData from "../utils/sideBarData";
import { MdMovie } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-[60px] h-[95vh] fixed bg-navBarColor ml-[30px] my-[15px] rounded-xl flex flex-col items-center py-4">
      <MdMovie className="text-[#FE4749] text-2xl" />
      <div className="mt-[50px] flex flex-col gap-5 flex-grow">
        {sidebarData.map((data) => {
          return (
            <NavLink
              key={data.id}
              to={data.path}
              className="gap-4"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#596890",
              })}
            >
              {data.icon}
            </NavLink>
          );
        })}
      </div>
      <div className="avatar">
        <div className="h-[24px] w-[24px] rounded-full  ring-white ring-1 ">
          <img
            src="./profile.jpg"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
