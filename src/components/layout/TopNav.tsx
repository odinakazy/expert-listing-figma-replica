import { NavLink } from "react-router-dom";

import HomeIcon from "@/assets/Home.png";
import ToolIcon from "@/assets/Toolbox.png";
import TaskIcon from "@/assets/Task.png";
import RequestIcon from "@/assets/Request.png";
import ApplicationIcon from "@/assets/Application.png";
import ProfileIcon from "@/assets/Profile.png";

const navItems = [
  { label: "Dashboard", icon: HomeIcon, path: "/dashboard" },
  { label: "Listings", icon: ToolIcon, path: "/listings" },
  { label: "Users", icon: ProfileIcon, path: "/users" },
  { label: "Request", icon: RequestIcon, path: "/request" },
  { label: "Applications", icon: ApplicationIcon, path: "/applications" },
  { label: "Tasks", icon: TaskIcon, path: "/tasks" },
];

function TopNav() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="flex flex-col md:flex-row items-center md:justify-around h-auto md:h-14 py-2 md:py-0">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors my-1 md:my-0 ${
                isActive
                  ? "bg-[#176D5826] text-[#176D58]"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <img src={item.icon} alt="" className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default TopNav;
